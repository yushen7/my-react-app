// import { Button, previewImage } from 'zent'
import MaterialGenerator from '../MaterialGenerator'
import { useEffect, useState } from 'react'
import { AllMaterials, GenerationStatus, MaterialChannel } from '../../constant'
import {
  fetchShopPubImgToken,
  getPrepaidPromotionQrCode,
  getPreviewQrcode,
  queryCategoryByCategoryTypeAndMediaType,
  uploadFileToQiniu,
  uploadNetworkImage,
} from '../MaterialGenerator/api'
import qrcode from 'qrcode'

// function showImagePreview(imageUrl) {
//   previewImage({
//     images: [imageUrl],
//     showRotateBtn: true,
//     showScaleBtn: true,
//   })
// }

const MaterialGeneratorContainer = ({
  store,
  data,
  selectedMaterials,
  template,
  onGenerate,
  generationStatus,
  isView,
}) => {
  const [materialImageInfo, setMaterialImageInfo] = useState({})
  const handleGenerate = async value => {
    if (value.id === MaterialChannel.banner) {
      const res = await Promise.all([
        fetchShopPubImgToken(),
        fetch(value.img).then(res => res.blob()),
        queryCategoryByCategoryTypeAndMediaType(),
      ])
      const formData = new FormData()
      formData.append('file', res[1])
      formData.append('token', res[0].uptoken)
      formData.append('x:categoryId', res[2].categoryId)
      const { attachment_id } = await uploadFileToQiniu(formData)

      // getPreviewQrcode({
      //   imgId: Number(attachment_id),
      // }).then(res => {
      //   console.log(res, 'res')

      // })

      const { shortUrl } = await getPrepaidPromotionQrCode()

      // 需要二维码
      const dataUrl = await qrcode.toDataURL(shortUrl, {
        errorCorrectionLevel: 'H',
        margin: 1,
        width: 300,
        color: {
          dark: '#000000',
          light: '#ffffff',
        },
      })

      setMaterialImageInfo(prev => ({
        ...prev,
        [value.id]: {
          imgUrl: value.img,
          prepaidActivityId: attachment_id,
          qrCode: dataUrl,
        },
      }))
      return
    }
    setMaterialImageInfo(prev => ({
      ...prev,
      [value.id]: {
        imgUrl: value.img,
      },
    }))
  }

  useEffect(() => {
    onGenerate(materialImageInfo)
  }, [materialImageInfo])

  const handleEdit = item => {
    console.log('编辑物料', item)
  }

  return (
    <>
      {generationStatus === GenerationStatus.Generating && (
        <div
          style={{
            textAlign: 'center',
          }}
        >
          <img src="https://img01.yzcdn.cn/upload_files/2025/03/27/FsipbB7XV8BXakoJ3fX-c7DIap5o.gif" />
          <div style={{ marginTop: 12 }}>正在生成中，请稍候</div>
        </div>
      )}
      <div
        style={{
          visibility:
            generationStatus === GenerationStatus.Generating
              ? 'hidden'
              : 'visible',
        }}
        className="material-items-container"
      >
        {AllMaterials.filter(item => selectedMaterials.includes(item.id)).map(
          item => {
            const imageInfo = materialImageInfo[item.id]
            return (
              <div key={item.id} className="material-item">
                <div
                  className="material-image"
                  style={{
                    backgroundImage: `url(${imageInfo?.imgUrl})`,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    cursor: 'pointer',
                  }}
                  onClick={() => {
                    // if (imageInfo?.imgUrl) {
                      // showImagePreview(imageInfo.qrCode || imageInfo.imgUrl)
                    // }
                  }}
                >
                  <MaterialGenerator
                    onGenerate={handleGenerate}
                    store={store}
                    data={data}
                    template={template}
                    channel={item.id}
                  />
                </div>
                <div className="material-info">
                  <div className="material-title">{item.title}</div>
                  <div className="material-edit">
                    {/* {!isView && (
                      <Button type="text" onClick={() => handleEdit(item)}>
                        {item.editText}
                      </Button>
                    )} */}
                  </div>
                </div>
              </div>
            )
          }
        )}
      </div>
    </>
  )
}

export default MaterialGeneratorContainer

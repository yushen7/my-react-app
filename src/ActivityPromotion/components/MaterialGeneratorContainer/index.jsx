// import { Button, Notify, previewImage } from 'zent'
import MaterialGenerator from '../MaterialGenerator'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { AllMaterials, GenerationStatus, MaterialChannel } from '../../constant'
import {
  fetchShopPubImgToken,
  getPoster,
  getPreviewQrcode,
  queryCategoryByCategoryTypeAndMediaType,
  uploadFileToQiniu,
} from '../MaterialGenerator/api'
import qrcode from 'qrcode'
import { isEqual, omit } from 'lodash'
import Lottie from 'lottie-react'
import { AnimationData } from './animate'
import { MaterialChannelList } from '../MaterialGenerator/channels'
import { calculateElementOffsets } from '../MaterialGenerator/utils'
// import { showBombPosterJarvisAssistant } from '../../../../helper/utils/jarvisAssistant'

// import { getStore } from '../../../../../../common/store'
const showBombPosterJarvisAssistant = () => {}
// function showImagePreview(imageUrl) {
//   previewImage({
//     images: [imageUrl],
//     showRotateBtn: true,
//     showScaleBtn: true,
//   })
// }

// 自定义 Hook 用于跟踪依赖项变化
function usePrevious(value) {
  const ref = useRef()

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}

async function handleUploadMaterial(value) {
  const res = await Promise.all([
    fetchShopPubImgToken(),
    fetch(value.imgUrl).then(res => res.blob()),
    queryCategoryByCategoryTypeAndMediaType(),
  ])
  const formData = new FormData()
  formData.append('file', res[1])
  formData.append('token', res[0].uptoken)
  formData.append('x:categoryId', res[2].categoryId)
  const { attachment_id } = await uploadFileToQiniu(formData)

  let previewUrl
  if (value.id === MaterialChannel.banner) {
    previewUrl = await getPreviewQrcode({
      imgId: attachment_id,
    }).catch(() => '')
  }

  let dataUrl

  if (previewUrl) {
    // 需要二维码
    dataUrl = await qrcode.toDataURL(previewUrl, {
      errorCorrectionLevel: 'H',
      margin: 1,
      width: 300,
      color: {
        dark: '#000000',
        light: '#ffffff',
      },
    })
  }

  return {
    id: value.id,
    imgUrl: value.imgUrl,
    imgId: attachment_id,
    qrCode: dataUrl,
    layerInfoList: value.layerInfoList,
  }
}

function fabricElements2HTML(fabricElements) {
  let htmlString =
    '<style>div,img{position:absolute;}div{z-index:2; font-family: "HarmonyOS Sans SC";}img{z-index:1;} </style> <div class="material-container" style="position: relative;">'

  fabricElements.forEach(element => {
    const commonStyles = `
      top: ${element.top}px;
      left: ${element.left}px;
      width: ${element.width}px;
      height: ${element.height}px;
    `

    if (element.type === 'text') {
      const textStyles = `
        ${commonStyles}
        font-size: ${element.fontSize};
        font-weight: ${element.fontWeight};
        line-height: ${element.lineHeight};
        color: ${element.color};
        text-align: ${element.textAlign};
      `

      htmlString += `<div style="${textStyles}">${element.text}</div>`
    } else if (element.type === 'image') {
      htmlString += `<img src="${element.content}" style="${commonStyles}" />`
    }
  })

  htmlString += '</div>'
  return htmlString
}

/**
 * @param {Object} payload
 * @param {{
 * title: string;
 * subtitle: string;
 * startDate: string;
 * endDate: string;
 * materialImageInfo: Record<MaterialChannel, { imgUrl: string }>;
 * rechargeList: Array<{ amount: number; bonusAmount: number }>;
 * isOpenRecommend: boolean;
 * }} payload.data - 数据
 * @param {{
 * materialImageInfo: Record<MaterialChannel, { imgUrl: string }>;
 * rechargeList: Array<{ amount: number; bonusAmount: number }>;
 * isOpenRecommend: boolean;
 * }} payload.activityPromotion - 活动推广数据
 * @param {string[]} payload.selectedMaterials - 选中的物料
 * @param {string} payload.template - 模板
 * @param {Function} payload.onGenerate - 生成物料
 * @param {GenerationStatus} payload.generationStatus - 生成状态
 * @param {boolean} payload.isView - 是否查看
 * @returns {JSX.Element}
 */
const MaterialGeneratorContainer = ({
  data,
  activityPromotion,
  selectedMaterials,
  generationStatus,
  isView,
  setGenerationStatus,
  setActivityPlanData,
}) => {
  // const { context } = getStore()
  // const JarvisAssistantBridge = context.components.JarvisAssistantBridge
  const { materialImageInfo, template } = activityPromotion
  const [key, setKey] = useState(0)
  const prevRenderData = usePrevious({
    title: data.title,
    subtitle: data.subtitle,
    startDate: data.startDate,
    endDate: data.endDate,
    rechargeList: data.rechargeList,
  })

  const handleDone = useCallback(
    values => {
      const newInfo = {
        ...values,
      }
      setGenerationStatus(GenerationStatus.Generated)
      setActivityPlanData({
        activityPromotion: {
          ...activityPromotion,
          materialImageInfo: newInfo,
        },
      })
    },
    [materialImageInfo, selectedMaterials]
  )

  const batchGetPosters = () => {
    if (isView) {
      return
    }
    const promises = MaterialChannelList.map(channel => {
      const calResult = calculateElementOffsets({
        ratio: channel.posterRatio,
        keepSize: true,
        className: channel.id,
      })

      console.log(fabricElements2HTML(calResult))
      console.log(channel, 'channel')

      return getPoster({
        elements: JSON.stringify(calResult),
        width: channel.width * channel.posterRatio,
        height: channel.height * channel.posterRatio,
      })
        .then(async res => {
          if (!res || !res.img) {
            return
          }
          const value = {
            id: channel.id,
            imgUrl: res.img,
            layerInfoList: calResult,
          }
          if (
            channel.id === MaterialChannel.banner ||
            channel.id === MaterialChannel.windowPromotion
          ) {
            return handleUploadMaterial(value)
          }
          return value
        })
    })
    Promise.all(promises).then(values => {
      handleDone(
        values
          .filter(value => Boolean(value))
          .reduce((acc, value) => {
            acc[value.id] = value
            return acc
          }, {})
      )
    })
  }

  // const handleEdit = async (materialImageInfo, item) => {
  //   const { layerInfoList } = materialImageInfo[item.id]
  //   showBombPosterJarvisAssistant(layerInfoList, res => {
  //     const { imgList } = res
  //     setActivityPlanData({
  //       activityPromotion: {
  //         ...activityPromotion,
  //         materialImageInfo: {
  //           ...materialImageInfo,
  //           [item.id]: {
  //             ...materialImageInfo[item.id],
  //             imgUrl: imgList[0].attachment_url,
  //             edited: true,
  //           },
  //         },
  //       },
  //     })
  //   })
  // }

  // useEffect(() => {
  //   if (isView) {
  //     return
  //   }
  //   const timeout = setTimeout(batchGetPosters, 5000)
  //   return () => {
  //     clearTimeout(timeout)
  //   }
  // }, [template, isView])

  // useEffect(() => {
  //   // 如果正在生成中，不触发
  //   if (generationStatus === GenerationStatus.Generating || isView) {
  //     return
  //   }

  //   const currentData = {
  //     title: data.title,
  //     subtitle: data.subtitle,
  //     startDate: data.startDate,
  //     endDate: data.endDate,
  //     rechargeList: data.rechargeList,
  //   }

  //   // data里面的结构 title、subTitle、startDate、endDate、rechargeList 变化之后
  //   // setKey(getRenderKey(data))
  //   const isChanged = !isEqual(prevRenderData, currentData)

  //   if (isChanged) {
  //     setTimeout(() => {
  //       batchGetPosters()
  //     }, 5000)
  //     // setKey(prev => prev + 1)
  //     setActivityPlanData({
  //       activityPromotion: {
  //         ...activityPromotion,
  //         materialImageInfo: {},
  //       },
  //     })
  //     setGenerationStatus(GenerationStatus.Generating)
  //     setKey(prev => prev + 1)
  //   }
  // }, [
  //   generationStatus,
  //   isView,
  //   data.title,
  //   data.subtitle,
  //   data.startDate,
  //   data.endDate,
  //   data.rechargeList,
  // ])

  return (
    <>
      {generationStatus === GenerationStatus.Generating && (
        <div
          style={{
            textAlign: 'center',
          }}
        >
          <Lottie
            animationData={AnimationData}
            loop={true}
            autoplay={true}
            style={{ display: 'inline-block', width: 28, height: 28 }} // 自定义样式
          />
          <div style={{ marginTop: 12 }}>正在生成中，请稍候</div>
        </div>
      )}
      <div
        key={key}
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
            const imageInfo = materialImageInfo?.[item.id] || {}
            return (
              <div key={item.id + String(key)} className="material-item">
                <div
                  className="material-image"
                  style={{
                    backgroundImage: `url(${imageInfo?.imgUrl})`,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    cursor: 'pointer',
                  }}
                  // onClick={() => {
                  //   if (imageInfo?.imgUrl) {
                  //     showImagePreview(imageInfo.qrCode || imageInfo.imgUrl)
                  //   }
                  // }}
                >
                  <MaterialGenerator
                    data={data}
                    template={activityPromotion.template}
                    channel={item.id}
                  />
                </div>
                {/* <div className="material-info">
                  <div className="material-title">{item.title}</div>
                  <div className="material-edit">
                    {!isView && !imageInfo.edited && (
                      <Button
                        type="text"
                        onClick={() => handleEdit(materialImageInfo, item)}
                      >
                        {item.editText}
                      </Button>
                    )}
                  </div>
                </div> */}
              </div>
            )
          }
        )}
      </div>
    </>
  )
}

export default MaterialGeneratorContainer

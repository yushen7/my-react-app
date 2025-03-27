import request from '../../../../../../common/helper/request'

const prefix = '/v4/third-plugin/prepaid-expert'

const dataRequest = (...params) => request(...params).then(res => res.data)

export const uploadFileToQiniu = data =>
  dataRequest({
    url: 'https://upload.qiniup.com',
    method: 'POST',
    data,
    timeout: 40000,
    header: {
      'Content-Type': 'multipart/form-data',
    },
  })

/** 获取图片上传token
 * @returns {Promise<{uptoken: string}>} - Promise对象
 */
export const fetchShopPubImgToken = () => {
  return dataRequest({
    url: `${prefix}/shopPubImgUploadToken.json`,
    method: 'POST',
    useBizRequest: true,
  })
}

/** 获取二维码
 * @returns {Promise<{qrCode: string}>} - Promise对象
 */
export const getPrepaidPromotionQrCode = () => {
  return dataRequest({
    url: `${prefix}/getPrepaidPromotionQrCode.json`,
    method: 'GET',
    useBizRequest: true,
    data: {
      pagepath: `packages/pre-card/home/index?entry=1`,
    },
  })
}

/**
 * 获取海报
 * @param {{elements: string, width: number, height: number, selector: string }} params - 参数
 * @returns {Promise<{poster: string}>} - Promise对象
 */
export const getPoster = ({ elements, width, height, selector }) => {
  return dataRequest({
    url: `${prefix}/getPoster.json`,
    method: 'POST',
    useBizRequest: true,
    data: {
      elements,
      width,
      height,
    },
    header: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  })
}

/**
 * 上传网络图片
 * @param {{request: Function}} yz - yz
 * @param {{channel: string, ...rest}} params - 参数
 * @returns {Promise<{attachment_url: string}>} - Promise对象
 */
// export const uploadNetworkImage = ({ channel = 'youzan_www', ...rest }) => {
//   return request({
//     url: `${prefix}/uploadNetworkImage.json`,
//     method: 'POST',
//     withCredentials: true,
//     noXRequestedWithHeader: true,
//     data: {
//       channel,
//       ...rest,
//     },
//     useBizRequest: true,
//   }).then(res => res.data)
// }

export const queryCategoryByCategoryTypeAndMediaType = () => {
  return dataRequest({
    url: `${prefix}/queryCategoryByCategoryTypeAndMediaType.json`,
    method: 'GET',
  })
}

export const getPreviewQrcode = (data) => {
  return dataRequest({
    url: `${prefix}/getPreviewQrcode.json`,
    method: 'GET',
    data,
  })
}

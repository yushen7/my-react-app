const prefix = '/v4/third-plugin/prepaid-expert'

export const uploadFileToQiniu = (yz, data) =>
  yz.request({
    url: 'https://upload.qiniup.com',
    method: 'POST',
    data,
    timeout: 40000,
    contentType: 'multipart/form-data; charset=UTF-8',
  })

/** 获取图片上传token
 * @param {{request: Function}} yz - yz
 * @returns {Promise<{uptoken: string}>} - Promise对象
 */
export const fetchShopPubImgToken = yz => {
  return yz.request({
    url: `${prefix}/shopPubImgUploadToken.json`,
    method: 'POST',
    useBizRequest: true,
  })
}

/** 获取二维码
 * @param {{request: Function}} yz - yz
 * @returns {Promise<{qrCode: string}>} - Promise对象
 */
export const getPrepaidPromotionQrCode = yz => {
  return yz.request({
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
 * @param {{request: Function}} yz - yz
 * @param {{elements: string, width: number, height: number, selector: string }} params - 参数
 * @returns {Promise<{poster: string}>} - Promise对象
 */
export const getPoster = (yz, { elements, width, height, selector }) => {
  return yz
    .request({
      url: `${prefix}/getPoster.json`,
      method: 'POST',
      useBizRequest: true,
      data: {
        elements,
        width,
        height,
      },
    })
    .then(res => {
      return res.data.data
    })
}

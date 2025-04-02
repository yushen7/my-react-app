// import { getStore, patchStore } from '../../../../common/store'
import { ChannelTemplate } from './constant'
import qrcode from 'qrcode'
const PreferentialModeEnum = {
  Num: 1,
  Discount: 2,
  Exchange: 3,
  Send: 4,
}

const getCouponInfo = (coupon, couponIndex) => {
  // 满减券
  if (coupon.preferentialMode === PreferentialModeEnum.Num) {
    const {
      // 满xx
      thresholdAmount,
      value,
    } = coupon
    return {
      prefix: `${couponIndex === 0 ? '还送' : ''}满`,
      text: `${thresholdAmount}-${value}`,
      suffix: '优惠券',
    }
  }

  // 兑换券
  if (coupon.preferentialMode === PreferentialModeEnum.Exchange) {
    return {
      prefix: `${couponIndex === 0 ? '还送' : ''}`,
      text: `商品`,
      suffix: '兑换券',
    }
  }
  return null
}

const formatDateString = (
  dateString,
  options = { removeYear: false, divider: '.' }
) => {
  const date = new Date(dateString)
  const year = date.getFullYear()
  const month =
    date.getMonth() + 1 < 10
      ? `0${date.getMonth() + 1}`
      : `${date.getMonth() + 1}`
  const day = date.getDate() < 10 ? `0${date.getDate()}` : `${date.getDate()}`
  return `${options.removeYear ? '' : year + options.divider}${month}${
    options.divider
  }${day}`
}

// export const handleQrCode = async url => {
//   const { baseData, prepaidPromotionQrCode } = getStore()

//   // 如果有直接返回 或者 小程序直接返回
//   if (
//     prepaidPromotionQrCode.url ||
//     prepaidPromotionQrCode.type === 'weapp' ||
//     prepaidPromotionQrCode.generating
//   ) {
//     return prepaidPromotionQrCode.url
//   }

//   patchStore({
//     prepaidPromotionQrCode: {
//       ...prepaidPromotionQrCode,
//       generating: true,
//     },
//   })
//   const { shortUrl } = baseData
//   const result = await qrcode.toDataURL(shortUrl, {
//     errorCorrectionLevel: 'H',
//     margin: 1,
//     width: 300,
//     color: {
//       dark: '#000000',
//       light: '#ffffff',
//     },
//   })

//   patchStore({
//     prepaidPromotionQrCode: {
//       ...prepaidPromotionQrCode,
//       url: result,
//       generating: false,
//     },
//   })
//   return result
// }


const planData = {
  "activityBackground": "春分踏青季家庭需求旺盛，借节日消费高峰推出储值赠礼活动，可快速回笼资金，锁定客户后续复购，提升淡季订单量，建议设置梯度优惠刺激充值。",
  "activityObjective": "提升淡季销量",
  "activityTitle": "春分储值活动方案",
  "reportDate": "2025-03-25",
  "activityDate": [
      "2025-04-03 00:00:00",
      "2025-04-10 23:59:59"
  ],
  "activityName": "春分储值有礼",
  "rechargeList": [
      {
          "amount": 100,
          "bonusAmount": 10,
          "couponRights": [
              {
                  "count": 1,
                  "preferentialMode": 1,
                  "relativeValidTimeDuration": 7,
                  "thresholdAmount": 48,
                  "thresholdType": 1,
                  "validTimeGenerateType": 2,
                  "value": 8,
                  "voucherValueGenerateType": 1,
                  "goodsInfo": [
                      {
                          "type": "item",
                          "channelId": 0,
                          "itemId": 6269,
                          "select": "all"
                      },
                      {
                          "type": "item",
                          "channelId": 1,
                          "itemId": 533,
                          "select": "all"
                      }
                  ]
              }
          ]
      },
      {
          "amount": 200,
          "bonusAmount": 30,
          "couponRights": [
              {
                  "count": 1,
                  "preferentialMode": 1,
                  "relativeValidTimeDuration": 7,
                  "thresholdAmount": 68,
                  "thresholdType": 1,
                  "validTimeGenerateType": 2,
                  "value": 10,
                  "voucherValueGenerateType": 1,
                  "goodsInfo": [
                      {
                          "type": "item",
                          "channelId": 0,
                          "itemId": 1045,
                          "select": "all"
                      },
                      {
                          "type": "item",
                          "channelId": 1,
                          "itemId": 3714,
                          "select": "all"
                      }
                  ]
              }
          ]
      },
      {
          "amount": 300,
          "bonusAmount": 50,
          "couponRights": [
              {
                  "count": 1,
                  "preferentialMode": 1,
                  "relativeValidTimeDuration": 7,
                  "thresholdAmount": 68,
                  "thresholdType": 1,
                  "validTimeGenerateType": 2,
                  "value": 10,
                  "voucherValueGenerateType": 1,
                  "goodsInfo": [
                      {
                          "type": "item",
                          "channelId": 0,
                          "itemId": 9335,
                          "select": "all"
                      },
                      {
                          "type": "item",
                          "channelId": 1,
                          "itemId": 1495,
                          "select": "all"
                      }
                  ]
              },
              {
                  "count": 1,
                  "preferentialMode": 1,
                  "relativeValidTimeDuration": 7,
                  "thresholdAmount": 100,
                  "thresholdType": 1,
                  "validTimeGenerateType": 2,
                  "value": 20,
                  "voucherValueGenerateType": 1,
                  "goodsInfo": [
                      {
                          "type": "item",
                          "channelId": 0,
                          "itemId": 3008,
                          "select": "all"
                      },
                      {
                          "type": "item",
                          "channelId": 1,
                          "itemId": 4035,
                          "select": "all"
                      }
                  ]
              }
          ]
      }
  ],
  "marketingPlan": {
      "crowdName": "过去参与过储值活动的客户",
      "crowdJson": null,
      "noticeChannels": [
          "wecom",
          "sms",
          "wechat"
      ],
      "notifications": [
          {
              "executeTimeDetail": {
                  "executeTime": "10:00:00"
              },
              "noticeContent": {
                  "wecom": "内容",
                  "sms": "内容",
                  "wechat": "内容"
              }
          }
      ]
  }
}

const getStore = () => {
  return {
    baseData: {}
  }
}

export function processPlanData() {
  const { baseData, prepaidPromotionQrCode } = getStore()
  const { shopInfo = {} } = baseData
  const { address = '', logo = '' } = shopInfo

  return {
    // 地址
    address,
    // 店铺 logo
    logo,
    title: planData.activityName,
    subtitle: planData.activityObjective,
    // YYYY.MM.DD - MM.DD
    startDate: formatDateString(planData.activityDate[0], {
      divider: '.',
    }),
    endDate: formatDateString(planData.activityDate[1], {
      removeYear: true,
      divider: '.',
    }),

    // 获取年份
    year: new Date(planData.activityDate[0]).getFullYear(),
    // 获取 MM/DD-MM/DD
    monthDate: `${formatDateString(planData.activityDate[0], {
      divider: '/',
      removeYear: true,
    })}-${formatDateString(planData.activityDate[1], {
      divider: '/',
      removeYear: true,
    })}`,

    rechargeList: planData.rechargeList.map(item => ({
      ...item,
      amount: item.amount,
      bonusAmount: item.bonusAmount,
      giftPacks: {
        bonusAmount: item.bonusAmount || 0,
        coupons: item.couponRights?.map((coupon, couponIndex) => ({
          ...coupon,
          ...getCouponInfo(coupon, couponIndex),
        })) || [],
      },
    })),
  }
}

export const getChannelTemplate = template => {
  if (template === ChannelTemplate.template1) {
    return ChannelTemplate.template2
  }
  if (template === ChannelTemplate.template2) {
    return ChannelTemplate.template3
  }
  if (template === ChannelTemplate.template3) {
    return ChannelTemplate.template1
  }
  return ChannelTemplate.template3
}

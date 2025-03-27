import { ChannelTemplate } from './constant'

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

const formatDateString = (dateString, options = {}) => {
  const date = new Date(dateString)
  const year = date.getFullYear()
  const month =
    date.getMonth() + 1 < 10
      ? `0${date.getMonth() + 1}`
      : `${date.getMonth() + 1}`
  const day = date.getDate() < 10 ? `0${date.getDate()}` : `${date.getDate()}`
  return `${options.removeYear ? '' : year + '.'}${month}.${day}`
}

export function processPlanData(planData) {
  return {
    title: planData.activityName,
    subtitle: planData.activityObjective,
    startDate: formatDateString(planData.activityDate[0]),
    endDate: formatDateString(planData.activityDate[1], {
      removeYear: true,
    }),
    rechargeList: planData.rechargeList.map(item => ({
      ...item,
      amount: item.amount,
      bonusAmount: item.bonusAmount,
      giftPacks: {
        bonusAmount: item.bonusAmount,
        coupons: item.couponRights.map((coupon, couponIndex) => ({
          ...coupon,
          ...getCouponInfo(coupon, couponIndex),
        })),
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

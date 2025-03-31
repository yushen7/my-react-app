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

export function processPlanData(planData) {
  return {
    title: planData.activityName,
    subtitle: planData.activityObjective,
    // YYYY.MM.DD - MM.DD
    startDate: formatDateString(planData.activityDate[0]),
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

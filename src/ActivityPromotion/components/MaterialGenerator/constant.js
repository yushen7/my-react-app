import { YLB, YLBChannel } from "./channels/ylb"

export const MaterialChannels = {
  ylb: 'ylb',
  banner: 'banner',
  cashierCard: 'cashierCard',
  windowPromotion: 'windowPromotion',
}



export const productList = [
  {
    amount: 10000,
    giftPacks: {
      // 赠送金
      bonusAmount: 2000,
      coupons: [],
    },
  },
  {
    amount: 20000,

    giftPacks: {
      // 赠送金
      bonusAmount: 4000,
      // 优惠券
      coupons: [
        {
          text: '满50-20优惠券',
        },
      ],
    },
  },
  {
    amount: 30000,
    giftPacks: {
      // 赠送金
      bonusAmount: 6000,
      // 优惠券
      coupons: [
        {
          text: '满50-20优惠券',
        },
        {
          text: '满100-50优惠券',
        },
      ],
    },
  },
  {
    amount: 40000,
    giftPacks: {
      // 赠送金
      bonusAmount: 8000,
      // 优惠券
      coupons: [
        {
          text: '满50-20优惠券',
        },
        {
          text: '满100-50优惠券',
        },
        {
          text: '商品兑换券',
        },
      ],
    },
  },
].map(item => ({
  ...item,
  amount: item.amount / 100,
  giftPacks: {
    ...item.giftPacks,
    bonusAmount: item.giftPacks.bonusAmount / 100,
    coupons: item.giftPacks.coupons.map((coupon, couponIndex) => ({
      ...coupon,
      prefix: `${couponIndex === 0 ? '还送' : ''}${['满']
        .filter(prefix => coupon.text.includes(prefix))
        .join('')}`,
      text: coupon.text
        .replace('优惠券', '')
        .replace('兑换券', '')
        .replace('满', ''),
      suffix: ['优惠券', '兑换券'].filter(suffix =>
        coupon.text.includes(suffix)
      ),
    })),
  },
}))
import { MaterialChannel } from '../../../constant'

export const YLBChannelRect = {
  width: 9450,
  height: 21260,
}

export const BannerChannelRect = {
  width: 1600,
  height: 900,
}

export const WindowPromotionRect = {
  width: 1440,
  height: 2160,
}

export const CashierCardChannelRect = {
  width: 2480,
  height: 3510,
}

export const CashierCardRect = {
  width: 2480,
  height: 3510,
}

export const FriendCircleRect = {
  width: 2480,
  height: 3510,
}

export const MaterialChannelList = [
  {
    id: MaterialChannel.ylb,
    // 生成海报的比例
    posterRatio: 0.1,
    // 展示的比例
    displayRatio: 0.007 / 0.1,
    ...YLBChannelRect,
  },
  {
    id: MaterialChannel.banner,
    posterRatio: 0.5,
    displayRatio: 0.1 / 0.5,
    ...BannerChannelRect,
  },
  {
    id: MaterialChannel.cashierCard,
    posterRatio: 0.5,
    displayRatio: 0.045 / 0.5,
    ...CashierCardRect,
  },
  {
    id: MaterialChannel.windowPromotion,
    posterRatio: 0.5,
    displayRatio: 0.07 / 0.5,
    ...WindowPromotionRect,
  },
  {
    id: MaterialChannel.friendCircle,
    posterRatio: 0.5,
    displayRatio: 0.045 / 0.5,
    ...FriendCircleRect,
  },
]

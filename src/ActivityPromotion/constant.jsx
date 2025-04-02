// import { Button, Pop } from 'zent'

export const MaterialChannel = {
  /** 易拉宝 poster */
  ylb: 'ylb',
  /** 首页banner banner */
  banner: 'banner',
  /** 收银台卡 tableCard */
  cashierCard: 'cashierCard',
  /** 弹窗广告 popup */
  windowPromotion: 'windowPromotion',
  /** 朋友圈 wechatPic */
  friendCircle: 'friendCircle',
}
// 只有易拉宝、朋友圈、收银台卡 才有数字枚举 因为后端需要
export const MaterialChannelNum = {
  // 易拉宝 poster
  [MaterialChannel.ylb]: 2,
  // 首页banner banner
  [MaterialChannel.friendCircle]: 1,
  // 收银台卡 tableCard
  [MaterialChannel.cashierCard]: 3,
}

export const OnlineMaterials = [
  {
    id: MaterialChannel.windowPromotion,
    title: '弹窗广告',
    description: (
      <span>
        通过弹窗广告的方式,在商城的页面展示,
      </span>
    ),
    imageUrl: '',
    editText: '编辑',
  },
  {
    id: MaterialChannel.banner,
    title: '首页banner',
    description: (
      <span>
        通过banner的方式,在商城的首页展示,
      </span>
    ),
    imageUrl: '',
    editText: '编辑',
  },
  {
    id: MaterialChannel.friendCircle,
    title: '朋友圈图片',
    description: (
      <span>
        用于在朋友圈推广活动时的配图,
      </span>
    ),
    imageUrl: '',
    editText: '编辑',
  },
]

export const OfflineMaterials = [
  {
    id: MaterialChannel.ylb,
    title: '海报（易拉宝）',
    description: (
      <span>
        用于做成易拉宝等实体物料,放置在店铺门口展示活动,
      </span>
    ),
    imageUrl: '',
    editText: '编辑',
  },
  {
    id: MaterialChannel.cashierCard,
    title: '台卡',
    description: (
      <span>
        用于做成台卡的实体物料,放置在收银台展示活动,
      </span>
    ),
    imageUrl: '',
    editText: '编辑',
  },
]

export const AllMaterials = [...OnlineMaterials, ...OfflineMaterials]

export const GenerationStatus = {
  Initial: 'initial',
  Generated: 'generated',
  Generating: 'generating',
  GeneratedFailed: 'generated_failed',
}

export const ChannelTemplate = {
  template1: 'template1',
  template2: 'template2',
  template3: 'template3',
}

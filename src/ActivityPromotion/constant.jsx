// import { Button, Pop } from 'zent'

export const OnlineMaterials = [
  {
    id: 'miniprogram-ad',
    title: '小程序弹窗广告',
    description: (
      <span>
        通过弹窗广告的方式,在商城的页面展示,
        {/* <Pop
          trigger="hover"
          position="right-top"
          content={
            <img src="https://img01.yzcdn.cn/upload_files/2025/03/20/Ft3RkHOZbtoYRQb7_ICuUtAhOV0b.png" />
          }
        >
          <Button type="text">查看示例</Button>
        </Pop> */}
      </span>
    ),
    imageUrl: '',
    editText: '编辑',
  },
  {
    id: 'miniprogram-banner',
    title: '小程序首页banner',
    description: (
      <span>
        通过banner的方式,在商城的首页展示,
        {/* <Pop
          trigger="hover"
          position="right-top"
          content={
            <img src="https://img01.yzcdn.cn/upload_files/2025/03/20/FvE9Yd0ebk6kD6q5kFNMTLCaGGuo.png" />
          }
        >
          <Button type="text">查看示例</Button>
        </Pop> */}
      </span>
    ),
    imageUrl: '',
    editText: '编辑',
  },
  {
    id: 'friend-circle',
    title: '朋友圈图片',
    description: (
      <span>
        用于在朋友圈推广活动时的配图,
        {/* <Pop
          trigger="hover"
          position="right-top"
          content={
            <img src="https://img01.yzcdn.cn/upload_files/2025/03/20/FnC6bAZMCvqs90nCdzbChq6tpnU2.png" />
          }
        >
          <Button type="text">查看示例</Button>
        </Pop> */}
      </span>
    ),
    imageUrl: '',
    editText: '编辑',
  },
]

export const OfflineMaterials = [
  {
    id: 'poster',
    title: '海报（易拉宝）',
    description: (
      <span>
        用于做成易拉宝等实体物料,放置在店铺门口展示活动,
        {/* <Pop
          trigger="hover"
          position="right-top"
          content={
            <img src="https://img01.yzcdn.cn/upload_files/2025/03/20/FkpbcwQHVt49Sq7dXnUP4dlMl4aB.png" />
          }
        >
          <Button type="text">查看示例</Button>
        </Pop> */}
      </span>
    ),
    imageUrl: '',
    editText: '编辑',
  },
  {
    id: 'table-card',
    title: '台卡',
    description: (
      <span>
        用于做成台卡的实体物料,放置在收银台展示活动,
        {/* <Pop
          trigger="hover"
          position="right-top"
          content={
            <img src="https://img01.yzcdn.cn/upload_files/2025/03/20/Fhxi7K-sREFnr66rORXNXjrJ1Clm.png" />
          }
        >
          <Button type="text">查看示例</Button>
        </Pop> */}
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

import { BannerChannelRect } from '../../../channels'
import { MaterialChannel } from '../../../../../constant'

export const TopLayout = {
  // 物料标题：甜蜜开业季储值送现金
  materialTitle: {
    type: 'text',
    marginTop: '190px',
    fontSize: '130px',
    fontWeight: '900',
    lineHeight: '130px',
    content: '甜蜜开业季储值送现金',
  },

  //具体开始时间 "2025.11.11"
  materialTimeDateStart: {
    type: 'text',
    fontSize: '130px',
    lineHeight: '130px',
    marginTop: '58px',
    content: '2025.11.11',
    display: 'inline-block',
  },
  materialTimeDateSuffix: {
    type: 'image',
    content:
      'https://img01.yzcdn.cn/upload_files/2025/03/24/Fp05i5-wAN00Lq0H4NvWybAjtq4_.png',
    width: '124px',
    height: '48px',
  },
  //具体时间 "11.21"
  materialTimeDateEnd: {
    type: 'text',
    fontSize: '130px',
    fontWeight: '900px',
    lineHeight: '130px',
    marginTop: '58px',
    content: '11.21',
    display: 'inline-block',
  },
  materialTimeDateDownload: {
    type: 'image',
    content:
      'https://img01.yzcdn.cn/upload_files/2025/03/24/Fh2nX8kZNNbCWEyTCed70fPPTZRq.png',
    width: '105px',
    height: '105px',
    marginLeft: 15
  },
  // 最外层的 container
  container1: {
    marginLeft: '70px',
    textAlign: 'left',
  },
  materialTimeDate: {
    textAlign: 'left',
  },
}

export default {
  id: MaterialChannel.banner,
  layouts: {
    materialGenerator: {
      width: BannerChannelRect.width,
      height: BannerChannelRect.height,
      position: 'absolute',
    },
    materialBackground: {
      type: 'image',
      width: '100%',
      height: '100%',
      position: 'absolute',
      zIndex: 0,
      previewContent:
        'https://img01.yzcdn.cn/upload_files/2025/03/25/Fi0wAZSfc42yK4mMErF1YR8UWBm3.png',
      content:
        'https://img01.yzcdn.cn/upload_files/2025/03/25/Fi0wAZSfc42yK4mMErF1YR8UWBm3.png',
      left: 0,
      top: 0,
    },
    ...TopLayout,
  },
}

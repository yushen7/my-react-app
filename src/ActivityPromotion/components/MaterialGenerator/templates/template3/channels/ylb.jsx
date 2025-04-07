import { BaseRect } from '../../../channels/base'
import { MaterialChannel } from '../../../../../constant'

const CouponLayout = {
  productSubtitle: {
    marginTop: '1.5%',
    gap: '100px',
  },
  materialProductCoupon: {
    gap: '100px',
  },
  materialProductSlash: {
    type: 'text',
    content: '/',
    color: '#FBEF02',
    fontSize: '200px',
    lineHeight: '200px',
    marginLeft: '100px',
  },
}

const ProductLayout = {
  productsContainer: {
    marginTop: 2334,
    marginLeft: 800,
  },
  productContainer: {
    marginTop: 580,
    position: 'relative',
  },
  productTitle: {},
}

export const TopLayout = {
  // 物料标题：甜蜜开业季储值送现金
  materialTitle: {
    type: 'text',
    marginTop: '1125px',
    fontSize: '900px',
    fontWeight: '900',
    lineHeight: '900px',
    content: '甜蜜开业季储值送现金',
    textAlign: 'center'
  },

  //具体开始时间 "2025.11.11"
  materialTimeDateStart: {
    type: 'text',
    fontSize: '900px',
    lineHeight: '700px',
    marginTop: '386px',
    content: '2025.11.11',
    display: 'inline-block',
  },
  materialTimeDateSuffix: {
    type: 'image',
    content:
      'https://img01.yzcdn.cn/upload_files/2025/03/24/Fp05i5-wAN00Lq0H4NvWybAjtq4_.png',
    marginLeft: 100,
    marginRight: 100
  },
  //具体时间 "11.21"
  materialTimeDateEnd: {
    type: 'text',
    fontSize: '900px',
    lineHeight: '700px',
    marginTop: '386px',
    content: '11.21',
    display: 'inline-block',
  },
  materialTimeDateDownload: {
    type: 'image',
    content:
      'https://img01.yzcdn.cn/upload_files/2025/03/24/Fh2nX8kZNNbCWEyTCed70fPPTZRq.png',
    width: '800px',
    height: '800px',
    marginLeft: 100
  },
  // 最外层的 container
  container1: {
    marginTop: 1125,
    marginLeft: 224,
    textAlign: 'left'
  },
}

export const BottomLayout = {
  materialScanText1: {
    type: 'text',
    content: '扫码参与',
    color: '#fff',
    fontSize: '400px',
    lineHeight: '400px',
    marginTop: '2.2%',
  },
  materialScanText2: {
    type: 'text',
    content: '使用小程序即可充值',
    color: '#fff',
    fontSize: '400px',
    lineHeight: '400px',
    marginTop: '1.5%',
  },
  materialScanText3: {
    type: 'text',
    content: '本次活动最终解释权归活动方所有',
    color: '#fff',
    fontSize: '200px',
    lineHeight: '200px',
    marginTop: '1.5%',
  },
  materialQrcode: {
    type: 'image',
    content:
      'https://img01.yzcdn.cn/upload_files/2025/03/23/Fo4F1M1ez5njdBxUxEzQg8EBR5Oy.png',
    width: '3000px',
    height: '3000px',
    marginTop: '7%',
    marginLeft: '3%',
  },
  bottomContainer: {
    position: 'absolute',
    bottom: '0%',
    height: '20%',
    width: '100%',
    display: 'flex',
    textAlign: 'start',
  },
  scanTextContainer: {
    marginLeft: '400px',
    marginTop: '2200px',
    position: 'relative',
  },
}

export default {
  id: MaterialChannel.ylb,
  layouts: {
    sizeInfo: {
      largeFontSize: '1500px',
      normalFontSize: '680px',
      smallFontSize: '386px',
      miniFontSize: '257px',
    },
    materialGenerator: {
      width: BaseRect.width,
      height: BaseRect.height,
      position: 'absolute',
    },
    materialBackground: {
      type: 'image',
      width: '100%',
      height: '100%',
      position: 'absolute',
      zIndex: 0,
      previewContent:
        'https://img01.yzcdn.cn/upload_files/2025/03/27/FnBZs9YHNqQOV197L1gtJ15uUz6O.png',
      content:
        'https://img01.yzcdn.cn/upload_files/2025/03/24/Fs_rrTi_K-wV7TgRxzmRKmdp0aSn.png',
      left: 0,
      top: 0,
    },
    ...ProductLayout,
    ...TopLayout,
    ...BottomLayout,
    ...CouponLayout,
  },
}

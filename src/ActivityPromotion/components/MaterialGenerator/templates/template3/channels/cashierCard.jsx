import { CashierCardRect } from '../../../channels'
import { MaterialChannel } from '../../../../../constant'

const TitleFontSize = '220px'

const CouponLayout = {
  productSubtitle: {
    marginLeft: '10px',
    marginTop: '1.5%',
    gap: '10px',
  },
  materialProductCoupon: {
    gap: '10px',
  },
  materialProductSlash: {
    type: 'text',
    content: '/',
    color: '#FBEF02',
    fontSize: 48,
    lineHeight: '48px',
  },
}

const ProductLayout = {
  productsContainer: {
    marginTop: 200,
    marginLeft: 288,
  },
  productContainer: {
    marginTop: 84,
    position: 'relative',
  },
  productTitle: {
    // marginTop: '68px',
  },
}

export const TopLayout = {
  // 物料标题：甜蜜开业季储值送现金
  materialTitle: {
    type: 'text',
    marginTop: '124px',
    fontSize: TitleFontSize,
    fontWeight: '900',
    lineHeight: TitleFontSize,
    content: '甜蜜开业季储值送现金',
    textAlign: 'center',
  },

  //具体开始时间 "2025.11.11"
  materialTimeDateStart: {
    type: 'text',
    fontSize: TitleFontSize,
    lineHeight: TitleFontSize,
    marginTop: '69px',
    content: '2025.11.11',
    display: 'inline-block',
  },
  materialTimeDateSuffix: {
    type: 'image',
    content:
      'https://img01.yzcdn.cn/upload_files/2025/03/24/Fp05i5-wAN00Lq0H4NvWybAjtq4_.png',
    width: 214,
    height: 82,
    marginLeft: 26,
    marginRight: 26,
  },
  //具体时间 "11.21"
  materialTimeDateEnd: {
    type: 'text',
    fontSize: TitleFontSize,
    lineHeight: TitleFontSize,
    marginTop: '69px',
    content: '11.21',
    display: 'inline-block',
  },
  materialTimeDateDownload: {
    type: 'image',
    content:
      'https://img01.yzcdn.cn/upload_files/2025/03/24/Fh2nX8kZNNbCWEyTCed70fPPTZRq.png',
    width: 180,
    height: 180,
    marginLeft: 26,
  },
  // 最外层的 container
  container1: {
    textAlign: 'center',
    width: '95.76%',
  },
}

export const BottomLayout = {
  materialScanText1: {
    type: 'text',
    content: '扫码参与',
    color: '#fff',
    fontSize: 80,
    lineHeight: '80px',
    marginTop: '2.2%',
  },
  materialScanText2: {
    type: 'text',
    content: '使用小程序即可充值',
    color: '#fff',
    fontSize: 96,
    lineHeight: '96px',
    marginTop: '1.5%',
  },
  materialScanText3: {
    type: 'text',
    content: '本次活动最终解释权归活动方所有',
    color: '#fff',
    fontSize: 48,
    lineHeight: '48px',
    marginTop: '1.5%',
  },
  materialQrcode: {
    type: 'image',
    content:
      'https://img01.yzcdn.cn/upload_files/2025/03/23/Fo4F1M1ez5njdBxUxEzQg8EBR5Oy.png',
    width: 700,
    height: 700,
    marginLeft: 156,
  },
  bottomContainer: {
    position: 'absolute',
    bottom: '0%',
    height: '21%',
    width: '100%',
    display: 'flex',
    textAlign: 'start',
  },
  scanTextContainer: {
    marginLeft: 80,
    marginTop: 380,
    position: 'relative',
  },
}

export default {
  id: MaterialChannel.cashierCard,
  layouts: {
    sizeInfo: {
      largeFontSize: '310px',
      normalFontSize: '124px',
      smallFontSize: '68px',
      miniFontSize: '48px',
    },
    materialGenerator: {
      width: CashierCardRect.width,
      height: CashierCardRect.height,
      position: 'absolute',
    },
    materialBackground: {
      type: 'image',
      width: '100%',
      height: '100%',
      position: 'absolute',
      zIndex: 0,
      previewContent:
        'https://img01.yzcdn.cn/upload_files/2025/03/26/Fhg7M_GgGPH01i-Li-79LFaOJUAG.png',
      content:
        'https://img01.yzcdn.cn/upload_files/2025/03/26/Fhg7M_GgGPH01i-Li-79LFaOJUAG.png',
      left: 0,
      top: 0,
    },
    ...ProductLayout,
    ...TopLayout,
    ...CouponLayout,
    ...BottomLayout,
  },
}

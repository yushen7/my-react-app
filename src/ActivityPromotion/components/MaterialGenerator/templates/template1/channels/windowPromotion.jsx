import { MaterialChannel } from '../../../../../constant'
import { WindowPromotionRect } from '../../../channels'

const LargeFontSize = '200px'
const NormalFontSize = '70px'
const SmallFontSize = '60px'
const MiniFontSize = '40px'
const TitleFontSize = '135px'

const CouponLayout = {
  productSubtitle: {
    marginTop: '24px',
  },
  materialProductCoupon: {
    gap: '12px',
  },
  materialProductSlash: {
    type: 'text',
    content: '/',
    color: '#FFA59F',
    fontSize: '30px',
    lineHeight: '30px',
    marginLeft: '12px',
  },
}

export const TopLayout = {
  // 最外层的 container
  topContainer1: {
    margin: '48px 48px 0 48px',
  },
  logoContainer: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  // qrCodeContainer: {
  //   display: 'flex',
  //   alignItems: 'center',
  //   position: 'relative',
  //   width: '95.76%',
  //   height: '4370px',
  //   marginTop: '365px',
  // },
  // 顶部装饰条
  // topMaterialDecorationBar: {
  //   type: 'image',
  //   width: '100%',
  //   content:
  //     'https://img01.yzcdn.cn/upload_files/2025/03/19/FpyjH9o6oOSbZDT_IgrQhO7Q6rEs.png',
  // },

  // 左边logo图案
  materialLogoLeft: {
    type: 'image',
    width: '14.5%',
    content:
      'https://img01.yzcdn.cn/upload_files/2025/03/23/FvivJF0Dvju06FBbhe2PRe_n3E99.png',
  },
  // 物料标题：甜蜜开业季储值送现金
  materialTitle: {
    type: 'text',
    marginTop: '48px',
    fontSize: TitleFontSize,
    fontWeight: '900',
    lineHeight: '120px',
    textAlign: 'left',
    content: '甜蜜开业季储值送现金',
  },

  // logo分割线
  materialLongDivide: {
    type: 'image',
    width: '50.71%',
    height: '5px',
    content:
      'https://img01.yzcdn.cn/upload_files/2025/03/17/Fsfu6CTksfJl5rgqd9r_k7h4--7w.png',
    marginLeft: '28px',
    marginRight: '28px',
  },

  // 右侧 logo 文字 {2025} Stored value activity
  materialLogoText: {
    type: 'text',
    fontSize: '30px',
    fontWeight: '400',
    lineHeight: '30px',
  },

  materialWhiteDecorationBar: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
  },
  // 活动时间
  materialTimeLabel: {
    type: 'text',
    fontSize: '40px',
    lineHeight: '40px',
    marginTop: '48px',
    content: 'ACTIVITY TIME >>>',
  },
  //具体时间 "2025.11.11 - 11.21"
  materialTimeDate: {
    type: 'text',
    fontSize: '80px',
    fontWeight: '500',
    lineHeight: '80px',
    marginTop: '48px',
    content: '2025.11.11 - 11.21',
  },
  materialQrCode: {
    type: 'image',
    width: '3000px',
    position: 'absolute',
    left: 'calc(50% - 1500px)',
    top: 'calc(50% - 1300px)',
    content:
      'https://img01.yzcdn.cn/upload_files/2025/03/23/Fo4F1M1ez5njdBxUxEzQg8EBR5Oy.png',
  },
  materialQrCodeDecoration: {
    type: 'image',
    width: '100%',
    position: 'absolute',
    top: '0',
    left: '0',
    content:
      'https://img01.yzcdn.cn/upload_files/2025/03/23/FrT3I_IJkfiiioxXNFZSOb0xMRuE.png',
  },
}

export const BottomLayout = {
  container1: {
    position: 'relative',
    // marginLeft: '2.2%',
    // marginRight: '2.2%',
    textAlign: 'left',
  },
  container2: {
    position: 'relative',
    // marginLeft: '2.2%',
    paddingTop: '0.5%',
  },
  bottomContainer: {
    position: 'absolute',
    bottom: '48px',
    width: '1344px',
    left: '48px',
  },
  materialScanText1: {
    type: 'text',
    content: '扫码参与',
    color: '#000',
    fontSize: '60px',
    lineHeight: '60px',
    marginTop: '2.2%',
    fontWeight: 500,
  },
  materialScanText2: {
    type: 'text',
    content: '使用小程序即可充值',
    color: '#000',
    fontSize: '60px',
    lineHeight: '60px',
    marginTop: '1.5%',
    fontWeight: 500,
  },
  materialScanText4: {
    type: 'text',
    content: '本次活动最终解释权归活动方所有',
    color: '#000',
    fontSize: '30px',
    lineHeight: '30px',
    marginTop: '1.5%',
  },
  materialDecorationBar: {
    type: 'image',
    width: '100%',
    bottom: '0',
    left: '0',
    position: 'absolute',
    content:
      'https://img01.yzcdn.cn/upload_files/2025/03/19/FpyjH9o6oOSbZDT_IgrQhO7Q6rEs.png',
  },
}

const ProductLayout = {
  materialPriceSuffix: {
    type: 'image',
    content: `https://img01.yzcdn.cn/upload_files/2025/03/23/FsBpkEYN_FbzNxddhSuPo68JdJOW.png`,
    width: '50px',
    height: '50px',
    marginLeft: '1%',
  },
  // 分割线
  materialProductDivide: {
    type: 'image',
    width: '81%',
    content:
      'https://img01.yzcdn.cn/upload_files/2025/03/23/FnZfiRP5kn1KYF8ncAa9Y_cBzymN.png',
    marginTop: '36px',
  },
  materialProductBackground: {
    type: 'image',
    width: '102.5%',
    position: 'absolute',
    top: '-16px',
    left: '-16px',
    content:
      'https://img01.yzcdn.cn/upload_files/2025/03/31/Fmvzvd55xOW71OFuUNfvcpyDk-G4.png',
    height: '107%'
  },
  materialArrow: {
    type: 'image',
    content:
      'https://img01.yzcdn.cn/upload_files/2025/03/23/FriM7WLZQ7fXpzYcegjn6EQy62MA.png',
    position: 'absolute',
    bottom: '364px',
    right: '80px',
    zIndex: 2,
    width: '101px',
  },

  productsContainer: {
    marginTop: '46px',
  },

  productContainer1: {
    position: 'relative',
    height: '1264px',
    paddingTop: '36px',
    marginTop: 24,
  },
  productTitle: {
    marginTop: '36px',
    alignItems: 'end',
  },
  product: {
    marginTop: '0',
    marginLeft: '80px',
    position: 'relative',
  },
}

export default {
  id: MaterialChannel.windowPromotion,
  layouts: {
    sizeInfo: {
      largeFontSize: LargeFontSize,
      largeLineHeight: '150px',
      normalFontSize: NormalFontSize,
      smallFontSize: SmallFontSize,
      miniFontSize: MiniFontSize,
    },
    materialGenerator: {
      width: WindowPromotionRect.width,
      height: WindowPromotionRect.height,
      position: 'absolute',
    },
    materialBackground: {
      type: 'image',
      width: '100%',
      height: '100%',
      position: 'absolute',
      zIndex: 0,
      previewContent:
        'https://img01.yzcdn.cn/upload_files/2025/03/31/Ft-BxNDyW3u9e3GU0HA0MEspHg3P.png',
      content:
        'https://img01.yzcdn.cn/upload_files/2025/03/31/Ft-BxNDyW3u9e3GU0HA0MEspHg3P.png',
      left: 0,
      top: 0,
    },
    materialDecorationBar: {
      type: 'image',
      width: '69.51%',
    },
    ...TopLayout,
    ...CouponLayout,
    ...BottomLayout,
    ...ProductLayout,
  },
}

import { MaterialChannel } from '../../../../../constant'
import { CashierCardChannelRect, YLBChannelRect } from '../../../channels'

const LargeFontSize = '300px'
const NormalFontSize = '100px'
const SmallFontSize = '86px'
const MiniFontSize = '56px'
const TitleFontSize = '236px'

const CouponLayout = {
  productSubtitle: {
    marginTop: '1.5%',
  },
  materialProductCoupon: {
    gap: '30px',
  },
  materialProductSlash: {
    type: 'text',
    content: '/',
    color: '#FFA59F',
    fontSize: '52px',
    lineHeight: '52px',
    marginLeft: '30px',
  },
}

export const TopLayout = {
  // 最外层的 container
  topContainer1: {
    margin: '56px 56px 0 56px',
    width: '95.76%',
  },
  logoContainer: {
    height: 50,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  materialTitle: {
    type: 'text',
    marginTop: '56px',
    fontSize: TitleFontSize,
    fontWeight: '900',
    lineHeight: TitleFontSize,
    textAlign: 'left',
    content: '甜蜜开业季储值送现金',
  },

  // logo分割线
  materialLongDivide: {
    type: 'image',
    width: '67%',
    height: '5px',
    content:
      'https://img01.yzcdn.cn/upload_files/2025/03/17/Fsfu6CTksfJl5rgqd9r_k7h4--7w.png',
    
  },

  // 右侧 logo 文字 {2025} Stored value activity
  materialLogoText: {
    type: 'text',
    fontSize: '50px',
    fontWeight: '400',
    lineHeight: '50px',
    position: 'absolute',
    right: 0,
    position: 'absolute',
    right: 0
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
    fontSize: '68px',
    lineHeight: '68px',
    marginTop: '56px',
    content: 'ACTIVITY TIME >>>',
  },
  //具体时间 "2025.11.11 - 11.21"
  materialTimeDate: {
    type: 'text',
    fontSize: '138px',
    fontWeight: '500',
    lineHeight: '138px',
    marginTop: '56px',
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
    marginLeft: '2.2%',
    paddingTop: '0.5%',
  },
  bottomContainer: {
    position: 'absolute',
    bottom: '56px',
    width: '2368px',
    left: '56px',
  },
  materialScanText1: {
    type: 'text',
    content: '扫码参与',
    color: '#000',
    fontSize: '103px',
    lineHeight: '103px',
    marginTop: '2.2%',
    fontWeight: 500,
  },
  materialScanText2: {
    type: 'text',
    content: '使用小程序即可充值',
    color: '#000',
    fontSize: '103px',
    lineHeight: '103px',
    marginTop: '1.5%',
    fontWeight: 500,
  },
  materialScanText4: {
    type: 'text',
    content: '本次活动最终解释权归活动方所有',
    color: '#000',
    fontSize: '51px',
    lineHeight: '51px',
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
  bottomQrCodeDecoration: {
    type: 'image',
    width: '100%',
    position: 'absolute',
    content: 'https://img01.yzcdn.cn/upload_files/2025/04/03/FiM35vIB8XrqQfB1-xG93h47YH1X.png',
    bottom: 64,
    right: 56,
    width: 492,
    height: 492,
  },
  // 底部二维码
  bottomQrCode: {
    bottom: 64,
    right: 56,
    position: 'absolute',
    width: 492,
    height: 492,
  },
}


const ProductLayout = {
  materialPriceSuffix: {
    type: 'image',
    content: `https://img01.yzcdn.cn/upload_files/2025/03/23/FsBpkEYN_FbzNxddhSuPo68JdJOW.png`,
    width: '86px',
    height: '86px',
    marginLeft: '1%',
  },
  // 分割线
  materialProductDivide: {
    type: 'image',
    width: '60%',
    content:
      'https://img01.yzcdn.cn/upload_files/2025/03/23/FnZfiRP5kn1KYF8ncAa9Y_cBzymN.png',
    marginTop: '2.5%',
  },
  materialProductBackground: {
    type: 'image',
    position: 'absolute',
    left: 56,
    top: 764,
    width: 2368,
    height: 2137,
    content:
      'https://img01.yzcdn.cn/upload_files/2025/04/03/FiM35vIB8XrqQfB1-xG93h47YH1X.png',
  },
  // materialArrow: {
  //   type: 'image',
  //   content:
  //     'https://img01.yzcdn.cn/upload_files/2025/03/23/FriM7WLZQ7fXpzYcegjn6EQy62MA.png',
  //   position: 'absolute',
  //   bottom: '565px',
  //   right: '112px',
  //   zIndex: 2,
  //   width: '174px',
  // },

  productsContainer: {
    marginTop: '46px',
  },

  productContainer1: {
    position: 'absolute',
    top: 900,
    left: 56,
    paddingTop: 40
  },
  productTitle: {
    marginTop: '56px',
    alignItems: 'end',
  },
  product: {
    marginTop: '0',
    marginLeft: '112px',
    position: 'relative',
  },
}

export default {
  id: MaterialChannel.cashierCard,
  layouts: {
    sizeInfo: {
      largeFontSize: LargeFontSize,
      largeLineHeight: '250px',
      normalFontSize: NormalFontSize,
      smallFontSize: SmallFontSize,
      miniFontSize: MiniFontSize,
    },
    materialGenerator: {
      width: CashierCardChannelRect.width,
      height: CashierCardChannelRect.height,
      position: 'absolute',
    },
    materialBackground: {
      type: 'image',
      width: '100%',
      height: '100%',
      position: 'absolute',
      zIndex: 0,
      previewContent:
        'https://img01.yzcdn.cn/upload_files/2025/03/23/FpbYBm053nMcEIroxd74MGHUpIJO.png',
      content:
        'https://img01.yzcdn.cn/upload_files/2025/03/31/Ft5EQTMOEY2eM1aBZvWix02jFRJY.png',
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

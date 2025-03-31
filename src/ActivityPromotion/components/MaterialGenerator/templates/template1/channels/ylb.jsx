import { MaterialChannel } from '../../../../../constant'
import { YLBChannelRect } from '../../../channels'

const LargeFontSize = '1150px'
const NormalFontSize = '380px'
const SmallFontSize = '327px'
const MiniFontSize = '214px'

const CouponLayout = {
  productSubtitle: {
    marginTop: '1.5%',
  },
  materialProductCoupon: {
    gap: '100px',
  },
  materialProductSlash: {
    type: 'text',
    content: '/',
    color: '#FFA59F',
    fontSize: '200px',
    lineHeight: '200px',
    marginLeft: '100px',
  },
}

export const TopLayout = {
  // 最外层的 container
  topContainer1: {
    margin: '200px 200px 0 200px',
    width: '95.76%',
  },
  logoContainer: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  qrCodeContainer: {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    width: '95.76%',
    height: '4370px',
    marginTop: '365px',
  },
  // 顶部装饰条
  topMaterialDecorationBar: {
    type: 'image',
    width: '100%',
    content:
      'https://img01.yzcdn.cn/upload_files/2025/03/19/FpyjH9o6oOSbZDT_IgrQhO7Q6rEs.png',
  },

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
    marginTop: '400px',
    fontSize: '900px',
    fontWeight: '900px',
    lineHeight: '900px',
    textAlign: 'left',
    content: '甜蜜开业季储值送现金',
  },

  // logo分割线
  materialLongDivide: {
    type: 'image',
    width: '50.71%',
    height: '20px',
    content:
      'https://img01.yzcdn.cn/upload_files/2025/03/17/Fsfu6CTksfJl5rgqd9r_k7h4--7w.png',
    marginLeft: '160px',
    marginRight: '160px',
  },

  // 右侧 logo 文字 {2025} Stored value activity
  materialLogoText: {
    type: 'text',
    fontSize: '190px',
    fontWeight: '400',
    lineHeight: '190px',
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
    fontSize: '300px',
    lineHeight: '300px',
    marginTop: '400px',
    content: 'ACTIVITY TIME >>>',
  },
  //具体时间 "2025.11.11 - 11.21"
  materialTimeDate: {
    type: 'text',
    fontSize: '700px',
    fontWeight: '900px',
    lineHeight: '700px',
    marginTop: '300px',
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
    bottom: '1171px',
    width: '9049px',
    left: '200px',
  },
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
    content: '活动地址:阿拉呱呱吾悦广场后占悦金街S91051-1053号',
    color: '#fff',
    fontSize: '300px',
    lineHeight: '300px',
    marginTop: '1.5%',
  },
  materialScanText4: {
    type: 'text',
    content: '本次活动最终解释权归活动方所有',
    color: '#fff',
    fontSize: '200px',
    lineHeight: '200px',
    marginTop: '1.5%',
  },
  materialScanTextBackground: {
    type: 'image',
    content:
      'https://img01.yzcdn.cn/upload_files/2025/03/23/Flag0DVAWcwGJbRkvKLQHrI3oYVW.png',
    position: 'absolute',
    width: '100%',
    left: 0,
    top: 0,
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
    width: '330px',
    height: '330px',
    marginLeft: '1%',
  },
  // 分割线
  materialProductDivide: {
    type: 'image',
    width: '87%',
    content:
      'https://img01.yzcdn.cn/upload_files/2025/03/23/FnZfiRP5kn1KYF8ncAa9Y_cBzymN.png',
    marginTop: '2.5%',
  },
  materialProductBackground: {
    type: 'image',
    width: '100%',
    position: 'absolute',
    top: '-2%',
    content:
      'https://img01.yzcdn.cn/upload_files/2025/03/23/Fl6khYfuKhoT4IKQEbLaS6Cvqpes.png',
  },
  materialArrow: {
    type: 'image',
    content:
      'https://img01.yzcdn.cn/upload_files/2025/03/23/FriM7WLZQ7fXpzYcegjn6EQy62MA.png',
    position: 'absolute',
    bottom: '4240px',
    right: '413px',
    zIndex: 2,
    width: '665px',
    height: '924px'
  },

  productContainer1: {
    position: 'relative',
    height: '8672px',
  },
  productTitle: {
    marginLeft: '0',
    marginTop: '373px',
    alignItems: 'end',
  },
  product: {
    marginTop: '0',
    marginLeft: '6.37%',
    position: 'relative',
  },
}

export default {
  id: MaterialChannel.ylb,
  layouts: {
    sizeInfo: {
      largeFontSize: LargeFontSize,
      largeLineHeight: '900px',
      normalFontSize: NormalFontSize,
      smallFontSize: SmallFontSize,
      miniFontSize: MiniFontSize,
    },
    materialGenerator: {
      width: YLBChannelRect.width,
      height: YLBChannelRect.height,
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
        'https://img01.yzcdn.cn/upload_files/2025/03/23/FpbYBm053nMcEIroxd74MGHUpIJO.png',
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

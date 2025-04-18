import { MaterialChannel } from '../../../../../constant'
import { BaseRect } from '../../../channels/base'

const CouponLayout = {
  productSubtitle: {
    marginLeft: 636,
    marginTop: '1.5%',
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
  },
}

export const TopLayout = {
  materialTitleContainer: {
    marginTop: 1110,
    marginLeft: 300,
    marginRight: 300,
  },
  // 物料标题
  materialTitle: {
    type: 'text',
    fontSize: '900px',
    fontWeight: 900,
    lineHeight: '900px',
  },
  materialSubtitle: {
    marginTop: '400px',
  },
  materialSubtitlePrefix: {
    type: 'text',
    fontSize: '400px',
    textAlign: 'center',
    fontWeight: 900,
    position: 'absolute',
    left: 0,
    lineHeight: '420px',
  },
  // 物料副标题 跟上这波车，拿下这福利!
  materialSubtitleContent: {
    type: 'text',
    fontSize: '400px',
    textAlign: 'center',
    fontWeight: 900,
    lineHeight: '420px',
  },

  materialSubtitleSuffix: {
    type: 'text',
    fontSize: '400px',
    textAlign: 'center',
    fontWeight: 900,
    position: 'absolute',
    right: 0,
    top: 0,
    lineHeight: '420px',
  },

  materialWhiteDecorationBar: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    content:
      'https://img01.yzcdn.cn/upload_files/2025/03/17/FhOYStbZOvldoAkCRIeeGUnF26Wt.png',
  },
  materialTime: {
    marginTop: 400,
  },
  // 活动时间
  materialTimeLabel: {
    type: 'text',
    fontSize: '300px',
    fontWeight: '900px',
    lineHeight: '300px',
    // marginLeft: '300px',
    fontWeight: 900,
  },
  // 年份
  materialTimeYear: {
    type: 'text',
    fontWeight: '900px',
    lineHeight: '300px',
    fontSize: '300px',
    fontWeight: 900,
  },
  //具体时间 "TIME > MM/DD-MM/DD"
  materialTimeDate: {
    type: 'text',
    fontSize: '700px',
    fontWeight: 900,
    lineHeight: '700px',
    textAlign: 'start',
    marginTop: '100px',
  },
  // 活动时间装饰条
  materialTimeDecorator: {
    type: 'image',
    width: '1500px',
    height: '127px',
    position: 'absolute',
    // bottom: '5%',
    // left: '0',
    top: 3413,
    left: 300,
    content:
      'https://img01.yzcdn.cn/upload_files/2025/03/17/FpCBKbxEfv04vXfGu_VbDiWgl4DS.png',
  },
  // 年份装饰条
  materialYearDecorator: {
    type: 'image',
    width: '738px',
    height: '127px',
    position: 'absolute',
    // bottom: '5%',
    // left: '0',
    top: 3413,
    left: 3114,
    content:
      'https://img01.yzcdn.cn/upload_files/2025/03/17/FnPh2CfoKHQjQ_qWPMP9okb1jmPR.png',
  },
  // 活动时间分割-短
  materialShortDivide: {
    type: 'image',
    width: '1158px',
    height: '20px',
    marginLeft: 56,
    marginRight: 100,
    content:
      'https://img01.yzcdn.cn/upload_files/2025/03/17/Fo7UE5unpOU03PiWj79At5_mtA90.png',
  },
  // 活动时间日期
  materialLongDivide: {
    type: 'image',
    width: '5262px',
    height: '20px',
    content:
      'https://img01.yzcdn.cn/upload_files/2025/03/17/Fsfu6CTksfJl5rgqd9r_k7h4--7w.png',
  },
}

export const BottomLayout = {
  materialBottomContainer: {
    zIndex: 2,
    position: 'absolute',
    width: '100%',
    bottom: '800px',
    height: '2284px',
    width: '8864px',
    marginLeft: '291px',
    textAlign: 'left',
  },
  // 扫码参与
  materialScan: {
    type: 'text',
    marginTop: '600px',
    fontSize: '400px',
    lineHeight: '400px',
    textAlign: 'center',
  },
  qrCodeContainer: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    zIndex: 2,
  },
  // 二维码
  materialQrCode: {
    type: 'image',
    width: '3000px',
    height: '3000px',
    position: 'absolute',
    top: '0',
    left: '0',
  },
  materialScanTextContainer: {
    marginLeft: '200px',
    marginTop: '400px',
  },
  // 扫码参与
  materialScanText: {
    type: 'text',
    fontWeight: '500',
    fontSize: '400px',
    lineHeight: '400px',
    color: '#fff',
  },
  // 使用小程序即可充值
  materialQrCodeText: {
    type: 'text',
    fontWeight: '500',
    fontSize: '400px',
    lineHeight: '400px',
    color: '#fff',
    marginTop: '100px',
  },
  // *本次活动最终解释权归活动方所有
  materialTips: {
    type: 'text',
    fontWeight: '400',
    fontSize: '200px',
    lineHeight: '200px',
    color: '#fff',
    marginTop: '100px',
  },
  // 底部装饰
  scanDecoration: {
    type: 'image',
    width: '47.3%',
    content:
      'https://img01.yzcdn.cn/upload_files/2025/03/19/FsemU_caSE_YDxn9xCC6cLhHlt5u.png',
  },
  // 底部装饰条
  materialBottomDecorationBar: {
    type: 'image',
    width: '100%',
    content:
      'https://img01.yzcdn.cn/upload_files/2025/03/19/FpyjH9o6oOSbZDT_IgrQhO7Q6rEs.png',
    position: 'absolute',
    bottom: '0',
    left: 0,
  },
  materialQrDecoration: {
    type: 'image',
    content:
      'https://img01.yzcdn.cn/upload_files/2025/03/19/FvwjDuPmalUvBAWGa-VpWk-Flysj.png',
  },
  materialBlackBackground: {
    type: 'image',
    position: 'absolute',
    bottom: '0',
    left: '0',
    width: '100%',
    content:
      'https://img01.yzcdn.cn/upload_files/2025/03/19/FodwYMzYFLgPeQDFPmnxtrfjxQSw.png',
  },
}

export const ProductLayout = {
  productsContainer: {
    position: 'relative',
    marginLeft: 300,
  },
  productTitle: {
    marginLeft: 500,
    // marginTop: 345,
    firstMarginTop: 800,
  },
  productContainer: {
    firstMarginTop: '-360px',
    marginTop: '200px',
    justifyContent: 'center',
  },

  productBackground: {
    type: 'image',
    // width: '93.86%',
    width: '8870px',
    firstHeight: '3678px',
    height: '2932px',
    left: '0',
    top: '0',
    position: 'absolute',
    content:
      'https://img01.yzcdn.cn/upload_files/2025/03/17/FneEvpcghLF8Ny2kQdiiQTRIb__g.png',
    firstContent:
      'https://img01.yzcdn.cn/upload_files/2025/03/17/Fn-gMp1CzOSbirw2WI4T5aLnR4Td.png',
  },
}

export default {
  id: MaterialChannel.ylb,

  layouts: {
    sizeInfo: {
      largeFontSize: '1500px',
      normalFontSize: '680px',
      smallFontSize: '386px',
      miniFontSize: '256px',
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
      left: 0,
      top: 0,
      content:
        'https://img01.yzcdn.cn/upload_files/2025/03/13/lp-V-wRHoi-ZSiNCMIGvR9uSbuAz.png',
      previewContent:
        'https://img01.yzcdn.cn/upload_files/2025/03/20/FgCFSBhfKi3ctXT4x_yC_XZfI7wO.png',
    },
    materialDecorationBar: {
      type: 'image',
      width: '69.51%',
      position: 'absolute',
      right: 0,
      top: 0,
      content:
        'https://img01.yzcdn.cn/upload_files/2025/03/17/FqMll1F7AE8flktEMVRACUHA0Tjv.png',
    },
    ...BottomLayout,
    ...CouponLayout,
    ...TopLayout,
    ...ProductLayout,
  },
}

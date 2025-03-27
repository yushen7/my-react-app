import { MaterialChannel } from '../../../../../constant'
import { BaseRect } from '../../../channels/base'

const CouponLayout = {
  productSubtitle: {
    marginLeft: 636,
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
  },
}

export const TopLayout = {
  // 物料标题
  materialTitle: {
    type: 'text',
    marginTop: '500px',
    fontSize: '900px',
    fontWeight: '900px',
    lineHeight: '900px',
    textAlign: 'center',
  },
  // 物料副标题 跟上这波车，拿下这福利!
  materialSubtitle: {
    type: 'text',
    marginTop: '400px',
    fontSize: '400px',
    lineHeight: '400px',
    textAlign: 'center',
    fontWeight: 900,
  },

  materialWhiteDecorationBar: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    content:
      'https://img01.yzcdn.cn/upload_files/2025/03/17/FhOYStbZOvldoAkCRIeeGUnF26Wt.png',
  },
  // 活动时间
  materialTimeLabel: {
    type: 'text',
    fontSize: '300px',
    fontWeight: '900px',
    lineHeight: '300px',
    marginLeft: '300px',
  },
  // 年份
  materialTimeYear: {
    type: 'text',
    fontWeight: '900px',
    lineHeight: '300px',
    fontSize: '300px',
  },
  //具体时间 "TIME > MM/DD-MM/DD"
  materialTimeDate: {
    type: 'text',
    fontSize: '700px',
    fontWeight: '900px',
    lineHeight: '700px',
    marginLeft: '300px',
    textAlign: 'start',
    marginTop: '100px',
  },
  // 活动时间装饰条
  materialTimeDecorator: {
    type: 'image',
    width: '1500px',
    position: 'absolute',
    top: '170px',
    left: '300px',
    content:
      'https://img01.yzcdn.cn/upload_files/2025/03/17/FpCBKbxEfv04vXfGu_VbDiWgl4DS.png',
  },
  // 年份装饰条
  materialYearDecorator: {
    type: 'image',
    width: '738px',
    position: 'absolute',
    top: '170px',
    left: '2950px',
    content:
      'https://img01.yzcdn.cn/upload_files/2025/03/17/FnPh2CfoKHQjQ_qWPMP9okb1jmPR.png',
  },
  // 活动时间分割-短
  materialShortDivide: {
    type: 'image',
    width: '1158px',
    height: '20px',
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
  materialDecorationBar: {
    type: 'image',
    width: '69.51%',
    content:
      'https://img01.yzcdn.cn/upload_files/2025/03/17/FqMll1F7AE8flktEMVRACUHA0Tjv.png',
  },
}

export const BottomLayout = {
  // 扫码参与
  materialScan: {
    type: 'text',
    marginTop: '600px',
    fontSize: '400px',
    lineHeight: '400px',
    textAlign: 'center',
  },
  // 使用小程序即可充值
  materialQrCode: {
    type: 'image',
    width: '80px',
    height: '80px',
    position: 'absolute',
    top: '660px',
    left: '650px',
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
  // qrcode
  materialQrCode: {
    type: 'image',
    position: 'absolute',
    top: '0',
    left: '0',
  },
  // 底部装饰
  materialBottomDecoration: {
    type: 'image',
    width: '47.3%',
    marginTop: '716px',
  },
  // 底部装饰条
  materialBottomDecorationBar: {
    type: 'image',
    width: '100%',
    marginTop: '200px',
  },
  materialQrcode: {
    type: 'image',
    width: '80px',
    height: '80px',
    position: 'absolute',
    top: '660px',
    left: '650px',
  },
  materialQrDecoration: {
    type: 'image',
  },
  materialBlackBackground: {
    type: 'image',
    position: 'absolute',
    bottom: '0',
    left: '0',
    width: '100%',
  },
}

export const ProductLayout = {
  productsContainer: {
    position: 'relative',
    marginLeft: 300,
  },
  productTitle: {
    marginLeft: 626,
  },
}

export default {
  id: MaterialChannel.ylb,

  layouts: {
    sizeInfo: {
      largeFontSize: '1706px',
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
    },
    ...BottomLayout,
    ...CouponLayout,
    ...TopLayout,
    ...ProductLayout,
  },
}

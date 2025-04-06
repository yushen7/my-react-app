import { MaterialChannel } from '../../../../../constant'
import { CashierCardRect, WindowPromotionRect } from '../../../channels'

const TitleFontSize = '237px'
const MiniFontSize = '33px'
const SubtitleFontSize = '103px'
const TimeLabelFontSize = '79px'
const TimeDateFontSize = '182px'

const CouponLayout = {
  productSubtitle: {
    marginLeft: 114,
    marginTop: '1.5%',
  },
  materialProductCoupon: {
    gap: '12px',
  },
  materialProductSlash: {
    type: 'text',
    content: '/',
    color: '#FBEF02',
    fontSize: MiniFontSize,
    lineHeight: MiniFontSize,
    marginLeft: 12,
  },
}

export const TopLayout = {
  materialTitleContainer: {
    marginTop: 225,
    marginLeft: 54,
    marginRight: 54,
  },
  // 物料标题
  materialTitle: {
    type: 'text',
    fontSize: TitleFontSize,
    lineHeight: TitleFontSize,
    fontWeight: 900,
  },
  materialSubtitle: {
    marginTop: '12px',
  },
  materialSubtitlePrefix: {
    type: 'text',
    fontSize: SubtitleFontSize,
    textAlign: 'center',
    fontWeight: 900,
    position: 'absolute',
    left: 0,
    lineHeight: '112px',
  },
  // 物料副标题 跟上这波车，拿下这福利!
  materialSubtitleContent: {
    type: 'text',
    fontSize: SubtitleFontSize,
    textAlign: 'center',
    fontWeight: 900,
    lineHeight: '112px',
  },

  materialSubtitleSuffix: {
    type: 'text',
    fontSize: SubtitleFontSize,
    textAlign: 'center',
    fontWeight: 900,
    position: 'absolute',
    right: 0,
    top: 0,
    lineHeight: '112px',
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
    marginTop: 12,
  },
  // 活动时间
  materialTimeLabel: {
    type: 'text',
    fontSize: TimeLabelFontSize,
    lineHeight: TimeLabelFontSize,
    fontWeight: 900,
    marginTop: 26,
  },
  // 年份
  materialTimeYear: {
    type: 'text',
    fontSize: TimeLabelFontSize,
    lineHeight: TimeLabelFontSize,
    fontWeight: 900,
  },
  //具体时间 "TIME > MM/DD-MM/DD"
  materialTimeDate: {
    type: 'text',
    fontSize: TimeDateFontSize,
    fontWeight: 900,
    lineHeight: TimeDateFontSize,
    textAlign: 'start',
    marginTop: 26,
  },
  // 活动时间装饰条
  materialTimeDecorator: {
    type: 'image',
    width: 396,
    position: 'absolute',
    bottom: '5%',
    left: '0',
    content:
      'https://img01.yzcdn.cn/upload_files/2025/03/17/FpCBKbxEfv04vXfGu_VbDiWgl4DS.png',
  },
  // 年份装饰条
  materialYearDecorator: {
    type: 'image',
    width: 195,
    position: 'absolute',
    bottom: '5%',
    left: '0',
    content:
      'https://img01.yzcdn.cn/upload_files/2025/03/17/FnPh2CfoKHQjQ_qWPMP9okb1jmPR.png',
  },
  // 活动时间分割-短
  materialShortDivide: {
    type: 'image',
    width: '12.9%',
    height: '5px',
    content:
      'https://img01.yzcdn.cn/upload_files/2025/03/17/Fo7UE5unpOU03PiWj79At5_mtA90.png',
  },
  // 活动时间日期
  materialLongDivide: {
    type: 'image',
    width: '59.2%',
    height: '5px',
    content:
      'https://img01.yzcdn.cn/upload_files/2025/03/17/Fsfu6CTksfJl5rgqd9r_k7h4--7w.png',
  },
}

export const ProductLayout = {
  productsContainer: {
    position: 'relative',
    marginLeft: 77,
    // marginTop: 45,
  },
  productContainer: {
    marginTop: 20,
    display: 'flex',
    justifyContent: 'center',
  },
  productTitle: {
    marginLeft: 114,
  },
  productBackground: {
    type: 'image',
    width: 1622,
    height: 406,
    left: '0',
    top: '0',
    position: 'absolute',
    content:
      'https://img01.yzcdn.cn/upload_files/2025/04/02/FvBP_xk9sD78f2jlX3joDUHPMior.png',
  },
}

export const BottomLayout = {
  materialBottomContainer: {
    zIndex: 2,
    position: 'absolute',
    width: '100%',
    bottom: '220px',
    height: '603px',
    width: '2372px',
    marginLeft: 54,
    textAlign: 'left',
  },
  // 扫码参与
  materialScan: {
    type: 'text',
    marginTop: '106px',
    fontSize: '104px',
    lineHeight: '104px',
    textAlign: 'center',
  },
  // 扫码参与
  materialScanText: {
    type: 'text',
    fontWeight: '500',
    fontSize: '104px',
    lineHeight: '104px',
    color: '#fff',
    marginTop: 106,
  },
  // 使用小程序即可充值
  materialQrCodeText: {
    type: 'text',
    fontWeight: '500',
    fontSize: '104px',
    lineHeight: '104px',
    color: '#fff',
    marginTop: '26px',
  },
  // *本次活动最终解释权归活动方所有
  materialTips: {
    type: 'text',
    fontWeight: '400',
    fontSize: '52px',
    lineHeight: '52px',
    color: '#fff',
    marginTop: '26px',
  },
  materialScanTextContainer: {
    marginLeft: '53px',
    marginTop: '53px',
  },
  qrCodeContainer: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    zIndex: 2,
  },

  // qrcode
  materialQrCode: {
    type: 'image',
    position: 'absolute',
    top: '0',
    left: '0',
    width: '653px',
    height: '653px',
  },
  // 底部装饰
  scanDecoration: {
    type: 'image',
    width: '47.3%',
    content:
      'https://img01.yzcdn.cn/upload_files/2025/03/19/FsemU_caSE_YDxn9xCC6cLhHlt5u.png',
  },

  materialQrcode: {
    type: 'image',
    width: '80px',
    height: '80px',
    position: 'absolute',
    top: '660px',
    left: '650px',
  },
  // materialQrDecoration: {
  //   type: 'image',
  //   content:
  //     'https://img01.yzcdn.cn/upload_files/2025/03/19/FvwjDuPmalUvBAWGa-VpWk-Flysj.png',

  // },
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

export const renderExtra = ({ channelId }) => {
  return (
    <>
      <img
        data-id={channelId}
        style={{
          position: 'absolute',
          top: '900px',
          right: '55px',
        }}
        src="https://img01.yzcdn.cn/upload_files/2025/03/30/FvzceK5uJ2TE9Ym42AHp4FFJHXTu.png"
      />
      <img
        style={{
          position: 'absolute',
          top: 1344,
          left: 1782,
          width: 653,
          height: 653,
          zIndex: 2,
        }}
        src="https://img01.yzcdn.cn/upload_files/2025/03/30/FvzceK5uJ2TE9Ym42AHp4FFJHXTu.png"
      ></img>

      <img
        data-id={channelId}
        style={{
          position: 'absolute',
          top: 1344 + 670,
          left: 1840,
          width: 520,
          height: 162,
          zIndex: 2,
        }}
        src="https://img01.yzcdn.cn/upload_files/2025/03/30/Fkoo6QdH_IuUPYM1h5AXA06aM_9t.png"
      ></img>
      <img
        data-id={channelId}
        style={{
          position: 'absolute',
          top: 2320,
          left: 1616,
          zIndex: 2,
        }}
        src="https://img01.yzcdn.cn/upload_files/2025/03/30/Fonz_6xncDoMvYqXyeIsNa-ILtRl.png"
        alt=""
      />
    </>
  )
}

export default {
  id: MaterialChannel.cashierCard,

  layouts: {
    sizeInfo: {
      largeFontSize: '235px',
      normalFontSize: '93px',
      smallFontSize: '56px',
      miniFontSize: MiniFontSize,
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
    ...CouponLayout,
    ...TopLayout,
    ...ProductLayout,
    ...BottomLayout,
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
  },
}

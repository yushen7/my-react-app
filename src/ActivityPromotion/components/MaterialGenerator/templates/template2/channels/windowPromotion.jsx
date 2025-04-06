import { MaterialChannel } from '../../../../../constant'
import { WindowPromotionRect } from '../../../channels'

const TitleFontSize = '134px'
const MiniFontSize = '27px'
const SubtitleFontSize = '60px'
const TimeLabelFontSize = '46px'
const TimeDateFontSize = '106px'

const CouponLayout = {
  productSubtitle: {
    marginLeft: 94,
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
    marginTop: 140,
    marginLeft: 46,
    marginRight: 46,
  },
  // 物料标题
  materialTitle: {
    type: 'text',
    fontSize: TitleFontSize,
    lineHeight: TitleFontSize,
    fontWeight: '900',
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
    lineHeight: '64px',
  },
  // 物料副标题 跟上这波车，拿下这福利!
  materialSubtitleContent: {
    type: 'text',
    fontSize: SubtitleFontSize,
    textAlign: 'center',
    fontWeight: 900,
    lineHeight: '64px',
  },

  materialSubtitleSuffix: {
    type: 'text',
    fontSize: SubtitleFontSize,
    textAlign: 'center',
    fontWeight: 900,
    position: 'absolute',
    right: 0,
    top: 0,
    lineHeight: '64px',
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
    marginTop: 12
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
    marginTop: 15,
  },
  // 活动时间装饰条
  materialTimeDecorator: {
    type: 'image',
    width: '230px',
    position: 'absolute',
    bottom: '5%',
    left: '0',
    content:
      'https://img01.yzcdn.cn/upload_files/2025/03/17/FpCBKbxEfv04vXfGu_VbDiWgl4DS.png',
  },
  // 年份装饰条
  materialYearDecorator: {
    type: 'image',
    width: '114px',
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
    height: '3px',
    content:
      'https://img01.yzcdn.cn/upload_files/2025/03/17/Fo7UE5unpOU03PiWj79At5_mtA90.png',
  },
  // 活动时间日期
  materialLongDivide: {
    type: 'image',
    width: '59.2%',
    height: '3px',
    content:
      'https://img01.yzcdn.cn/upload_files/2025/03/17/Fsfu6CTksfJl5rgqd9r_k7h4--7w.png',
  },
}

export const ProductLayout = {
  productsContainer: {
    position: 'relative',
    marginLeft: 60,
    marginTop: 45,
  },
  productContainer: {
    marginTop: '16px',
    display: 'flex',
    justifyContent: 'center',
  },
  productTitle: {
    marginLeft: 94,
  },
  productBackground: {
    type: 'image',
    width: '1337px',
    height: '335px',
    left: '0',
    top: '0',
    position: 'absolute',
    content:
      'https://img01.yzcdn.cn/upload_files/2025/04/02/FvBP_xk9sD78f2jlX3joDUHPMior.png',
  },
}

export default {
  id: MaterialChannel.windowPromotion,

  layouts: {
    sizeInfo: {
      largeFontSize: '195px',
      normalFontSize: '76px',
      smallFontSize: '46px',
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

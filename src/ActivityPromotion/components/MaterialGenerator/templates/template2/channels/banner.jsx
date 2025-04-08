import { MaterialChannel } from '../../../../../constant'
import { BannerChannelRect } from '../../../channels'
import { BaseRect } from '../../../channels/base'

const TitleFontSize = '153px'
const SubtitleFontSize = '66px'
const TimeFontSize = '118px'
const TimeLabelFontSize = '51px'

export const TopLayout = {
  materialTitleContainer: {
    marginTop: '203px',
    marginLeft: '32px',
    marginRight: '32px',
  },
  // 物料标题
  materialTitle: {
    type: 'text',
    fontSize: TitleFontSize,
    fontWeight: 900,
    lineHeight: TitleFontSize,
  },
  materialSubtitle: {
    marginTop: '32px',
  },
  materialSubtitlePrefix: {
    type: 'text',
    fontSize: SubtitleFontSize,
    textAlign: 'center',
    fontWeight: 900,
    position: 'absolute',
    left: 0,
    lineHeight: '72px',
  },
  // 物料副标题 跟上这波车，拿下这福利!
  materialSubtitleContent: {
    type: 'text',
    fontSize: SubtitleFontSize,
    textAlign: 'center',
    fontWeight: 900,
    lineHeight: '72px',
  },

  materialSubtitleSuffix: {
    type: 'text',
    fontSize: SubtitleFontSize,
    textAlign: 'center',
    fontWeight: 900,
    position: 'absolute',
    right: 0,
    top: 0,
    lineHeight: '72px',
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
    marginTop: 32,
  },
  // 活动时间
  materialTimeLabel: {
    type: 'text',
    fontSize: TimeLabelFontSize,
    // lineHeight: TimeFontSize,
    fontWeight: 900,
  },
  // 年份
  materialTimeYear: {
    type: 'text',
    fontWeight: 900,
    // lineHeight: TimeLabelFontSize,
    fontSize: TimeLabelFontSize,
  },
  //具体时间 "TIME > MM/DD-MM/DD"
  materialTimeDate: {
    type: 'text',
    fontSize: TimeFontSize,
    fontWeight: 900,
    lineHeight: TimeFontSize,
    textAlign: 'start',
    marginTop: '18px',
  },
  // 活动时间装饰条
  materialTimeDecorator: {
    type: 'image',
    width: '254px',
    height: '22px',
    position: 'absolute',
    top: 520,
    left: 34,
    content:
      'https://img01.yzcdn.cn/upload_files/2025/03/17/FpCBKbxEfv04vXfGu_VbDiWgl4DS.png',
  },
  // 年份装饰条
  materialYearDecorator: {
    type: 'image',
    width: '125px',
    height: '22px',
    position: 'absolute',
    // left: 0,
    // bottom: '10%',
    top: 520,
    left: 509,
    content:
      'https://img01.yzcdn.cn/upload_files/2025/03/17/FpCBKbxEfv04vXfGu_VbDiWgl4DS.png',
  },
  // 活动时间分割-短
  materialShortDivide: {
    type: 'image',
    width: '194px',
    height: '3.3px',
    marginLeft: 10,
    marginRight: 17,
    content:
      'https://img01.yzcdn.cn/upload_files/2025/03/17/Fo7UE5unpOU03PiWj79At5_mtA90.png',
  },
  // 活动时间日期
  materialLongDivide: {
    type: 'image',
    width: '921px',
    height: '3.3px',
    content:
      'https://img01.yzcdn.cn/upload_files/2025/04/02/FgJOq2IPnM_iwZ84xpvKsW-bIV2x.png',
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
      left: 0,
      top: 0,
      content:
        'https://img01.yzcdn.cn/upload_files/2025/03/13/lp-V-wRHoi-ZSiNCMIGvR9uSbuAz.png',
      previewContent:
        'https://img01.yzcdn.cn/upload_files/2025/03/20/FgCFSBhfKi3ctXT4x_yC_XZfI7wO.png',
    },
    // 装饰条
    materialDecorationBar: {
      type: 'image',
      width: '69.51%',
      position: 'absolute',
      right: 0,
      content:
        'https://img01.yzcdn.cn/upload_files/2025/03/17/FqMll1F7AE8flktEMVRACUHA0Tjv.png',
    },
    ...TopLayout,
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

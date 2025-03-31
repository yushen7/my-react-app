import { MaterialChannel } from '../../../../../constant'
import { BannerChannelRect, WindowPromotionRect } from '../../../channels'

const LargeFontSize = '200px'
const NormalFontSize = '70px'
const SmallFontSize = '60px'
const MiniFontSize = '40px'
const TitleFontSize = '148px'

export const TopLayout = {
  // 最外层的 container
  topContainer1: {
    margin: '56px 56px 0 56px',
  },
  logoContainer: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
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
    marginTop: '58px',
    fontSize: TitleFontSize,
    fontWeight: '900',
    lineHeight: TitleFontSize,
    textAlign: 'left',
    content: '甜蜜开业季储值送现金',
  },

  // logo分割线
  materialLongDivide: {
    type: 'image',
    width: '825px',
    height: '1px',
    content:
      'https://img01.yzcdn.cn/upload_files/2025/03/17/Fsfu6CTksfJl5rgqd9r_k7h4--7w.png',
    marginLeft: '16px',
    marginRight: '16px',
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
    fontSize: '50px',
    lineHeight: '50px',
    marginTop: '36px',
    content: 'ACTIVITY TIME >>>',
  },
  //具体时间 "2025.11.11 - 11.21"
  materialTimeDate: {
    type: 'text',
    fontSize: '80px',
    fontWeight: '500',
    lineHeight: '80px',
    marginTop: '36px',
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

// export const renderExtra = ({
//   coupons:
// }) => {
//   return (
//     <div
//       style={{
//         position: 'absolute',
//       }}
//     >


//     </div>
//   )
// }

export default {
  id: MaterialChannel.banner,
  layouts: {
    sizeInfo: {
      largeFontSize: LargeFontSize,
      largeLineHeight: '150px',
      normalFontSize: NormalFontSize,
      smallFontSize: SmallFontSize,
      miniFontSize: MiniFontSize,
    },
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
      previewContent:
        'https://img01.yzcdn.cn/upload_files/2025/03/31/Fp-S26z_JiEnKWAYvDlYyXBrvxZ1.png',
      content:
        'https://img01.yzcdn.cn/upload_files/2025/03/31/Fp-S26z_JiEnKWAYvDlYyXBrvxZ1.png',
      left: 0,
      top: 0,
    },
    ...TopLayout,
  },
}

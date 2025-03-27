import { WindowPromotionRect } from '../../../channels'
import { MaterialChannel } from '../../../../../constant'

const TitleFontSize = '130px'

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
    color: '#FFA59F',
    fontSize: '20px',
    lineHeight: '20px',
  },
}

const ProductLayout = {
  productsContainer: {
    marginTop: '120px',
    marginLeft: '168px',
  },
  productContainer: {
    marginTop: '68px',
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
    marginTop: '100px',
    fontSize: TitleFontSize,
    fontWeight: '900',
    lineHeight: TitleFontSize,
    textAlign: 'center',
    content: '甜蜜开业季储值送现金',
  },

  //具体开始时间 "2025.11.11"
  materialTimeDateStart: {
    type: 'text',
    fontSize: TitleFontSize,
    lineHeight: TitleFontSize,
    marginTop: '36px',
    content: '2025.11.11',
    display: 'inline-block',
  },
  materialTimeDateSuffix: {
    type: 'image',
    content:
      'https://img01.yzcdn.cn/upload_files/2025/03/24/Fp05i5-wAN00Lq0H4NvWybAjtq4_.png',
    width: 124,
    height: 48,
  },
  //具体时间 "11.21"
  materialTimeDateEnd: {
    type: 'text',
    fontSize: TitleFontSize,
    lineHeight: TitleFontSize,
    marginTop: '36px',
    content: '11.21',
    display: 'inline-block',
  },
  materialTimeDateDownload: {
    type: 'image',
    content:
      'https://img01.yzcdn.cn/upload_files/2025/03/24/Fh2nX8kZNNbCWEyTCed70fPPTZRq.png',
    width: '105px',
    height: '105px',
  },
  // 最外层的 container
  container1: {
    textAlign: 'center',
    width: '95.76%',
  },
}

export default {
  id: MaterialChannel.windowPromotion,
  layouts: {
    sizeInfo: {
      largeFontSize: '250px',
      normalFontSize: '100px',
      smallFontSize: '56px',
      miniFontSize: '38px',
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
        'https://img01.yzcdn.cn/upload_files/2025/03/26/FrepmMJGVLTfMG4qWRfQcqFRAXYe.png',
      content:
        'https://img01.yzcdn.cn/upload_files/2025/03/26/FrepmMJGVLTfMG4qWRfQcqFRAXYe.png',
      left: 0,
      top: 0,
    },
    ...ProductLayout,
    ...TopLayout,
    ...CouponLayout,
  },
}

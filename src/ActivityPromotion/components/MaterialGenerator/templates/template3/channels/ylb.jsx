import { BaseRect } from '../../../channels/base'
import { MaterialChannels, productList } from '../../../constant'

export const TopLayout = {
  // 物料标题：甜蜜开业季储值送现金
  materialTitle: {
    type: 'text',
    marginTop: '1125px',
    fontSize: '900px',
    fontWeight: '900',
    lineHeight: '900px',
    textAlign: 'center',
    content: '甜蜜开业季储值送现金',
  },

  //具体开始时间 "2025.11.11"
  materialTimeDateStart: {
    type: 'text',
    fontSize: '900px',
    fontWeight: '900px',
    lineHeight: '700px',
    marginTop: '386px',
    content: '2025.11.11',
    display: 'inline-block',
  },
  materialTimeDateSuffix: {
    type: 'image',
    content:
      'https://img01.yzcdn.cn/upload_files/2025/03/24/Fp05i5-wAN00Lq0H4NvWybAjtq4_.png',
  },
  //具体时间 "11.21"
  materialTimeDateEnd: {
    type: 'text',
    fontSize: '900px',
    fontWeight: '900px',
    lineHeight: '700px',
    marginTop: '386px',
    content: '11.21',
    display: 'inline-block',
  },
  materialTimeDateDownload: {
    type: 'image',
    content:
      'https://img01.yzcdn.cn/upload_files/2025/03/24/Fh2nX8kZNNbCWEyTCed70fPPTZRq.png',
    width: '800px',
    height: '800px',
  },
  // 最外层的 container
  container1: {
    margin: '200px 200px 0 200px',
    width: '95.76%',
  },
}

const LargeFontSize = '1706px'
const NormalFontSize = '680px'
const SmallFontSize = '386px'
const MiniFontSize = '256px'

export const ProductLayout = {
  ...productList.reduce((acc, item, index) => {
    const { amount, giftPacks } = item
    const { bonusAmount, coupons = [] } = giftPacks

    // 档位赠送金，`充` `xx` `送` `xx`
    // `充`
    acc[`materialProductBonusText1${index}`] = {
      type: 'text',
      text: `充`,
      fontSize: NormalFontSize,
    }

    // `xx`
    acc[`materialProductBonusText2${index}`] = {
      type: 'text',
      text: `${amount}`,
      fontSize: LargeFontSize,
      lineHeight: LargeFontSize,
      marginLeft: '0',
    }

    // 底部装饰
    acc[`materialProductBonusText2Decoration${index}`] = {
      type: 'image',
      content: `https://img01.yzcdn.cn/upload_files/2025/03/24/FrkfsoLC-pkoVgYZurOXsXb0fXo4.png`,
      width: `${
        (LargeFontSize.replace('px', '') * item.amount.toString().length) / 1.6
      }px`,
      height: '256px',
      left: '-3%',
      position: 'absolute',
      bottom: '10%',
    }

    // `送`
    acc[`materialProductBonusText3${index}`] = {
      type: 'text',
      text: `送`,
      fontSize: NormalFontSize,
      marginLeft: '300px',
    }

    // `xx`
    acc[`materialProductBonusText4${index}`] = {
      type: 'text',
      text: `${bonusAmount}`,
      fontSize: LargeFontSize,
      lineHeight: LargeFontSize,
      marginLeft: '100px',
    }

    // 底部装饰
    acc[`materialProductBonusText4Decoration${index}`] = {
      type: 'image',
      content: `https://img01.yzcdn.cn/upload_files/2025/03/24/FrkfsoLC-pkoVgYZurOXsXb0fXo4.png`,
      width: `${
        (LargeFontSize.replace('px', '') *
          item.giftPacks.bonusAmount.toString().length) /
        1.8
      }px`,
      height: '256px',
      left: '-2%',
      position: 'absolute',
      bottom: '10%',
    }

    coupons.forEach((coupon, couponIndex) => {
      const suffixKey = `${index}${couponIndex}`
      // 优惠券
      // 满减券：`还送满` `xx-xx` `优惠券`
      // `还送满`
      acc[`materialProductCoupon1${suffixKey}`] = {
        type: 'text',
        text: couponIndex === 0 ? `还送满` : '送满',
        fontSize: MiniFontSize,
        lineHeight: MiniFontSize,
      }

      // `xx-xx`
      acc[`materialProductCoupon2${suffixKey}`] = {
        type: 'text',
        text: `${coupon.text.replace('满', '').replace('优惠券', '')}`,
        fontSize: SmallFontSize,
        lineHeight: SmallFontSize,
      }

      // `优惠券`
      acc[`materialProductCoupon3${suffixKey}`] = {
        type: 'text',
        text: `优惠券`,
        fontSize: MiniFontSize,
        lineHeight: MiniFontSize,
      }
    })

    return acc
  }, {}),

  productsContainer: {
    marginTop: '2324px',
  },
  productContainer: {
    marginTop: '300px',
    position: 'relative',
  },
}

export const BottomLayout = {
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
    content: '本次活动最终解释权归活动方所有',
    color: '#fff',
    fontSize: '200px',
    lineHeight: '200px',
    marginTop: '1.5%',
  },
  materialQrcode: {
    type: 'image',
    content:
      'https://img01.yzcdn.cn/upload_files/2025/03/23/Fo4F1M1ez5njdBxUxEzQg8EBR5Oy.png',
    width: '3000px',
    height: '3000px',
    marginTop: '7%',
    marginLeft: '3%',
  },
  bottomContainer: {
    position: 'absolute',
    bottom: '0%',
    height: '20%',
    width: '100%',
    display: 'flex',
    textAlign: 'start',
  },
  scanTextContainer: {
    marginLeft: '400px',
    marginTop: '2200px',
    position: 'relative',
  },
}

export default {
  id: MaterialChannels.ylb,
  layouts: {
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
      previewContent:
        'https://img01.yzcdn.cn/upload_files/2025/03/24/Fs_rrTi_K-wV7TgRxzmRKmdp0aSn.png',
      content:
        'https://img01.yzcdn.cn/upload_files/2025/03/24/Fs_rrTi_K-wV7TgRxzmRKmdp0aSn.png',
      left: 0,
      top: 0,
    },
    ...TopLayout,
    ...ProductLayout,
    ...BottomLayout,
  },
}

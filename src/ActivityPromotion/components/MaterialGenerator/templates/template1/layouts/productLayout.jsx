import { processCommonStyle, processScale } from '../../../utils'

const LargeFontSize = '1150px'
const NormalFontSize = '380px'
const SmallFontSize = '330px'
const MiniFontSize = '215px'

const productList = [
  {
    amount: 10000,
    giftPacks: {
      // 赠送金
      bonusAmount: 2000,
      coupons: [],
    },
  },
  {
    amount: 20000,

    giftPacks: {
      // 赠送金
      bonusAmount: 4000,
      // 优惠券
      coupons: [
        {
          text: '满50-20优惠券',
        },
      ],
    },
  },
  {
    amount: 30000,
    giftPacks: {
      // 赠送金
      bonusAmount: 6000,
      // 优惠券
      coupons: [
        {
          text: '满50-20优惠券',
        },
        {
          text: '满100-50优惠券',
        },
      ],
    },
  },
  {
    amount: 40000,
    giftPacks: {
      // 赠送金
      bonusAmount: 8000,
      // 优惠券
      coupons: [
        {
          text: '满50-20优惠券',
        },
        {
          text: '满100-50优惠券',
        },
        {
          text: '商品兑换券',
        },
      ],
    },
  },
].map(item => ({
  ...item,
  amount: item.amount / 100,
  giftPacks: {
    ...item.giftPacks,
    bonusAmount: item.giftPacks.bonusAmount / 100,
    coupons: item.giftPacks.coupons.map((coupon, couponIndex) => ({
      ...coupon,
      prefix: `${couponIndex === 0 ? '还送' : ''}${['满']
        .filter(prefix => coupon.text.includes(prefix))
        .join('')}`,
      text: coupon.text
        .replace('优惠券', '')
        .replace('兑换券', '')
        .replace('满', ''),
      suffix: ['优惠券', '兑换券'].filter(suffix =>
        coupon.text.includes(suffix)
      ),
    })),
  },
}))

export const ProductLayout = {
  ...productList.reduce((acc, item, index) => {
    const { amount, giftPacks } = item
    const { bonusAmount, coupons = [] } = giftPacks

    // 档位赠送金，`充值` `xx` `元` `送` `xx` `元`
    // `充值`
    acc[`materialProductBonusText1${index}`] = {
      type: 'text',
      text: `充值`,
      fontSize: NormalFontSize,
    }

    // `xx`
    acc[`materialProductBonusText2${index}`] = {
      type: 'text',
      text: `${amount}`,
      fontSize: LargeFontSize,
      lineHeight: LargeFontSize,
    }
    // `元`
    acc[`materialProductBonusText2Suffix${index}`] = {
      type: 'image',
      content: `https://img01.yzcdn.cn/upload_files/2025/03/23/FsBpkEYN_FbzNxddhSuPo68JdJOW.png`,
    }

    // `送`
    acc[`materialProductBonusText3${index}`] = {
      type: 'text',
      text: `送`,
      fontSize: NormalFontSize,
    }

    // `xx`
    acc[`materialProductBonusText4${index}`] = {
      type: 'text',
      text: `${bonusAmount}`,
      fontSize: LargeFontSize,
      lineHeight: LargeFontSize,
    }

    // `元`
    acc[`materialProductBonusText4Suffix${index}`] = {
      type: 'image',
      content: `https://img01.yzcdn.cn/upload_files/2025/03/23/FsBpkEYN_FbzNxddhSuPo68JdJOW.png`,
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
}

const ContainerLayout = {
  container1: {
    backgroundContent:
      'https://img01.yzcdn.cn/upload_files/2025/03/23/Fl6khYfuKhoT4IKQEbLaS6Cvqpes.png',
  },
}

const productLayout = processCommonStyle(ProductLayout)

// 计算档位 title 的偏移量，设计师要求，为了保证视觉居中，需要计算 marginTop：
// 1. 有送礼包的优惠券数据时，偏上一点，经过手动计算，应该是 3%
// 2. 没有送礼包的优惠券数据时，偏下一点，应该是 6%
// 3. 如果是第一个档位（大的背景图），且有送礼包的优惠券数据时marginTop 需要...
// 4. 如果是第一个档位（大的背景图），且无送礼包的优惠券数据时，marginTop 需要
const calculateMarginTop = (hasCoupon, isFirst) => {
  if (hasCoupon) {
    return isFirst ? '9%' : '3%'
  } else {
    return isFirst ? '12%' : '6%'
  }
}

export const renderProductList = () => {
  return (
    <div style={ContainerLayout.container1} className="template1-products">
      {productList.map((item, index) => {
        return (
          <div
            key={`material-product-${index}`}
            className="material-product"
            style={{
              position: 'relative',
            }}
          >
            <div
              className="product-title"
              style={{
                marginTop: calculateMarginTop(
                  item.giftPacks.coupons.length > 0,
                  index === 0
                ),
              }}
            >
              <div
                data-id={`materialProductBonusText1${index}`}
                style={productLayout[`materialProductBonusText1${index}`]}
              >
                充值
              </div>
              <div
                data-id={`materialProductBonusText2${index}`}
                style={productLayout[`materialProductBonusText2${index}`]}
              >
                {item.amount}
              </div>
              <div
                data-id={`materialProductBonusText3${index}`}
                style={productLayout[`materialProductBonusText3${index}`]}
              >
                送
              </div>
              <div
                data-id={`materialProductBonusText4${index}`}
                style={productLayout[`materialProductBonusText4${index}`]}
              >
                {item.giftPacks.bonusAmount}
              </div>
            </div>
            <div className="product-subtitle">
              {item.giftPacks.coupons.map((coupon, couponIndex) => {
                const suffixKey = `${index}${couponIndex}`
                return (
                  <div
                    key={`material-product-coupon-${suffixKey}`}
                    className="product-subtitle-content"
                  >
                    {coupon.prefix && (
                      <div
                        data-id={`materialProductCoupon1${suffixKey}`}
                        style={
                          productLayout[`materialProductCoupon1${suffixKey}`]
                        }
                      >
                        {coupon.prefix}
                      </div>
                    )}

                    <div
                      data-id={`materialProductCoupon2${suffixKey}`}
                      style={
                        productLayout[`materialProductCoupon2${suffixKey}`]
                      }
                    >
                      {coupon.text}
                    </div>
                    <div
                      data-id={`materialProductCoupon3${suffixKey}`}
                      style={
                        productLayout[`materialProductCoupon3${suffixKey}`]
                      }
                    >
                      {coupon.suffix}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
}

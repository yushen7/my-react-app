import { processCommonStyle } from '../../../utils'
import { renderCouponLayout } from '../../common/couponLayout'

const getProductLayout = (productList, { largeFontSize, normalFontSize }) => {
  return processCommonStyle({
    ...productList.reduce((acc, item, index) => {
      const { amount, giftPacks } = item
      const { bonusAmount, coupons = [] } = giftPacks

      // 档位赠送金，`充` `xx` `送` `xx`
      // `充`
      acc[`materialProductBonusText1${index}`] = {
        type: 'text',
        text: `充`,
        fontSize: normalFontSize,
      }

      // `xx`
      acc[`materialProductBonusText2${index}`] = {
        type: 'text',
        text: `${amount}`,
        fontSize: largeFontSize,
        lineHeight: largeFontSize,
        marginLeft: '0',
      }

      // 底部装饰
      acc[`materialProductBonusText2Decoration${index}`] = {
        type: 'image',
        content: `https://img01.yzcdn.cn/upload_files/2025/03/24/FrkfsoLC-pkoVgYZurOXsXb0fXo4.png`,
        width: `${
          (largeFontSize.replace('px', '') * item.amount.toString().length) /
          1.6
        }px`,
        height: '38px',
        left: '-3%',
        position: 'absolute',
        bottom: '10%',
      }

      // `送`
      acc[`materialProductBonusText3${index}`] = {
        type: 'text',
        text: `送`,
        fontSize: normalFontSize,
        marginLeft: '30px',
      }

      // `xx`
      acc[`materialProductBonusText4${index}`] = {
        type: 'text',
        text: `${bonusAmount}`,
        fontSize: largeFontSize,
        lineHeight: largeFontSize,
        marginLeft: '10px',
      }

      // 底部装饰
      acc[`materialProductBonusText4Decoration${index}`] = {
        type: 'image',
        content: `https://img01.yzcdn.cn/upload_files/2025/03/24/FrkfsoLC-pkoVgYZurOXsXb0fXo4.png`,
        width: `${
          (largeFontSize.replace('px', '') *
            item.giftPacks.bonusAmount.toString().length) /
          1.8
        }px`,
        height: '38px',
        left: '-2%',
        position: 'absolute',
        bottom: '10%',
      }

      // coupons.forEach((coupon, couponIndex) => {
      //   const suffixKey = `${index}${couponIndex}`
      //   // 优惠券
      //   // 满减券：`还送满` `xx-xx` `优惠券`
      //   // `还送满`
      //   acc[`materialProductCoupon1${suffixKey}`] = {
      //     type: 'text',
      //     text: couponIndex === 0 ? `还送满` : '送满',
      //     fontSize: MiniFontSize,
      //     lineHeight: MiniFontSize,
      //   }

      //   // `xx-xx`
      //   acc[`materialProductCoupon2${suffixKey}`] = {
      //     type: 'text',
      //     text: `${coupon.text.replace('满', '').replace('优惠券', '')}`,
      //     fontSize: SmallFontSize,
      //     lineHeight: SmallFontSize,
      //   }

      //   // `优惠券`
      //   acc[`materialProductCoupon3${suffixKey}`] = {
      //     type: 'text',
      //     text: `优惠券`,
      //     fontSize: MiniFontSize,
      //     lineHeight: MiniFontSize,
      //   }
      // })

      return acc
    }, {}),
  })
}

export const renderProductList = (processedStyle, productList) => {
  const { sizeInfo, ...rest } = processedStyle
  const productLayout = { ...rest, ...getProductLayout(productList, sizeInfo) }
  return (
    <div style={productLayout.productsContainer} className="products">
      {productList.map((item, index) => {
        return (
          <div
            key={`material-product-${index}`}
            className="material-product"
            style={productLayout.productContainer}
          >
            <div
              className="product-title"
              style={productLayout.productTitle}
            >
              <div
                data-id={`materialProductBonusText1${index}`}
                style={productLayout[`materialProductBonusText1${index}`]}
              >
                充
              </div>
              <div style={{ marginLeft: '2%', position: 'relative' }}>
                <img
                  data-id={`materialProductBonusText2Decoration${index}`}
                  style={
                    productLayout[`materialProductBonusText2Decoration${index}`]
                  }
                  src={
                    productLayout[`materialProductBonusText2Decoration${index}`]
                      .content
                  }
                />
                <div
                  data-id={`materialProductBonusText2${index}`}
                  style={productLayout[`materialProductBonusText2${index}`]}
                >
                  {item.amount}
                </div>
              </div>

              <div
                data-id={`materialProductBonusText3${index}`}
                style={productLayout[`materialProductBonusText3${index}`]}
              >
                送
              </div>
              <div style={{ marginLeft: '2%', position: 'relative' }}>
                <img
                  data-id={`materialProductBonusText4Decoration${index}`}
                  style={
                    productLayout[`materialProductBonusText4Decoration${index}`]
                  }
                  src={
                    productLayout[`materialProductBonusText4Decoration${index}`]
                      .content
                  }
                />
                <div
                  data-id={`materialProductBonusText4${index}`}
                  style={productLayout[`materialProductBonusText4${index}`]}
                >
                  {item.giftPacks.bonusAmount}
                </div>
              </div>
            </div>
            {renderCouponLayout(item.giftPacks.coupons, processedStyle)}
          </div>
        )
      })}
    </div>
  )
}

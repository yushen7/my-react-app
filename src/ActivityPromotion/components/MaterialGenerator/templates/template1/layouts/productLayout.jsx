import { processCommonStyle, processScale } from '../../../utils'
import { renderCouponLayout } from '../../common/couponLayout'

const getProductLayout = (
  productList,
  { largeFontSize, largeLineHeight, normalFontSize }
) => {
  return processCommonStyle(
    productList.reduce((acc, item, index) => {
      const { amount, giftPacks } = item
      const { bonusAmount } = giftPacks
      const largeStyle = {
        fontSize: largeFontSize,
        lineHeight: largeLineHeight,
        color: '#F5AB00',
        marginLeft: '1%',
      }
      // 档位赠送金，`充值` `xx` `元` `送` `xx` `元`
      // `充值`
      acc[`materialProductBonusText1${index}`] = {
        type: 'text',
        text: `充值`,
        fontSize: normalFontSize,
        width: normalFontSize,
        lineHeight: normalFontSize,
      }

      // `xx`
      acc[`materialProductBonusText2${index}`] = {
        type: 'text',
        text: `${amount}`,
        ...largeStyle,
      }

      // `送`
      acc[`materialProductBonusText3${index}`] = {
        type: 'text',
        text: `送`,
        fontSize: normalFontSize,
        lineHeight: normalFontSize,
        marginLeft: '1%',
      }

      // `xx`
      acc[`materialProductBonusText4${index}`] = {
        type: 'text',
        text: `${bonusAmount}`,
        ...largeStyle,
      }

      // `元`
      acc[`materialProductBonusText4Suffix${index}`] = {
        type: 'image',
        content: `https://img01.yzcdn.cn/upload_files/2025/03/23/FsBpkEYN_FbzNxddhSuPo68JdJOW.png`,
        marginLeft: '1%',
      }

      return acc
    }, {})
  )
}

export const renderProductList = ({
  channelId,
  processedStyle,
  productList,
}) => {
  const { sizeInfo, ...rest } = processedStyle
  const productLayout = { ...rest, ...getProductLayout(productList, sizeInfo) }
  return (
    <>
      <div style={productLayout.productContainer1} className="template1-products">
        <img
          data-id={channelId}
          style={productLayout.materialProductBackground}
          src={productLayout.materialProductBackground.content}
        />
        {productList.map((item, index) => {
          return (
            <div
              key={`material-product-${index}`}
              className="material-product"
              style={productLayout.product}
            >
              <div className="product-title" style={productLayout.productTitle}>
                <div
                  data-id={channelId}
                  style={productLayout[`materialProductBonusText1${index}`]}
                >
                  充值
                </div>
                <div
                  data-id={channelId}
                  style={productLayout[`materialProductBonusText2${index}`]}
                >
                  {item.amount}
                </div>
                <img
                  data-id={channelId}
                  style={productLayout.materialPriceSuffix}
                  src={productLayout.materialPriceSuffix.content}
                />
                <div
                  data-id={channelId}
                  style={productLayout[`materialProductBonusText3${index}`]}
                >
                  送
                </div>
                <div
                  data-id={channelId}
                  style={productLayout[`materialProductBonusText4${index}`]}
                >
                  {item.giftPacks.bonusAmount}
                </div>
                <img
                  data-id={channelId}
                  style={productLayout.materialPriceSuffix}
                  src={productLayout.materialPriceSuffix.content}
                />
              </div>
              {renderCouponLayout({
                coupons: item.giftPacks.coupons,
                channelId,
                processedStyle,
              })}
              {/** 分割线 */}
              <img
                data-id={channelId}
                style={productLayout.materialProductDivide}
                src={productLayout.materialProductDivide.content}
              />
            </div>
          )
        })}
      </div>
      <img
        data-id={channelId}
        style={productLayout.materialArrow}
        src={productLayout.materialArrow.content}
      />
    </>
  )
}

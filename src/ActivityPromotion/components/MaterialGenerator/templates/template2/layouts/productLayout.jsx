import { processCommonStyle } from '../../../utils'
import { renderCouponLayout } from '../../common/couponLayout'
import { getProductTitleTop } from '../../common/productLayout'

const getProductLayout = (productList, { largeFontSize, normalFontSize }) => {
  return processCommonStyle({
    ...productList.reduce((acc, item, index) => {
      const { amount, giftPacks } = item
      const { bonusAmount, coupons = [] } = giftPacks

      // 档位赠送金，`满` `xx` `送` `xx`
      // `满`
      acc[`materialProductBonusText1${index}`] = {
        type: 'text',
        text: `满`,
        fontSize: normalFontSize,
      }

      // `xx`
      acc[`materialProductBonusText2${index}`] = {
        type: 'text',
        text: `${amount}`,
        fontSize: largeFontSize,
        lineHeight: largeFontSize,
      }

      // 底部装饰
      acc[`materialProductBonusText2Decoration${index}`] = {
        type: 'image',
        content: `https://img01.yzcdn.cn/upload_files/2025/03/24/FrkfsoLC-pkoVgYZurOXsXb0fXo4.png`,
        width: `${
          (largeFontSize.replace('px', '') * item.amount.toString().length) /
          1.6
        }px`,
        height: '15%',
        left: '-3%',
        position: 'absolute',
        bottom: '10%',
      }

      // `送`
      acc[`materialProductBonusText3${index}`] = {
        type: 'text',
        text: `送`,
        fontSize: normalFontSize,
        marginLeft: '3%',
      }

      // `xx`
      acc[`materialProductBonusText4${index}`] = {
        type: 'text',
        text: `${bonusAmount}`,
        fontSize: largeFontSize,
        lineHeight: largeFontSize,
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
        height: '15%',
        left: '0',
        position: 'absolute',
        bottom: '10%',
      }

      return acc
    }, {}),
  })
}

export const renderProductList = ({
  channelId,
  processedStyle,
  productList,
}) => {
  const { sizeInfo, ...rest } = processedStyle
  const productLayout = { ...rest, ...getProductLayout(productList, sizeInfo) }
  return (
    <div style={processedStyle.productsContainer}>
      {productList.map((item, index) => {
        const { productBackground, productContainer } = productLayout
        return (
          <div
            key={`material-product-${index}`}
            className="material-product"
            style={{
              position: 'relative',
              ...productContainer,
              ...getProductTitleTop({
                container: productContainer,
                index,
                productList,
              }),
              width: productBackground.width,
              height:
                index === 0
                  ? productBackground.firstHeight || productBackground.height
                  : productBackground.height,
            }}
          >
            <img
              data-id={channelId}
              style={{
                ...productBackground,
                height:
                  index === 0
                    ? productBackground.firstHeight || productBackground.height
                    : productBackground.height,
              }}
              src={
                index === 0
                  ? productBackground.firstContent || productBackground.content
                  : productBackground.content
              }
              alt="background"
            />
            <div
              className="product-title"
              style={{
                ...productLayout.productTitle,
                marginTop:
                  index === 0
                    ? productLayout.productTitle.firstMarginTop ||
                      productLayout.productTitle.marginTop
                    : productLayout.productTitle.marginTop,
              }}
            >
              <div
                data-id={channelId}
                style={productLayout[`materialProductBonusText1${index}`]}
              >
                充
              </div>
              <div style={{ marginLeft: '2%', position: 'relative' }}>
                <img
                  data-id={channelId}
                  style={
                    productLayout[`materialProductBonusText2Decoration${index}`]
                  }
                  src={
                    productLayout[`materialProductBonusText2Decoration${index}`]
                      .content
                  }
                />
                <div
                  data-id={channelId}
                  style={productLayout[`materialProductBonusText2${index}`]}
                >
                  {item.amount}
                </div>
              </div>
              {item.giftPacks.bonusAmount > 0 && (
                <>
                  <div
                    data-id={channelId}
                    style={productLayout[`materialProductBonusText3${index}`]}
                  >
                    送
                  </div>

                  <div style={{ marginLeft: '2%', position: 'relative' }}>
                    <img
                      data-id={channelId}
                      style={
                        productLayout[
                          `materialProductBonusText4Decoration${index}`
                        ]
                      }
                      src={
                        productLayout[
                          `materialProductBonusText4Decoration${index}`
                        ].content
                      }
                    />

                    <div
                      data-id={channelId}
                      style={productLayout[`materialProductBonusText4${index}`]}
                    >
                      {item.giftPacks.bonusAmount}
                    </div>
                  </div>
                </>
              )}
            </div>
            <div className="product-subtitle">
              {item.giftPacks.coupons.length > 0 &&
                renderCouponLayout({
                  coupons: item.giftPacks.coupons,
                  processedStyle,
                  channelId,
                })}
            </div>
          </div>
        )
      })}
    </div>
  )
}

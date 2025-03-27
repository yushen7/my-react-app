import { processCommonStyle } from '../../../utils'
import { renderCouponLayout } from '../../common/couponLayout'

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

      // 档位背景
      acc[`materialProductBackground${index}`] = {
        type: 'image',
        width: '8870px',
        height: index === 0 ? '3678px' : '2932px',
        left: '0',
        top: '0',
        position: 'absolute',
        content:
          index === 0
            ? 'https://img01.yzcdn.cn/upload_files/2025/03/17/Fn-gMp1CzOSbirw2WI4T5aLnR4Td.png'
            : 'https://img01.yzcdn.cn/upload_files/2025/03/17/FneEvpcghLF8Ny2kQdiiQTRIb__g.png',
      }
      return acc
    }, {}),
  })
}

// 计算档位 title 的偏移量，设计师要求，为了保证视觉居中，需要计算 marginTop：
// 1. 有送礼包的优惠券数据时，偏上一点，经过手动计算，应该是 3%
// 2. 没有送礼包的优惠券数据时，偏下一点，应该是 6%
// 3. 如果是第一个档位（大的背景图），且有送礼包的优惠券数据时marginTop 需要...
// 4. 如果是第一个档位（大的背景图），且无送礼包的优惠券数据时，marginTop 需要
const calculateMarginTop = (hasCoupon, isFirst) => {
  if (hasCoupon) {
    return isFirst ? '9%' : '3%'
  } else {
    return isFirst ? '15%' : '6%'
  }
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
        const productBackgroundStyle =
          productLayout[`materialProductBackground${index}`]

        return (
          <div
            key={`material-product-${index}`}
            className="material-product"
            style={{
              position: 'relative',
              width: productBackgroundStyle.width,
              height: productBackgroundStyle.height,
              marginTop: index === 0 ? '-360px' : '200px',
            }}
          >
            <img
              data-id={channelId}
              style={productBackgroundStyle}
              src={productBackgroundStyle.content}
              alt="background"
            />
            <div className="product-title" style={productLayout.productTitle}>
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
                    productLayout[`materialProductBonusText4Decoration${index}`]
                  }
                  src={
                    productLayout[`materialProductBonusText4Decoration${index}`]
                      .content
                  }
                />
                <div
                  data-id={channelId}
                  style={productLayout[`materialProductBonusText4${index}`]}
                >
                  {item.giftPacks.bonusAmount}
                </div>
              </div>
            </div>
            <div className="product-subtitle">
              {renderCouponLayout({
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

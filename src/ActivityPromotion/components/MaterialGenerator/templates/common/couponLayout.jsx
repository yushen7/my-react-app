import { processCommonStyle } from '../../utils'

const getCouponLayout = (coupons, sizeInfo) => {
  const { smallFontSize, miniFontSize } = sizeInfo
  const couponLayout = {}
  coupons.forEach((coupon, couponIndex) => {
    const suffixKey = `${couponIndex}`
    // 优惠券
    // 满减券：`还送满` `xx-xx` `优惠券`
    // `还送满`
    couponLayout[`materialProductCoupon1${suffixKey}`] = {
      type: 'text',
      text: couponIndex === 0 ? `还送满` : '送满',
      fontSize: miniFontSize,
      lineHeight: miniFontSize,
    }

    // `xx-xx`
    couponLayout[`materialProductCoupon2${suffixKey}`] = {
      type: 'text',
      text: `${coupon.text.replace('满', '').replace('优惠券', '')}`,
      fontSize: smallFontSize,
      lineHeight: smallFontSize,
      fontWeight: '900',
    }

    // `优惠券`
    couponLayout[`materialProductCoupon3${suffixKey}`] = {
      type: 'text',
      text: `优惠券`,
      fontSize: miniFontSize,
      lineHeight: miniFontSize,
    }
  })
  return processCommonStyle({
    ...couponLayout,
  })
}

export function renderCouponLayout({ coupons, processedStyle, channelId }) {
  const { sizeInfo, ...rest } = processedStyle
  const couponLayout = { ...rest, ...getCouponLayout(coupons, sizeInfo) }
  if (!coupons.length) {
    return null
  }
  return (
    <div className="product-subtitle" style={couponLayout.productSubtitle}>
      {coupons.map((coupon, couponIndex) => {
        const suffixKey = `${couponIndex}`
        return (
          <div
            className="material-product-coupon"
            style={couponLayout.materialProductCoupon}
            key={`material-product-coupon-${suffixKey}`}
          >
            {couponIndex !== 0 && (
              <div
                data-id={channelId}
                style={couponLayout.materialProductSlash}
              >
                {couponLayout.materialProductSlash.content}
              </div>
            )}
            {coupon.prefix && (
              <div
                data-id={channelId}
                style={couponLayout[`materialProductCoupon1${suffixKey}`]}
              >
                {coupon.prefix}
              </div>
            )}

            <div
              data-id={channelId}
              style={couponLayout[`materialProductCoupon2${suffixKey}`]}
            >
              {coupon.text}
            </div>
            <div
              data-id={channelId}
              style={couponLayout[`materialProductCoupon3${suffixKey}`]}
            >
              {coupon.suffix}
            </div>
          </div>
        )
      })}
    </div>
  )
}

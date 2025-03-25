import { processCommonStyle } from '../../utils'

const SmallFontSize = '330px'
const MiniFontSize = '215px'

const ContainerLayout = {
  productSubtitle: {
    marginLeft: '636px',
    marginTop: '1.5%',
    gap: '100px',
  },
  materialProductCoupon: {
    gap: '100px',
  },
  materialProductSlash: {
    type: 'text',
    content: '/',
    color: '#FFA59F',
    fontSize: '200px',
    lineHeight: '200px',
  },
}

const getCouponLayout = coupons => {
  const couponLayout = {}
  coupons.forEach((coupon, couponIndex) => {
    const suffixKey = `${couponIndex}`
    // 优惠券
    // 满减券：`还送满` `xx-xx` `优惠券`
    // `还送满`
    couponLayout[`materialProductCoupon1${suffixKey}`] = {
      type: 'text',
      text: couponIndex === 0 ? `还送满` : '送满',
      fontSize: MiniFontSize,
      lineHeight: MiniFontSize,
    }

    // `xx-xx`
    couponLayout[`materialProductCoupon2${suffixKey}`] = {
      type: 'text',
      text: `${coupon.text.replace('满', '').replace('优惠券', '')}`,
      fontSize: SmallFontSize,
      lineHeight: SmallFontSize,
      fontWeight: '900',
    }

    // `优惠券`
    couponLayout[`materialProductCoupon3${suffixKey}`] = {
      type: 'text',
      text: `优惠券`,
      fontSize: MiniFontSize,
      lineHeight: MiniFontSize,
    }
  })
  return processCommonStyle({
    ...couponLayout,
    ...ContainerLayout,
  })
}

export function renderCouponLayout(coupons) {
  const couponLayout = getCouponLayout(coupons)
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
                data-id="materialProductSlash"
                style={couponLayout.materialProductSlash}
              >
                {couponLayout.materialProductSlash.content}
              </div>
            )}
            {coupon.prefix && (
              <div
                data-id={`materialProductCoupon1${suffixKey}`}
                style={couponLayout[`materialProductCoupon1${suffixKey}`]}
              >
                {coupon.prefix}
              </div>
            )}

            <div
              data-id={`materialProductCoupon2${suffixKey}`}
              style={couponLayout[`materialProductCoupon2${suffixKey}`]}
            >
              {coupon.text}
            </div>
            <div
              data-id={`materialProductCoupon3${suffixKey}`}
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

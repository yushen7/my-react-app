export function getProductTitleTop({ container, index, productList }) {
  if (index === 0 && container.firstMarginTop) {
    return {
      marginTop: container.firstMarginTop,
    }
  }

  return {
    marginTop:
      index > 0 && container.noCouponTop && productList.length === 3
        ? container.noCouponTop
        : container.marginTop,
  }
}

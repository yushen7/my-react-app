import { renderCouponLayout } from "../../common/couponLayout"

export const renderProductList = (processedStyle, productList) => {
  return (
    <div style={processedStyle.productsContainer} className="products">
      {productList.map((item, index) => {
        return (
          <div
            key={`material-product-${index}`}
            className="material-product"
            style={processedStyle.productContainer}
          >
            <div
              className="product-title"
              style={{
                marginTop: index === 0 ? '0' : '300px',
              }}
            >
              <div
                data-id={`materialProductBonusText1${index}`}
                style={processedStyle[`materialProductBonusText1${index}`]}
              >
                充
              </div>
              <div style={{ marginLeft: '2%', position: 'relative' }}>
                <img
                  data-id={`materialProductBonusText2Decoration${index}`}
                  style={
                    processedStyle[
                      `materialProductBonusText2Decoration${index}`
                    ]
                  }
                  src={
                    processedStyle[
                      `materialProductBonusText2Decoration${index}`
                    ].content
                  }
                />
                <div
                  data-id={`materialProductBonusText2${index}`}
                  style={processedStyle[`materialProductBonusText2${index}`]}
                >
                  {item.amount}
                </div>
              </div>

              <div
                data-id={`materialProductBonusText3${index}`}
                style={processedStyle[`materialProductBonusText3${index}`]}
              >
                送
              </div>
              <div style={{ marginLeft: '2%', position: 'relative' }}>
                <img
                  data-id={`materialProductBonusText4Decoration${index}`}
                  style={
                    processedStyle[
                      `materialProductBonusText4Decoration${index}`
                    ]
                  }
                  src={
                    processedStyle[
                      `materialProductBonusText4Decoration${index}`
                    ].content
                  }
                />
                <div
                  data-id={`materialProductBonusText4${index}`}
                  style={processedStyle[`materialProductBonusText4${index}`]}
                >
                  {item.giftPacks.bonusAmount}
                </div>
              </div>
            </div>
            {renderCouponLayout(item.giftPacks.coupons)}
          </div>
        )
      })}
    </div>
  )
}

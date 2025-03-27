import { processCommonStyle, processScale } from '../../../utils'
import { renderCouponLayout } from '../../common/couponLayout'

const LargeFontSize = '1150px'
const NormalFontSize = '380px'

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
  materialPriceSuffix: {
    type: 'image',
    content: `https://img01.yzcdn.cn/upload_files/2025/03/23/FsBpkEYN_FbzNxddhSuPo68JdJOW.png`,
    width: '330px',
    height: '330px',
    marginLeft: '1%',
  },
  // 分割线
  materialProductDivide: {
    type: 'image',
    width: '87%',
    content:
      'https://img01.yzcdn.cn/upload_files/2025/03/23/FnZfiRP5kn1KYF8ncAa9Y_cBzymN.png',
    marginTop: '2.5%',
  },
  materialProductBackground: {
    type: 'image',
    width: '100%',
    position: 'absolute',
    top: '-6%',
    content:
      'https://img01.yzcdn.cn/upload_files/2025/03/23/Fl6khYfuKhoT4IKQEbLaS6Cvqpes.png',
  },
  materialArrow: {
    type: 'image',
    content:
      'https://img01.yzcdn.cn/upload_files/2025/03/23/FriM7WLZQ7fXpzYcegjn6EQy62MA.png',
    position: 'absolute',
    right: '7%',
    bottom: '20%',
    width: '7%',
  },
  ...productList.reduce((acc, item, index) => {
    const { amount, giftPacks } = item
    const { bonusAmount, coupons = [] } = giftPacks
    const largeStyle = {
      fontSize: LargeFontSize,
      lineHeight: '900px',
      color: '#F5AB00',
      marginLeft: '1%',
    }
    // 档位赠送金，`充值` `xx` `元` `送` `xx` `元`
    // `充值`
    acc[`materialProductBonusText1${index}`] = {
      type: 'text',
      text: `充值`,
      fontSize: NormalFontSize,
      width: NormalFontSize,
      lineHeight: NormalFontSize,
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
      fontSize: NormalFontSize,
      lineHeight: NormalFontSize,
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
  }, {}),
}

const ContainerLayout = {
  container1: {
    position: 'relative',
    height: '8672px',
  },
  productTitle: {
    marginLeft: '0',
    marginTop: '2.5%',
    alignItems: 'end',
  },
  product: {
    marginTop: '0',
    marginLeft: '6.37%',
    position: 'relative',
  },
}

const productLayout = processCommonStyle(ProductLayout)

export const renderProductList = () => {
  return (
    <div style={ContainerLayout.container1} className="template1-products">
      <img
        data-id="materialProductBackground"
        style={productLayout.materialProductBackground}
        src={productLayout.materialProductBackground.content}
      />
      {productList.map((item, index) => {
        return (
          <div
            key={`material-product-${index}`}
            className="material-product"
            style={ContainerLayout.product}
          >
            <div className="product-title" style={ContainerLayout.productTitle}>
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
              <img
                data-id="materialPriceSuffix"
                style={productLayout.materialPriceSuffix}
                src={productLayout.materialPriceSuffix.content}
              />
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
              <img
                data-id="materialPriceSuffix"
                style={productLayout.materialPriceSuffix}
                src={productLayout.materialPriceSuffix.content}
              />
            </div>
            {renderCouponLayout(item.giftPacks.coupons)}
            {/** 分割线 */}
            <img
              data-id="materialProductDivide"
              style={productLayout.materialProductDivide}
              src={productLayout.materialProductDivide.content}
            />
          </div>
        )
      })}
      <img
        data-id="materialArrow"
        style={productLayout.materialArrow}
        src={productLayout.materialArrow.content}
      />
    </div>
  )
}

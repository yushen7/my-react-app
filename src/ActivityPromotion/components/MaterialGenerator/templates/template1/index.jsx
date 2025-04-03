import { MaterialChannel } from '../../../../constant'
import { processScale } from '../../utils'
import { renderBottomLayout } from './layouts/bottomLayout'
import { renderProductList } from './layouts/productLayout'
import { renderTopLayout } from './layouts/topLayout'
import MaterialChannelList from './channels'
import { renderBannerExtra } from './channels/banner'

function renderChannel({ channelId, processedStyle, data }) {
  const productList = data.rechargeList

  const renderTopLayoutWithProps = () => {
    return renderTopLayout({ processedStyle, channelId, data })
  }
  const renderProductListWithProps = () => {
    return renderProductList({ processedStyle, channelId, productList })
  }
  const renderBottomLayoutWithProps = () => {
    return renderBottomLayout({ processedStyle, channelId, data })
  }

  const bgImg = (
    <img
      data-type="background"
      data-id={channelId}
      src={processedStyle.materialBackground.content}
      alt="background"
      style={processedStyle.materialBackground}
      className="background"
    />
  )

  switch (channelId) {
    case MaterialChannel.ylb:
      return (
        <>
          {bgImg}
          {renderTopLayoutWithProps()}
          {renderProductListWithProps()}
          {renderBottomLayoutWithProps()}
          <img
            data-id={channelId}
            style={processedStyle.materialDecorationBar}
            src={processedStyle.materialDecorationBar.content}
          />
        </>
      )
    case MaterialChannel.windowPromotion:
      return (
        <>
          {bgImg}
          {renderTopLayoutWithProps()}
          {renderProductListWithProps()}
          {renderBottomLayoutWithProps()}
        </>
      )
    case MaterialChannel.banner:
      return (
        <>
          {bgImg}
          {renderTopLayoutWithProps()}
          {renderBannerExtra({ channelId })}
        </>
      )
    case MaterialChannel.cashierCard:
      return (
        <>
          {bgImg}
          {renderTopLayoutWithProps()}
          {renderProductListWithProps()}
          {renderBottomLayoutWithProps()}
        </>
      )
    case MaterialChannel.friendCircle:
      return (
        <>
          {bgImg}
          {renderTopLayoutWithProps()}
          {renderProductListWithProps()}
          {renderBottomLayoutWithProps()}
        </>
      )
    default:
      return null
  }
}

export default function TemplateOne({ data, channel: channelProps }) {
  const channel = MaterialChannelList.find(item => item.id === channelProps)
  if (!channel || !channel.layouts) {
    return null
  }

  const processedStyle = processScale(
    channel.layouts,
    channel.posterRatio
    // 1
  )

  return (
    <div
      style={{
        transformOrigin: 'top left',
        // opacity: 0,
        position: 'absolute',
      }}
    >
      <div
        key={channel.id}
        className={channel.id}
        style={processedStyle.materialGenerator}
      >
        {renderChannel({
          channelId: channel.id,
          processedStyle,
          data,
        })}
      </div>
    </div>
  )
}

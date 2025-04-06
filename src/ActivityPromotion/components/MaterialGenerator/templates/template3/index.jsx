import { MaterialChannel } from '../../../../constant'
import { processScale } from '../../utils'
import channels from './channels'
import { renderBottomLayout } from './layouts/bottomLayout'
import { renderProductList } from './layouts/productLayout'
import { renderTopLayout } from './layouts/topLayout'

function renderChannel({ channelId, processedStyle, data }) {
  const { rechargeList } = data
  const bgImg = (
    <img
      data-id={channelId}
      data-type="background"
      src={processedStyle.materialBackground.previewContent}
      alt="background"
      style={processedStyle.materialBackground}
      className="background"
    />
  )
  const renderBottomLayoutWithProps = () => {
    return renderBottomLayout({ processedStyle, channelId, data })
  }
  const renderProductListWithProps = () => {
    return renderProductList({
      processedStyle,
      channelId,
      productList: rechargeList,
    })
  }
  const renderTopLayoutWithProps = () => {
    return renderTopLayout({ processedStyle, channelId, data })
  }
  switch (channelId) {
    case MaterialChannel.ylb:
      return (
        <>
          {bgImg}
          {renderTopLayoutWithProps()}
          {renderProductListWithProps()}
          {renderBottomLayoutWithProps()}
        </>
      )
    case MaterialChannel.windowPromotion:
      return (
        <>
          {bgImg}
          {renderTopLayoutWithProps()}
          {renderProductListWithProps()}
        </>
      )
    case MaterialChannel.banner:
      return (
        <>
          {bgImg}
          {renderTopLayoutWithProps()}
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

export default function TemplateThree({ data, channel: channelProps }) {
  const channel = channels.find(item => item.id === channelProps)

  if (!channel) {
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

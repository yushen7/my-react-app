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
  switch (channelId) {
    case MaterialChannel.ylb:
      return (
        <>
          {bgImg}
          {renderTopLayout({ processedStyle, channelId, data })}
          {renderProductList({
            processedStyle,
            channelId,
            productList: rechargeList,
          })}
          {renderBottomLayout({ processedStyle, channelId })}
        </>
      )
    case MaterialChannel.windowPromotion:
      return (
        <>
          {bgImg}
          {renderTopLayout({ processedStyle, channelId, data })}
          {renderProductList({
            processedStyle,
            channelId,
            productList: rechargeList,
          })}
        </>
      )
    case MaterialChannel.banner:
      return (
        <>
          {bgImg}
          {renderTopLayout({ processedStyle, channelId, data })}
        </>
      )
    case MaterialChannel.cashierCard:
      return (
        <>
          {bgImg}
          {renderTopLayout({ processedStyle, channelId, data })}
          {renderProductList({
            processedStyle,
            channelId,
            productList: rechargeList,
          })}
          {renderBottomLayout({ processedStyle, channelId })}
        </>
      )
    case MaterialChannel.friendCircle:
      return (
        <>
          {bgImg}
          {renderTopLayout({ processedStyle, channelId, data })}
          {renderProductList({
            processedStyle,
            channelId,
            productList: rechargeList,
          })}
          {renderBottomLayout({ processedStyle, channelId })}
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
        opacity: 0,
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

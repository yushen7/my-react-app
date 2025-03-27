import { MaterialChannel } from '../../../../constant'
import { processScale } from '../../utils'
import MaterialChannelList from './channels'
import { renderBottomLayout } from './layouts/bottomLayout'
import { renderProductList } from './layouts/productLayout'
import { renderTopLayout } from './layouts/topLayout'

function renderChannel({ channelId, processedStyle, data }) {
  const { rechargeList: productList } = data

  const img = (
    <img
      data-id={channelId}
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
          {img}
          {renderTopLayout({ processedStyle, channelId })}
          {renderProductList({ processedStyle, channelId, productList })}
          {renderBottomLayout({ processedStyle, channelId })}
        </>
      )
    case MaterialChannel.windowPromotion:
      return (
        <>
          {img}
          {renderTopLayout({ processedStyle, channelId })}
          {renderProductList({ processedStyle, channelId, productList })}
        </>
      )
    case MaterialChannel.banner:
      return (
        <>
          {img}
          {renderTopLayout({ processedStyle, channelId })}
        </>
      )
    case MaterialChannel.cashierCard:
      return (
        <>
          {img}
          {renderTopLayout({ processedStyle, channelId })}
          {renderProductList({ processedStyle, channelId, productList })}
          {renderBottomLayout({ processedStyle, channelId })}
        </>
      )
    default:
      return null
  }
}

export default function TemplateTwo({
  onGenerate,
  data,
  channel: channelProps,
}) {
  const channel = MaterialChannelList.find(item => item.id === channelProps)
  if (!channel || !channel.layouts) {
    return null
  }

  const processedStyle = processScale(
    channel.layouts,
    channel.posterRatio
    // 1
  )

  console.log(processedStyle, 'processedStyle')

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

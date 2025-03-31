import { MaterialChannel } from '../../../../constant'
import { processScale } from '../../utils'
import MaterialChannelList from './channels'
import { renderExtra } from './channels/cashierCard'
import { renderBottomLayout } from './layouts/bottomLayout'
import { renderProductList } from './layouts/productLayout'
import { renderTopLayout } from './layouts/topLayout'

function renderChannel({ channelId, processedStyle, data }) {
  const { rechargeList: productList } = data

  const baseImg = (
    <img
      data-id={channelId}
      src={processedStyle.materialBackground.previewContent}
      alt="background"
      style={processedStyle.materialBackground}
      className="background"
    />
  )

  const bottomImg = (
    <img
      data-id={channelId}
      src={processedStyle.materialBottomDecorationBar.content}
      alt="background"
      style={processedStyle.materialBottomDecorationBar}
      className="background"
    />
  )
  const renderTopLayoutWithProps = () => {
    return renderTopLayout({ processedStyle, channelId, data })
  }

  const renderProductListWithProps = () => {
    return renderProductList({ processedStyle, channelId, productList })
  }

  const renderBottomLayoutWithProps = () => {
    return renderBottomLayout({ processedStyle, channelId })
  }

  switch (channelId) {
    case MaterialChannel.ylb:
      return (
        <>
          {baseImg}
          {renderTopLayoutWithProps()}
          {renderProductListWithProps()}
          {renderBottomLayoutWithProps()}
        </>
      )
    case MaterialChannel.windowPromotion:
      return (
        <>
          {baseImg}
          {renderTopLayoutWithProps()}
          {renderProductListWithProps()}
          {bottomImg}
        </>
      )
    case MaterialChannel.banner:
      return (
        <>
          {baseImg}
          {renderTopLayoutWithProps()}
          {bottomImg}
        </>
      )
    case MaterialChannel.cashierCard:
      return (
        <>
          {baseImg}
          {renderTopLayoutWithProps()}
          {renderProductListWithProps()}
          {renderBottomLayoutWithProps()}
          {renderExtra({ channelId })}
        </>
      )
    case MaterialChannel.friendCircle:
      return (
        <>
          {baseImg}
          {renderTopLayoutWithProps()}
          {renderProductListWithProps()}
          {renderBottomLayoutWithProps()}
          {renderExtra({ channelId })}
        </>
      )
    default:
      return null
  }
}

export default function TemplateTwo({ data, channel: channelProps }) {
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

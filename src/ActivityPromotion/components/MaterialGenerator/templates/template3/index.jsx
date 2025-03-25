import { MaterialChannelList } from '../../channels'
import { MaterialChannels, productList } from '../../constant'
import { processCommonStyle, processScale } from '../../utils'
import channels from './channels'
import { renderBottomLayout } from './layouts/bottomLayout'
import { renderProductList } from './layouts/productLayout'
import { renderTopLayout } from './layouts/topLayout'

function renderChannel(channel, processedStyle) {
  const bgImg = (
    <img
      data-id="materialBackground"
      src={processedStyle.materialBackground.previewContent}
      alt="background"
      style={processedStyle.materialBackground}
      className="background"
    />
  )
  switch (channel) {
    case MaterialChannels.ylb:
      return (
        <>
          {bgImg}
          {renderTopLayout(processedStyle)}
          {renderProductList(processedStyle, productList)}
          {renderBottomLayout(processedStyle)}
        </>
      )
    case MaterialChannels.windowPromotion:
      return (
        <>
          {bgImg}
          {renderTopLayout(processedStyle)}
          {renderProductList(processedStyle, productList)}
        </>
      )
    case MaterialChannels.banner:
      return (
        <>
          {bgImg}
          {renderTopLayout(processedStyle)}
        </>
      )
    case MaterialChannels.cashierCard:
      return (
        <>
          {bgImg}
          {renderTopLayout(processedStyle)}
          {renderProductList(processedStyle, productList)}
          {renderBottomLayout(processedStyle)}
        </>
      )
    default:
      return null
  }
}

export default function TemplateThree() {
  return (
    <div>
      {channels.map(channel => {
        const processedStyle = processScale(
          channel.layouts,
          channel.displayRatio
        )
        return (
          <div
            key={channel.id}
            className="material-generator"
            data-id="materialGenerator"
            style={processedStyle.materialGenerator}
          >
            {renderChannel(channel.id, processedStyle)}
          </div>
        )
      })}
    </div>
  )
}

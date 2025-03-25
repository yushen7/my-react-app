import { MaterialChannels } from '../../constant'
import { processCommonStyle } from '../../utils'
import { renderBottomLayout } from './layouts/bottomLayout'
import { AllConfigs } from './layouts/layout'
import { renderProductList } from './layouts/productLayout'
import { renderTopLayout } from './layouts/topLayout'

const processedStyle = processCommonStyle(AllConfigs)

function renderChannel(channel) {
  switch (channel) {
    case MaterialChannels.ylb:
      return (
        <>
          <img
            data-id="materialBackground"
            src={processedStyle.materialBackground.previewContent}
            alt="background"
            style={processedStyle.materialBackground}
            className="background"
          />
          {renderTopLayout()}
          {renderProductList()}
          {renderBottomLayout()}
        </>
      )
    case MaterialChannels.windowPromotion:
      return (
        <>
          <img
            data-id="materialBackground"
            src="https://img01.yzcdn.cn/upload_files/2025/03/13/lp-V-wRHoi-ZSiNCMIGvR9uSbuAz.png"
            alt="background"
            style={processedStyle.materialBackground}
            className="background"
          />
          {renderTopLayout()}
          {renderProductList()}
        </>
      )
    case MaterialChannels.banner:
      return (
        <>
          <img
            data-id="materialBackground"
            o
            src="https://img01.yzcdn.cn/upload_files/2025/03/13/lp-V-wRHoi-ZSiNCMIGvR9uSbuAz.png"
            alt="background"
            style={processedStyle.materialBackground}
            className="background"
          />
          {renderTopLayout()}
        </>
      )
    case MaterialChannels.cashierCard:
      return (
        <>
          <img
            data-id="materialBackground"
            src="https://img01.yzcdn.cn/upload_files/2025/03/13/lp-V-wRHoi-ZSiNCMIGvR9uSbuAz.png"
            alt="background"
            style={processedStyle.materialBackground}
            className="background"
          />
          {renderTopLayout()}
          {renderProductList()}
          {renderBottomLayout()}
        </>
      )
    default:
      return null
  }
}

export default function TemplateOne() {
  return (
    <>
      {renderChannel(MaterialChannels.ylb)}

      {/* {renderChannel(MaterialChannels.windowPromotion)} */}
      {/* {renderChannel(MaterialChannels.banner)} */}
      {/* {renderChannel(MaterialChannels.cashierCard)} */}
    </>
  )
}

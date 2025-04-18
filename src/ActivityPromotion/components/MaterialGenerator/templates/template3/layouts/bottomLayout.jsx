export function renderBottomLayout({ processedStyle, channelId, data }) {
  return (
    <>
      {processedStyle.qrCodeDecoration && (
        <img
          data-id={channelId}
          src={processedStyle.qrCodeDecoration.content}
          style={processedStyle.qrCodeDecoration}
        />
      )}
      {
        <img
          data-id={channelId}
          style={processedStyle.materialQrCode}
          src={data.qrCode}
          alt=""
        />
      }
      <div className="materials-bottom" style={processedStyle.bottomContainer}>
        <div style={processedStyle.scanTextContainer}>
          <div data-id={channelId} style={processedStyle.materialScanText1}>
            扫码参与
          </div>
          <div data-id={channelId} style={processedStyle.materialScanText2}>
            使用小程序即可充值
          </div>
          <div data-id={channelId} style={processedStyle.materialScanText3}>
            *本次活动最终解释权归活动方所有
          </div>
        </div>
      </div>
    </>
  )
}

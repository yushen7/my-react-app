export function renderBottomLayout({ processedStyle, channelId, data }) {
  return (
    <>
      <div
        className="materials-bottom"
        style={processedStyle.materialBottomContainer}
      >
        <img
          data-id={channelId}
          style={processedStyle.scanDecoration}
          src={processedStyle.scanDecoration.content}
        />

        <img
          data-id={channelId}
          style={processedStyle.materialBlackBackground}
          src={processedStyle.materialBlackBackground.content}
        />

        <div style={processedStyle.materialScanTextContainer}>
          <div data-id={channelId} style={processedStyle.materialScanText}>
            扫码参与
          </div>
          <div data-id={channelId} style={processedStyle.materialQrCodeText}>
            使用小程序即可充值
          </div>
          <div data-id={channelId} style={processedStyle.materialTips}>
            *本次活动最终解释权归活动方所有
          </div>
        </div>

        <div style={processedStyle.qrCodeContainer}>
          {processedStyle.materialQrDecoration && (
            <img
              data-id={channelId}
              style={processedStyle.materialQrDecoration}
              src={processedStyle.materialQrDecoration.content}
              alt=""
            />
          )}
          {data.qrCode && processedStyle.materialQrCode && (
            <img
              data-id={channelId}
              style={processedStyle.materialQrCode}
              src={data.qrCode}
              alt=""
            />
          )}
        </div>
      </div>
      <img
        data-id={channelId}
        src={processedStyle.materialBottomDecorationBar.content}
        style={processedStyle.materialBottomDecorationBar}
      />
    </>
  )
}

export function renderBottomLayout({ processedStyle, channelId }) {
  return (
    <div className="materials-bottom" style={processedStyle.bottomContainer}>
      <div style={processedStyle.scanTextContainer}>
        <img
          data-id={channelId}
          style={processedStyle.materialBottomDecoration}
          src={processedStyle.materialBottomDecoration.content}
        />

        <img
          data-id={channelId}
          style={processedStyle.materialBlackBackground}
          src={processedStyle.materialBlackBackground.content}
        />

        <div className="qr-code" style={processedStyle.qrCodeContainer}>
          <img
            data-id={channelId}
            style={processedStyle.materialQrDecoration}
            src={processedStyle.materialQrDecoration.content}
            alt=""
          />
        </div>
        <div className="material-scan" style={processedStyle.scanTextContainer}>
          <div
            data-id={channelId}
            style={processedStyle.materialScanText}
            className="scan-text"
          >
            扫码参与
          </div>
          <div
            data-id={channelId}
            style={processedStyle.materialQrCodeText}
            className="scan-text"
          >
            使用小程序即可充值
          </div>
          <div
            data-id={channelId}
            style={processedStyle.materialTips}
            className="tips"
          >
            *本次活动最终解释权归活动方所有
          </div>
        </div>
      </div>

      <img
        data-id={channelId}
        src={processedStyle.materialBottomDecorationBar.content}
        alt="bottom-decoration-bar"
        className="bottom-decoration-bar"
        style={processedStyle.materialBottomDecorationBar}
      />
    </div>
  )
}

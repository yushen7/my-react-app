export function renderBottomLayout({ processedStyle, channelId, data }) {
  return (
    <div className="materials-bottom" style={processedStyle.bottomContainer}>
      {data.qrCode && processedStyle.materialQrcode && (
        <img
          data-id={channelId}
          style={processedStyle.materialQrcode}
          src={data.qrCode}
          alt=""
        />
      )}

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
  )
}

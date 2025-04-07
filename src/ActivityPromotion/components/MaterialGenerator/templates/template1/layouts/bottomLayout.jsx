export function renderBottomLayout({ processedStyle, channelId, data }) {
  return (
    <>
      <div style={processedStyle.bottomContainer}>
        <div style={processedStyle.container1}>
          {processedStyle.materialScanTextBackground && (
            <img
              data-id={channelId}
              style={processedStyle.materialScanTextBackground}
              src={processedStyle.materialScanTextBackground.content}
            />
          )}

          <div style={processedStyle.container2}>
            <div data-id={channelId} style={processedStyle.materialScanText1}>
              扫码参与
            </div>
            <div data-id={channelId} style={processedStyle.materialScanText2}>
              使用小程序即可充值
            </div>
            {processedStyle.materialScanText3 && (
              <div data-id={channelId} style={processedStyle.materialScanText3}>
                活动地址:{data.address}
              </div>
            )}

            <div data-id={channelId} style={processedStyle.materialScanText4}>
              本次活动最终解释权归活动方所有
            </div>
          </div>
        </div>
      </div>
      {
f        processedStyle.qrCodeDecoration && (
          <img
            data-id={channelId}
            style={processedStyle.qrCodeDecoration}
            src={processedStyle.qrCodeDecoration.content}
            />
        )
      }
      {processedStyle.bottomQrCode && data.qrCode && (
        <img
          data-id={channelId}
          style={processedStyle.bottomQrCode}
          src={data.qrCode}
        />
      )}
    </>
  )
}

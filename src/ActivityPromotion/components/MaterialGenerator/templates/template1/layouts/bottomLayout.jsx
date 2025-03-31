export function renderBottomLayout({ processedStyle, channelId, data }) {
  return (
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
              活动地址:阿拉呱呱吾悦广场后占悦金街S91051-1053号
            </div>
          )}

          <div data-id={channelId} style={processedStyle.materialScanText4}>
            本次活动最终解释权归活动方所有
          </div>
        </div>
      </div>
    </div>
  )
}

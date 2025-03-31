export const renderTopLayout = ({ channelId, processedStyle, data }) => {
  return (
    <div className="template2-top">
      {/** 上方装饰条 */}
      {processedStyle.topMaterialDecorationBar && (
        <img
          data-id={channelId}
          style={processedStyle.topMaterialDecorationBar}
          src={processedStyle.topMaterialDecorationBar.content}
        />
      )}

      <div style={processedStyle.topContainer1}>
        <div style={processedStyle.logoContainer}>
          <img
            data-id={channelId}
            style={processedStyle.materialLogoLeft}
            src={processedStyle.materialLogoLeft.content}
          />
          <img
            data-id={channelId}
            style={processedStyle.materialLongDivide}
            src={processedStyle.materialLongDivide.content}
          />

          {/** 右侧logo文字 */}
          <div data-id={channelId} style={processedStyle.materialLogoText}>
            {`{${data.year}}`} STORED VALUE ACTIVITY
          </div>
        </div>

        {/** 标题 */}
        <div data-id={channelId} style={processedStyle.materialTitle}>
          {data.title}
        </div>
        <div
          style={{
            textAlign: 'left',
          }}
        >
          {/** 时间标签 */}
          <div data-id={channelId} style={processedStyle.materialTimeLabel}>
            ACTIVITY TIME {'>>>'}
          </div>

          {/** 时间 */}
          <div data-id={channelId} style={processedStyle.materialTimeDate}>
            {data.startDate} - {data.endDate}
          </div>
        </div>
      </div>

      {/** 扫码 */}
      {processedStyle.qrCodeContainer && (
        <div style={processedStyle.qrCodeContainer}>
          {/** 扫码装饰 */}
          <img
            data-id={channelId}
            style={processedStyle.materialQrCodeDecoration}
            src={processedStyle.materialQrCodeDecoration.content}
            alt=""
          />
          {/** 扫码图片 */}
          <img
            data-id={channelId}
            style={processedStyle.materialQrCode}
            src={processedStyle.materialQrCode.content}
            alt=""
          />
        </div>
      )}
    </div>
  )
}

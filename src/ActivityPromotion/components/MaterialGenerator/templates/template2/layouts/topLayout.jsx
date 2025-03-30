export const renderTopLayout = ({ processedStyle, channelId }) => {
  return (
    <>
      <div className="material-top">
        <div className="material-logo">
          <div
            data-id={channelId}
            style={processedStyle.materialLogoLeft}
          ></div>
          <img
            data-id={channelId}
            src={processedStyle.materialDecorationBar.content}
            style={processedStyle.materialDecorationBar}
          />
        </div>

        <div data-id={channelId} style={processedStyle.materialTitle}>
          甜蜜开业季储值送现金
        </div>

        <div style={processedStyle.materialSubtitle}>
          <img
            data-id={channelId}
            src={processedStyle.materialWhiteDecorationBar.content}
            style={processedStyle.materialWhiteDecorationBar}
          />
          <div
            data-id={channelId}
            style={processedStyle.materialSubtitlePrefix}
          >
            {'{'}
          </div>
          <div data-id={channelId} style={processedStyle.materialSubtitleContent}>
            跟上这波车，拿下这福利
          </div>
          <div
            data-id={channelId}
            style={processedStyle.materialSubtitleSuffix}
          >
            {'}'}
          </div>
        </div>
      </div>
      <div className="time">
        <div className="time-container">
          <div data-id={channelId} style={processedStyle.materialTimeLabel}>
            活动时间：
          </div>
          <img
            data-id={channelId}
            className="material-time-decorator"
            src={processedStyle.materialTimeDecorator.content}
            alt="time-decorator"
            style={processedStyle.materialTimeDecorator}
          />

          <img
            data-id={channelId}
            src={processedStyle.materialShortDivide.content}
            alt="short-divide"
            style={processedStyle.materialShortDivide}
          />

          <div data-id={channelId} style={processedStyle.materialTimeYear}>
            2025
          </div>

          <img
            data-id={channelId}
            src={processedStyle.materialLongDivide.content}
            style={processedStyle.materialLongDivide}
          />
          <img
            data-id={channelId}
            src={processedStyle.materialYearDecorator.content}
            style={processedStyle.materialYearDecorator}
          />
        </div>
        <div data-id={channelId} style={processedStyle.materialTimeDate}>
          TIME &gt; 07/21-07/29
        </div>
      </div>
    </>
  )
}

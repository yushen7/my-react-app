import { processCommonStyle } from '../../../utils'

export const renderTopLayout = ({ processedStyle, channelId }) => {
  return (
    <>
      <div className="material-top">
        <div className="material-logo">
          <div className="material-logo-left" data-id="materialLogoLeft"></div>
          <img
            data-id={channelId}
            src={processedStyle.materialDecorationBar.content}
            alt="decoration-bar"
            className="decoration-bar"
            style={processedStyle.materialDecorationBar}
          />
        </div>

        <div
          className="title"
          data-id="materialTitle"
          style={processedStyle.materialTitle}
        >
          甜蜜开业季储值送现金
        </div>

        <div className="material-subtitle">
          <img
            data-id={channelId}
            src={processedStyle.materialWhiteDecorationBar.content}
            alt="decoration-bar"
            className="white-decoration-bar"
            style={processedStyle.materialWhiteDecorationBar}
          />
          <div
            className="subtitle"
            data-id="materialSubtitle"
            style={processedStyle.materialSubtitle}
          >
            跟上这波车，拿下这福利
          </div>
        </div>
      </div>
      <div className="time">
        <div className="time-container">
          <div
            data-id="materialTimeLabel"
            className="time-label"
            style={processedStyle.materialTimeLabel}
          >
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
            className="material-short-divide"
            src={processedStyle.materialShortDivide.content}
            alt="short-divide"
            style={processedStyle.materialShortDivide}
          />

          <div
            data-id="materialTimeYear"
            className="time-year"
            style={processedStyle.materialTimeYear}
          >
            2025
          </div>

          <img
            data-id={channelId}
            className="material-long-divide"
            src={processedStyle.materialLongDivide.content}
            alt="long-divide"
            style={processedStyle.materialLongDivide}
          />
          <img
            data-id={channelId}
            className="material-year-decorator"
            src={processedStyle.materialYearDecorator.content}
            alt="year-decorator"
            style={processedStyle.materialYearDecorator}
          />
        </div>
        <div
          className="time-date"
          data-id="materialTimeDate"
          style={processedStyle.materialTimeDate}
        >
          TIME &gt; 07/21-07/29
        </div>
      </div>
    </>
  )
}

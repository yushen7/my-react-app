export const renderTopLayout = ({ processedStyle, channelId, data }) => {
  return (
    <>
      <div className="material-top">
        <div className="material-logo">
          {/* <div
            data-id={channelId}
            style={processedStyle.materialLogoLeft}
          ></div> */}
          <img
            data-id={channelId}
            src={processedStyle.materialDecorationBar.content}
            style={processedStyle.materialDecorationBar}
          />
        </div>

        <div style={processedStyle.materialTitleContainer}>
          <div
            data-id={channelId}
            style={{ textAlign: 'left', ...processedStyle.materialTitle }}
          >
            {data.title}
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
            <div
              data-align="center"
              data-id={channelId}
              style={processedStyle.materialSubtitleContent}
            >
              跟上这波车，拿下这福利！
            </div>
            <div
              data-id={channelId}
              style={processedStyle.materialSubtitleSuffix}
            >
              {'}'}
            </div>
          </div>
          <div style={processedStyle.materialTime}>
            <div className="time-container">
              <div
                style={{
                  position: 'relative',
                }}
              >
                <div
                  data-id={channelId}
                  style={processedStyle.materialTimeLabel}
                >
                  活动时间：
                </div>
                <img
                  data-id={channelId}
                  src={processedStyle.materialTimeDecorator.content}
                  alt="time-decorator"
                  style={processedStyle.materialTimeDecorator}
                />
              </div>
              <img
                data-id={channelId}
                src={processedStyle.materialShortDivide.content}
                alt="short-divide"
                style={processedStyle.materialShortDivide}
              />
              <div
                style={{
                  position: 'relative',
                }}
              >
                <div
                  data-id={channelId}
                  style={processedStyle.materialTimeYear}
                >
                  {data.year}
                </div>
                <img
                  data-id={channelId}
                  src={processedStyle.materialYearDecorator.content}
                  style={processedStyle.materialYearDecorator}
                />
              </div>

              <img
                data-id={channelId}
                src={processedStyle.materialLongDivide.content}
                style={processedStyle.materialLongDivide}
              />
            </div>
            <div data-id={channelId} style={processedStyle.materialTimeDate}>
              TIME{' '}
              <div
                style={{
                  display: 'inline-block',
                  margin: '0 2.2%',
                }}
              >
                {' '}
                &gt;{' '}
              </div>
              {data.monthDate}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

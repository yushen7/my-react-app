export const renderTopLayout = ({ processedStyle, channelId, data }) => {
  return (
    <div
      className="template3-top"
      style={{ color: '#20201A', ...processedStyle.container1 }}
    >
      {/** 标题 */}
      <div
        data-align={
          processedStyle.materialTitle.textAlign === 'center'
            ? 'center'
            : 'left'
        }
        data-id={channelId}
        style={processedStyle.materialTitle}
      >
        {data.title}
      </div>

      <div
        data-align={
          processedStyle.materialTimeDate?.textAlign === 'center'
            ? 'center'
            : 'left'
        }
        style={processedStyle.materialTimeDate}
      >
        {/** 时间 */}
        <div data-id={channelId} style={processedStyle.materialTimeDateStart}>
          {data.startDate}
        </div>
        <img
          data-id={channelId}
          style={processedStyle.materialTimeDateSuffix}
          src={processedStyle.materialTimeDateSuffix.content}
        />
        <div data-id={channelId} style={processedStyle.materialTimeDateEnd}>
          {data.endDate}
        </div>
        <img
          data-id={channelId}
          style={processedStyle.materialTimeDateDownload}
          src={processedStyle.materialTimeDateDownload.content}
        />
      </div>
    </div>
  )
}

export const renderTopLayout = processedStyle => {
  return (
    <div className="template3-top" style={processedStyle.container1}>
      {/** 标题 */}
      <div data-id="materialTitle" style={processedStyle.materialTitle}>
        {processedStyle.materialTitle.content}
      </div>

      <div
        style={{
          textAlign: 'center',
        }}
      >
        {/** 时间 */}
        <div
          data-id="materialTimeDateStart"
          style={processedStyle.materialTimeDateStart}
        >
          {processedStyle.materialTimeDateStart.content}
        </div>
        <img
          data-id="materialTimeDateSuffix"
          style={processedStyle.materialTimeDateSuffix}
          src={processedStyle.materialTimeDateSuffix.content}
        />
        <div
          data-id="materialTimeDateEnd"
          style={processedStyle.materialTimeDateEnd}
        >
          {processedStyle.materialTimeDateEnd.content}
        </div>
        <img
          data-id="materialTimeDateDownload"
          style={processedStyle.materialTimeDateDownload}
          src={processedStyle.materialTimeDateDownload.content}
        />
      </div>
    </div>
  )
}

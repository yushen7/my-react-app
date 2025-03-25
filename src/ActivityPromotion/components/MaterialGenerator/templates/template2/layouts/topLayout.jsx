import { processCommonStyle } from '../../../utils'

export const TopLayout = {
  // 物料标题
  materialTitle: {
    type: 'text',
    marginTop: '500px',
    fontSize: '900px',
    fontWeight: '900px',
    lineHeight: '900px',
    textAlign: 'center',
  },
  // 物料副标题 跟上这波车，拿下这福利!
  materialSubtitle: {
    type: 'text',
    marginTop: '400px',
    fontSize: '400px',
    lineHeight: '400px',
    textAlign: 'center',
  },

  materialWhiteDecorationBar: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
  },
  // 活动时间
  materialTimeLabel: {
    type: 'text',
    fontSize: '300px',
    fontWeight: '900px',
    lineHeight: '300px',
    marginLeft: '300px'
  },
  // 年份
  materialTimeYear: {
    type: 'text',
    fontWeight: '900px',
    lineHeight: '300px',
    fontSize: '300px',
  },
  //具体时间 "TIME > MM/DD-MM/DD"
  materialTimeDate: {
    type: 'text',
    fontSize: '700px',
    fontWeight: '900px',
    lineHeight: '700px',
    marginLeft: '300px'
  },
  // 活动时间装饰条
  materialTimeDecorator: {
    type: 'image',
    width: '1500px',
    position: 'absolute',
    top: '170px',
    left: '300px'
  },
  // 年份装饰条
  materialYearDecorator: {
    type: 'image',
    width: '738px',
    position: 'absolute',
    top: '170px',
    left: '2950px', 
  },
  // 活动时间分割-短
  materialShortDivide: {
    type: 'image',
    width: '1158px',
    height: '20px',
  },
  // 活动时间日期
  materialLongDivide: {
    type: 'image',
    width: '5262px',
    height: '20px',
  },
  materialDecorationBar: {
    type: 'image',
    width: '69.51%',
  },
}

const topLayout = processCommonStyle(TopLayout)

export const renderTopLayout = () => {
  return (
    <>
      <div className="material-top">
        <div className="material-logo">
          <div className="material-logo-left" data-id="materialLogoLeft"></div>
          <img
            data-id="materialDecorationBar"
            src="https://img01.yzcdn.cn/upload_files/2025/03/17/FqMll1F7AE8flktEMVRACUHA0Tjv.png"
            alt="decoration-bar"
            className="decoration-bar"
            style={topLayout.materialDecorationBar}
          />
        </div>

        <div
          className="title"
          data-id="materialTitle"
          style={topLayout.materialTitle}
        >
          甜蜜开业季储值送现金
        </div>

        <div className="material-subtitle">
          <img
            data-id="materialWhiteDecorationBar"
            src="https://img01.yzcdn.cn/upload_files/2025/03/17/FhOYStbZOvldoAkCRIeeGUnF26Wt.png"
            alt="decoration-bar"
            className="white-decoration-bar"
            style={topLayout.materialWhiteDecorationBar}
          />
          <div
            className="subtitle"
            data-id="materialSubtitle"
            style={topLayout.materialSubtitle}
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
            style={topLayout.materialTimeLabel}
          >
            活动时间：
          </div>
          <img
            data-id="materialTimeDecorator"
            className="material-time-decorator"
            src="https://img01.yzcdn.cn/upload_files/2025/03/17/FpCBKbxEfv04vXfGu_VbDiWgl4DS.png"
            alt="time-decorator"
            style={topLayout.materialTimeDecorator}
          />

          <img
            data-id="materialShortDivide"
            className="material-short-divide"
            src="https://img01.yzcdn.cn/upload_files/2025/03/17/Fo7UE5unpOU03PiWj79At5_mtA90.png"
            alt="short-divide"
            style={topLayout.materialShortDivide}
          />

          <div
            data-id="materialTimeYear"
            className="time-year"
            style={topLayout.materialTimeYear}
          >
            2025
          </div>

          <img
            data-id="materialLongDivide"
            className="material-long-divide"
            src="https://img01.yzcdn.cn/upload_files/2025/03/17/Fsfu6CTksfJl5rgqd9r_k7h4--7w.png"
            alt="long-divide"
            style={topLayout.materialLongDivide}
          />
          <img
            data-id="materialYearDecorator"
            className="material-year-decorator"
            src="https://img01.yzcdn.cn/upload_files/2025/03/17/FnPh2CfoKHQjQ_qWPMP9okb1jmPR.png"
            alt="year-decorator"
            style={topLayout.materialYearDecorator}
          />
        </div>
        <div
          className="time-date"
          data-id="materialTimeDate"
          style={topLayout.materialTimeDate}
        >
          TIME &gt; 07/21-07/29
        </div>
      </div>
    </>
  )
}

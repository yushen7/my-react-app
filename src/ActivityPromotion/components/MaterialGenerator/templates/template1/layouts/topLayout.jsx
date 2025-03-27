import { processCommonStyle } from '../../../utils'

const ContainerLayout = {
  // 最外层的 container
  container1: {
    margin: '200px 200px 0 200px',
    width: '95.76%',
  },
  logoContainer: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  qrCodeContainer: {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    width: '95.76%',
    height: '4370px',
    marginTop: '365px'
  },
}

export const TopLayout = {
  // 顶部装饰条
  materialDecorationBar: {
    type: 'image',
    width: '100%',
    content:
      'https://img01.yzcdn.cn/upload_files/2025/03/19/FpyjH9o6oOSbZDT_IgrQhO7Q6rEs.png',
  },

  // 左边logo图案
  materialLogoLeft: {
    type: 'image',
    width: '14.5%',
    content:
      'https://img01.yzcdn.cn/upload_files/2025/03/23/FvivJF0Dvju06FBbhe2PRe_n3E99.png',
  },
  // 物料标题：甜蜜开业季储值送现金
  materialTitle: {
    type: 'text',
    marginTop: '400px',
    fontSize: '900px',
    fontWeight: '900px',
    lineHeight: '900px',
    textAlign: 'center',
    content: '甜蜜开业季储值送现金',
  },

  // logo分割线
  materialLongDivide: {
    type: 'image',
    width: '50.71%',
    height: '20px',
    content:
      'https://img01.yzcdn.cn/upload_files/2025/03/17/Fsfu6CTksfJl5rgqd9r_k7h4--7w.png',
  },

  // 右侧 logo 文字 {2025} Stored value activity
  materialLogoText: {
    type: 'text',
    fontSize: '190px',
    fontWeight: '400',
    lineHeight: '190px',
    textAlign: 'center',
    content: '{2025} Stored value activity',
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
    lineHeight: '300px',
    marginTop: '400px',
    content: 'ACTIVITY TIME >>>',
  },
  //具体时间 "2025.11.11 - 11.21"
  materialTimeDate: {
    type: 'text',
    fontSize: '700px',
    fontWeight: '900px',
    lineHeight: '700px',
    marginTop: '300px',
    content: '2025.11.11 - 11.21',
  },
  materialQrCode: {
    type: 'image',
    width: '3000px',
    position: 'absolute',
    left: 'calc(50% - 1500px)',
    top: 'calc(50% - 1300px)',
    content:
      'https://img01.yzcdn.cn/upload_files/2025/03/23/Fo4F1M1ez5njdBxUxEzQg8EBR5Oy.png',
  },
  materialQrCodeDecoration: {
    type: 'image',
    width: '100%',
    position: 'absolute',
    top: '0',
    left: '0',
    content:
      'https://img01.yzcdn.cn/upload_files/2025/03/23/FrT3I_IJkfiiioxXNFZSOb0xMRuE.png',
  },
}

const topLayout = processCommonStyle(TopLayout)

export const renderTopLayout = () => {
  return (
    <div className="template2-top" style={ContainerLayout.container1}>
      {/** 上方装饰条 */}
      <img
        data-id="materialDecorationBar"
        style={topLayout.materialDecorationBar}
        src={topLayout.materialDecorationBar.content}
      />
      <div style={ContainerLayout.logoContainer}>
        <img
          data-id="materialLogoLeft"
          style={topLayout.materialLogoLeft}
          src={topLayout.materialLogoLeft.content}
        />
        <img
          data-id="materialLongDivide"
          style={topLayout.materialLongDivide}
          src={topLayout.materialLongDivide.content}
        />

        {/** 右侧logo文字 */}
        <div data-id="materialLogoText" style={topLayout.materialLogoText}>
          {topLayout.materialLogoText.content}
        </div>
      </div>

      {/** 标题 */}
      <div data-id="materialTitle" style={topLayout.materialTitle}>
        {topLayout.materialTitle.content}
      </div>

      {/** 时间标签 */}
      <div data-id="materialTimeLabel" style={topLayout.materialTimeLabel}>
        {topLayout.materialTimeLabel.content}
      </div>

      {/** 时间 */}
      <div data-id="materialTimeDate" style={topLayout.materialTimeDate}>
        {topLayout.materialTimeDate.content}
      </div>

      {/** 扫码 */}
      <div style={ContainerLayout.qrCodeContainer}>
        {/** 扫码装饰 */}
        <img
          data-id="materialQrCodeDecoration"
          style={topLayout.materialQrCodeDecoration}
          src={topLayout.materialQrCodeDecoration.content}
          alt=""
        />
        {/** 扫码图片 */}
        <img
          data-id="materialQrCode"
          style={topLayout.materialQrCode}
          src={topLayout.materialQrCode.content}
          alt=""
        />
      </div>
    </div>
  )
}

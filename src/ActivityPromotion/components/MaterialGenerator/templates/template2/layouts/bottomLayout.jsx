import { processCommonStyle } from '../../../utils'

export const BottomLayout = {
  // 扫码参与
  materialScan: {
    type: 'text',
    marginTop: '600px',
    fontSize: '400px',
    lineHeight: '400px',
    textAlign: 'center',
  },
  // 使用小程序即可充值
  materialQrCode: {
    type: 'image',
    width: '80px',
    height: '80px',
    position: 'absolute',
    top: '660px',
    left: '650px',
  },
  // 扫码参与
  materialScanText: {
    type: 'text',
    fontWeight: '500',
    fontSize: '400px',
    lineHeight: '400px',
    color: '#fff',
  },
  // 使用小程序即可充值
  materialQrCodeText: {
    type: 'text',
    fontWeight: '500',
    fontSize: '400px',
    lineHeight: '400px',
    color: '#fff',
    marginTop: '100px',
  },
  // *本次活动最终解释权归活动方所有
  materialTips: {
    type: 'text',
    fontWeight: '400',
    fontSize: '200px',
    lineHeight: '200px',
    color: '#fff',
    marginTop: '100px',
  },
  // qrcode
  materialQrCode: {
    type: 'image',
    position: 'absolute',
    top: '0',
    left: '0',
  },
  // 底部装饰
  materialBottomDecoration: {
    type: 'image',
    width: '47.3%',
    marginTop: '716px',
  },
  // 底部装饰条
  materialBottomDecorationBar: {
    type: 'image',
    width: '100%',
    marginTop: '200px',
  },
  materialQrcode: {
    type: 'image',
    width: '80px',
    height: '80px',
    position: 'absolute',
    top: '660px',
    left: '650px',
  },
  materialQrDecoration: {
    type: 'image',
  },
  materialBlackBackground: {
    type: 'image',
    position: 'absolute',
    bottom: '0',
    left: '0',
    width: '100%',
  },
}

const bottomLayout = processCommonStyle(BottomLayout)

export function renderBottomLayout() {
  return (
    <div
      className="materials-bottom"
      style={{
        height: '4000px',
        marginTop: '400px',
      }}
    >
      <div
        style={{
          marginLeft: '300px',
          height: '3000px',
          position: 'relative',
        }}
      >
        <img
          data-id="materialBottomDecoration"
          style={bottomLayout.materialBottomDecoration}
          className="bottom-decoration"
          src="https://img01.yzcdn.cn/upload_files/2025/03/19/FsemU_caSE_YDxn9xCC6cLhHlt5u.png"
        />

        <img
          data-id="materialBlackBackground"
          style={bottomLayout.materialBlackBackground}
          className="bottom-black-background"
          src="https://img01.yzcdn.cn/upload_files/2025/03/19/FodwYMzYFLgPeQDFPmnxtrfjxQSw.png"
        />

        <div
          className="qr-code"
          style={{
            position: 'absolute',
            right: '0',
            top: '0',
            zIndex: 2,
          }}
        >
          <img
            data-id="materialQrDecoration"
            style={bottomLayout.materialQrDecoration}
            className="qr-decoration"
            src="https://img01.yzcdn.cn/upload_files/2025/03/19/FvwjDuPmalUvBAWGa-VpWk-Flysj.png"
            alt=""
          />
          {/* <img
            data-id="materialQrCode"
            src="./images/qrcode.png"
            alt="qr-code-img"
            className="qr-code-img"
            style={bottomLayout.materialQrCode}
          /> */}
        </div>
        <div
          className="material-scan"
          style={{
            marginTop: '400px',
            marginLeft: '200px',
          }}
        >
          <div
            data-id="materialScanText"
            style={bottomLayout.materialScanText}
            className="scan-text"
          >
            扫码参与
          </div>
          <div
            data-id="materialQrCodeText"
            style={bottomLayout.materialQrCodeText}
            className="scan-text"
          >
            使用小程序即可充值
          </div>
          <div
            data-id="materialTips"
            style={bottomLayout.materialTips}
            className="tips"
          >
            *本次活动最终解释权归活动方所有
          </div>
        </div>
      </div>

      <img
        data-id="materialBottomDecorationBar"
        src="https://img01.yzcdn.cn/upload_files/2025/03/19/FpyjH9o6oOSbZDT_IgrQhO7Q6rEs.png"
        alt="bottom-decoration-bar"
        className="bottom-decoration-bar"
        style={bottomLayout.materialBottomDecorationBar}
      />
    </div>
  )
}

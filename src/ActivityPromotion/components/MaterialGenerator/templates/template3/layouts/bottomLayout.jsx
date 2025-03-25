export function renderBottomLayout(bottomLayout) {
  return (
    <div className="materials-bottom" style={bottomLayout.bottomContainer}>
      <img
        data-id="materialQrcode"
        style={bottomLayout.materialQrcode}
        src={bottomLayout.materialQrcode.content}
        alt=""
      />
      <div style={bottomLayout.scanTextContainer}>
        <div data-id="materialScanText1" style={bottomLayout.materialScanText1}>
          扫码参与
        </div>
        <div data-id="materialScanText2" style={bottomLayout.materialScanText2}>
          使用小程序即可充值
        </div>
        <div data-id="materialScanText3" style={bottomLayout.materialScanText3}>
          *本次活动最终解释权归活动方所有
        </div>
      </div>
    </div>
  )
}

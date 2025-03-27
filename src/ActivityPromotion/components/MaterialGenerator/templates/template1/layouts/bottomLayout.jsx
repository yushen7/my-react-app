import { processCommonStyle } from '../../../utils'

export const BottomLayout = {
  materialScanText1: {
    type: 'text',
    content: '扫码参与',
    color: '#fff',
    fontSize: '400px',
    lineHeight: '400px',
    marginTop: '2.2%',
  },
  materialScanText2: {
    type: 'text',
    content: '使用小程序即可充值',
    color: '#fff',
    fontSize: '400px',
    lineHeight: '400px',
    marginTop: '1.5%',
  },
  materialScanText3: {
    type: 'text',
    content: '活动地址:阿拉呱呱吾悦广场后占悦金街S91051-1053号',
    color: '#fff',
    fontSize: '300px',
    lineHeight: '300px',
    marginTop: '1.5%',
  },
  materialScanText4: {
    type: 'text',
    content: '本次活动最终解释权归活动方所有',
    color: '#fff',
    fontSize: '200px',
    lineHeight: '200px',
    marginTop: '1.5%',
  },
  materialScanTextBackground: {
    type: 'image',
    content:
      'https://img01.yzcdn.cn/upload_files/2025/03/23/Flag0DVAWcwGJbRkvKLQHrI3oYVW.png',
    position: 'absolute',
    width: '100%',
  },
  materialDecorationBar: {
    type: 'image',
    width: '100%',
    bottom: '0',
    left: '0',
    position: 'absolute',
    content:
      'https://img01.yzcdn.cn/upload_files/2025/03/19/FpyjH9o6oOSbZDT_IgrQhO7Q6rEs.png',
  },
}

const ContainerLayout = {
  container1: {
    position: 'relative',
    marginLeft: '2.2%',
    marginRight: '2.2%',
  },
  container2: {
    position: 'relative',
    marginLeft: '2.2%',
    paddingTop: '0.5%',
  },
  bottomContainer: {
    height: '16.1%',
  },
}

const bottomLayout = processCommonStyle(BottomLayout)

export function renderBottomLayout() {
  return (
    <div className="materials-bottom" style={ContainerLayout.bottomContainer}>
      <div style={ContainerLayout.container1}>
        <img
          data-id="materialScanTextBackground"
          style={bottomLayout.materialScanTextBackground}
          src={bottomLayout.materialScanTextBackground.content}
        />

        <div style={ContainerLayout.container2}>
          <div
            data-id="materialScanText1"
            style={bottomLayout.materialScanText1}
          >
            {bottomLayout.materialScanText1.content}
          </div>
          <div
            data-id="materialScanText2"
            style={bottomLayout.materialScanText2}
          >
            {bottomLayout.materialScanText2.content}
          </div>
          <div
            data-id="materialScanText3"
            style={bottomLayout.materialScanText3}
          >
            {bottomLayout.materialScanText3.content}
          </div>
          <div
            data-id="materialScanText4"
            style={bottomLayout.materialScanText4}
          >
            {bottomLayout.materialScanText4.content}
          </div>
        </div>
      </div>

      <img
        data-id="materialDecorationBar"
        style={bottomLayout.materialDecorationBar}
        src={bottomLayout.materialDecorationBar.content}
      />
    </div>
  )
}

export const BottomLayout = {
  materialDecorationBar: {
    type: 'image',
    width: '100%',
    bottom: '0',
    left: '0',
    content:
      'https://img01.yzcdn.cn/upload_files/2025/03/19/FpyjH9o6oOSbZDT_IgrQhO7Q6rEs.png',
  },
}

export function renderBottomLayout() {
  return (
    <div>
      <div className="materials-bottom">
        <img
          data-id="materialDecorationBar"
          style={BottomLayout.materialDecorationBar}
          src={BottomLayout.materialDecorationBar.content}
        />
      </div>
    </div>
  )
}

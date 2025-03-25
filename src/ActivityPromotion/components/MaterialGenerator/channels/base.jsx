export const BaseRect = {
  width: 9450,
  height: 21260,
}

export const DisplayRect = {
  width: BaseRect.width / 10,
  height: BaseRect.height / 10,
}

export const ZoomRatio = {
  // 放大
  zoomOut: BaseRect.width / DisplayRect.width,
  // 缩小
  zoomIn: DisplayRect.width / BaseRect.width,
}

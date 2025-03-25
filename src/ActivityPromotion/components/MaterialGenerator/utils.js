import { BaseRect } from './channels/base'

const BaseOffset = {
  left: 300,
}

const TopElements = {
  decorationBar: {
    widthPercent: 0.695132,
  },
  whiteBar: {
    widthPercent: 0.938723,
  },
}

// 这里我们已经在数据定义时放大了尺寸，所以在处理时需要反向缩小回来以便正确显示
export const processScale = (data = {}, displayMultiple = 1) => {
  const afterScale = {
    ...data,
    materialGenerator: {
      ...data.materialGenerator,
      // width: withPx(data.materialGenerator.width, ratio.widthRatio),
      // height: withPx(data.materialGenerator.height, ratio.heightRatio),
      transform: `scale(${displayMultiple})`,
      'transform-origin': 'top left',
    },
  }
  return processCommonStyle(afterScale)
}

export const processCommonStyle = (data = {}) => {
  return Object.keys(data)
    .map(key => {
      return {
        id: key,
        zIndex: data[key].type === 'image' ? 1 : 2,
        fontFamily: 'HarmonyOS Sans SC',
        position: 'relative',
        ...data[key],
        // width: withPx(data[key].width, widthRatio),
        // height: withPx(data[key].height, heightRatio),
        // marginTop: withPx(data[key].marginTop, heightRatio),
        // marginLeft: withPx(data[key].marginLeft, widthRatio),
        // top: withPx(data[key].top, heightRatio),
        // left: withPx(data[key].left, widthRatio),
        // fontSize: withPx(data[key].fontSize, heightRatio),
        // lineHeight: withPx(data[key].lineHeight, heightRatio),
      }
    })
    .reduce((acc, curr) => {
      acc[curr.id] = curr
      return acc
    }, {})
}

function getBoundingClientRectWithRatio(rect, ratio) {
  return {
    top: rect.top * ratio,
    left: rect.left * ratio,
    width: rect.width * ratio,
    height: rect.height * ratio,
  }
}

function withPx(value, ratio = 1) {
  const omitPx = String(value).replace('px', '')

  return Number(omitPx) * ratio.toFixed(4) + 'px'
}

/**
 * 计算所有带ID的元素相对于material-generator的偏移量
 * 并返回可用于Fabric.js的格式
 */
export function calculateElementOffsets(windowProxy, { ratio, keepSize }) {
  console.log(windowProxy)
  // 获取父容器元素
  const container = document.getElementById('materialGenerator')
  if (!container) {
    console.error('找不到ID为materialGenerator的元素')
    return []
  }

  const rectRatio = keepSize ? 1 : ratio

  // 获取父容器的位置和尺寸信息
  const containerRect = getBoundingClientRectWithRatio(
    container.getBoundingClientRect(),
    rectRatio
  )

  // 获取所有带ID的元素（ID以material-开头）
  const elements = document.querySelectorAll('[data-id^="material"]')

  // 存储结果的数组
  const fabricElements = []

  // 遍历每个元素，计算相对偏移量
  elements.forEach(element => {
    const dataId = element.getAttribute('data-id')
    // 跳过父容器自身
    if (element.id === 'materialGenerator') return

    // 获取元素的位置
    const elementRect = getBoundingClientRectWithRatio(
      element.getBoundingClientRect(),
      rectRatio
    )

    // 计算相对偏移量
    const offsetTop = elementRect.top - containerRect.top
    const offsetLeft = elementRect.left - containerRect.left

    // 获取元素的计算样式
    const computedStyle = windowProxy.getComputedStyle(element)

    // 根据元素类型创建不同的对象
    let fabricElement = {}

    const commonProps = {
      width: elementRect.width.toFixed(4),
      height: elementRect.height.toFixed(4),
      top: offsetTop.toFixed(4),
      left: offsetLeft.toFixed(4),
    }

    if (element.tagName === 'IMG') {
      // 图片类型
      fabricElement = {
        ...commonProps,
        type: 'image',
        content: element.src,
      }

      // 如果是背景图片，添加标记
      if (dataId === 'materialBackground') {
        fabricElement.isBaseMapImg = true
      }
    } else {
      const fontRatio = keepSize ? 1 / ratio : 1
      // 文本类型
      const text = element.textContent || ''
      fabricElement = {
        ...commonProps,
        type: 'text',
        text: text,
        fontSize: withPx(computedStyle.fontSize, fontRatio),
        lineHeight: withPx(computedStyle.lineHeight, fontRatio),
        fontWeight: computedStyle.fontWeight,
        color: computedStyle.color,
        textAlign: computedStyle.textAlign || 'left',
        fontFamily: computedStyle.fontFamily.replaceAll('"', '') || 'Arial',
      }
    }

    // 添加元素ID作为引用
    fabricElement.id = dataId

    // 将元素添加到结果数组
    fabricElements.push(fabricElement)
  })

  return fabricElements
}

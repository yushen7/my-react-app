// 这里我们已经在数据定义时放大了尺寸，所以在处理时需要反向缩小回来以便正确显示
export const processScale = (data = {}, displayMultiple = 1) => {
  const afterScale = {
    ...data,
    materialGenerator: {
      ...data.materialGenerator,
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

  return (Number(omitPx) * ratio).toFixed(2) + 'px'
}

/**
 * 计算所有带ID的元素相对于material-generator的偏移量
 * 并返回可用于Fabric.js的格式
 */
export function calculateElementOffsets(windowProxy, { ratio, className }) {
  // 获取父容器元素
  const container = document.querySelector(`.${className}`)
  if (!container) {
    console.error(`找不到类名为${className}的元素`)
    return []
  }

  const rectRatio = 1

  // 获取父容器的位置和尺寸信息
  const containerRect = getBoundingClientRectWithRatio(
    container.getBoundingClientRect(),
    rectRatio
  )

  // 获取所有带ID的元素（ID以material-开头）
  const elements = document.querySelectorAll(`[data-id^="${className}"]`)
  // 存储结果的数组
  const fabricElements = []

  // 遍历每个元素，计算相对偏移量
  elements.forEach(element => {
    const dataId = element.getAttribute('data-id')
    // 跳过父容器自身
    if (element.id === className) return

    // 获取元素的位置
    const elementRect = getBoundingClientRectWithRatio(
      element.getBoundingClientRect(),
      rectRatio
    )

    // 计算相对偏移量
    const offsetTop = elementRect.top - containerRect.top
    const offsetLeft = elementRect.left - containerRect.left

    let computedStyle

    computedStyle = windowProxy.getComputedStyle(element)

    // 根据元素类型创建不同的对象
    let fabricElement = {}

    const commonProps = {
      width: elementRect.width.toFixed(2),
      height: elementRect.height.toFixed(2),
      top: offsetTop.toFixed(2),
      left: offsetLeft.toFixed(2),
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
      // ratio 小于 1，说明是缩小的，需要乘以 ratio
      const fontRatio = ratio
      // 文本类型
      const text = element.textContent || ''
      fabricElement = {
        ...commonProps,
        // 为什么要加上10....
        width: Number(commonProps.width) + 10,
        type: 'text',
        text: text,
        fontSize: withPx(computedStyle.fontSize, fontRatio),
        lineHeight: withPx(computedStyle.lineHeight, fontRatio),
        fontWeight: computedStyle.fontWeight,
        color: computedStyle.color,
        textAlign: computedStyle.textAlign || 'left',
      }
    }

    // 将元素添加到结果数组
    fabricElements.push(fabricElement)
  })

  return fabricElements
}

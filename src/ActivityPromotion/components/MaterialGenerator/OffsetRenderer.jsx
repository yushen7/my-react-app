import React, { forwardRef, useImperativeHandle, useRef } from 'react'

const ContainerSelector = '.offset-renderer-container'

/**
 * 渲染由 calculateElementOffsets 函数返回的数据
 * 使用绝对定位将元素按照偏移量渲染出来
 *
 * @param {Object} props 组件属性
 * @param {Array} props.elements calculateElementOffsets 函数返回的元素数据
 * @param {Object} props.containerStyle 容器样式
 * @returns {JSX.Element} 渲染的组件
 */
const OffsetRenderer = ({ elements = [], containerStyle = {} }) => {
  if (!Array.isArray(elements) || elements.length === 0) {
    return <div>没有元素数据</div>
  }

  const containerRef = useRef(null)

  // 查找背景元素作为容器尺寸参考
  const backgroundElement =
    elements.find(item => item.isBaseMapImg) || elements[0]

  return (
    <div
      ref={containerRef}
      className={ContainerSelector.replace('.', '')}
      style={{
        position: 'relative',
        width: backgroundElement.width,
        height: backgroundElement.height,
        ...containerStyle,
      }}
    >
      {elements.map((item, index) => {
        const key = item.id || `element-${index}`

        // 所有元素的通用样式
        const commonStyles = {
          top: item.top,
          left: item.left,
        }

        // 根据元素类型渲染不同的元素
        if (item.type === 'image') {
          return (
            <img
              className="common-i"
              key={key}
              data-id={item.id}
              src={item.content}
              style={commonStyles}
              width={item.width}
              height={item.height}
            />
          )
        } else if (item.type === 'text') {
          return (
            <div
              key={key}
              data-id={item.id}
              className="common-t"
              style={{
                ...commonStyles,
                width: item.width,
                height: item.height,
                fontSize: item.fontSize,
                fontWeight: item.fontWeight,
                lineHeight: item.lineHeight,
                color: item.color,
                textAlign: item.textAlign,
                // fontFamily: item.fontFamily,
              }}
            >
              {item.text}
            </div>
          )
        }

        return null
      })}
    </div>
  )
}

export default OffsetRenderer

import { useEffect, useRef } from 'react'
import { getPoster } from '../../api'
import { MaterialChannel } from '../../../../constant'
import { calculateElementOffsets, processScale } from '../../utils'
import channels from './channels'
import { renderBottomLayout } from './layouts/bottomLayout'
import { renderProductList } from './layouts/productLayout'
import { renderTopLayout } from './layouts/topLayout'
import { Notify } from 'zent'
import store from '../../../../../../../../common/store'
import qrCode from 'qrcode';

function fabricElements2HTML(fabricElements) {
  let htmlString =
    '<style>div,img{position:absolute;}div{z-index:2; font-family: "HarmonyOS Sans SC";}img{z-index:1;} </style> <div class="material-container" style="position: relative;">'

  fabricElements.forEach(element => {
    const commonStyles = `
      top: ${element.top}px;
      left: ${element.left}px;
      width: ${element.width}px;
      height: ${element.height}px;
    `

    if (element.type === 'text') {
      const textStyles = `
        ${commonStyles}
        font-size: ${element.fontSize};
        font-weight: ${element.fontWeight};
        line-height: ${element.lineHeight};
        color: ${element.color};
        text-align: ${element.textAlign};
      `

      htmlString += `<div style="${textStyles}">${element.text}</div>`
    } else if (element.type === 'image') {
      htmlString += `<img src="${element.content}" style="${commonStyles}" />`
    }
  })

  htmlString += '</div>'
  return htmlString
}

function renderChannel({ channelId, processedStyle, data }) {
  const { rechargeList } = data
  const bgImg = (
    <img
      data-id={channelId}
      src={processedStyle.materialBackground.previewContent}
      alt="background"
      style={processedStyle.materialBackground}
      className="background"
    />
  )
  switch (channelId) {
    case MaterialChannel.ylb:
      return (
        <>
          {bgImg}
          {renderTopLayout({ processedStyle, channelId, data })}
          {renderProductList({
            processedStyle,
            channelId,
            productList: rechargeList,
          })}
          {renderBottomLayout({ processedStyle, channelId })}
        </>
      )
    case MaterialChannel.windowPromotion:
      return (
        <>
          {bgImg}
          {renderTopLayout({ processedStyle, channelId, data })}
          {renderProductList({
            processedStyle,
            channelId,
            productList: rechargeList,
          })}
        </>
      )
    case MaterialChannel.banner:
      return (
        <>
          {bgImg}
          {renderTopLayout({ processedStyle, channelId, data })}
        </>
      )
    case MaterialChannel.cashierCard:
      return (
        <>
          {bgImg}
          {renderTopLayout({ processedStyle, channelId, data })}
          {renderProductList({
            processedStyle,
            channelId,
            productList: rechargeList,
          })}
          {renderBottomLayout({ processedStyle, channelId })}
        </>
      )
    case MaterialChannel.friendCircle:
      return (
        <>
          {bgImg}
          {renderTopLayout({ processedStyle, channelId, data })}
          {renderProductList({
            processedStyle,
            channelId,
            productList: rechargeList,
          })}
          {renderBottomLayout({ processedStyle, channelId })}
        </>
      )
    default:
      return null
  }
}

export default function TemplateThree({
  onGenerate,
  data,
  channel: channelProps,
}) {
  const { windowProxy } = store.getStore()
  const timeout = useRef(null)
  const batchGetPosters = channel => {
    const calResult = calculateElementOffsets(windowProxy, {
      ratio: channel.posterRatio,
      keepSize: true,
      className: channel.id,
    })

    return getPoster({
      elements: JSON.stringify(calResult),
      width: channel.width * channel.posterRatio,
      height: channel.height * channel.posterRatio,
    })
      .then(res => {
        if (!res || !res.img) {
          return
        }
        onGenerate({
          id: channel.id,
          img: res.img,
        })
      })
      .catch(err => {
        Notify.error(err)
      })
  }

  const channel = channels.find(item => item.id === channelProps)

  useEffect(() => {
    clearTimeout(timeout.current)
    timeout.current = setTimeout(() => {
      batchGetPosters(channel)
    }, 5000)
    return () => {
      clearTimeout(timeout.current)
    }
  }, [channel])
  if (!channel) {
    return null
  }
  const processedStyle = processScale(
    channel.layouts,
    channel.posterRatio
    // 1
  )
  return (
    <div
      style={{
        transformOrigin: 'top left',
        opacity: 0,
        position: 'absolute',
      }}
    >
      <div
        key={channel.id}
        className={channel.id}
        style={processedStyle.materialGenerator}
      >
        {renderChannel({
          channelId: channel.id,
          processedStyle,
          data,
        })}
      </div>
    </div>
  )
}

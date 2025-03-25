import React, { useRef } from 'react'
import './style.scss'
import { processScale, calculateElementOffsets } from './utils.js'
// import { Button } from 'zent'
import {
  fetchShopPubImgToken,
  getPrepaidPromotionQrCode,
} from './api.js'
import { useState, useEffect } from 'react'
import { ZoomRatio } from './channels/base.jsx'
import TemplateThree from './templates/template3/index.jsx'

function fabricElements2HTML(fabricElements) {
  let htmlString =
    '<div class="material-container" style="position: relative;">'

  fabricElements.forEach(element => {
    const commonStyles = `
      position: absolute;
      top: ${element.top}px;
      left: ${element.left}px;
      width: ${element.width}px;
      height: ${element.height}px;
      z-index: ${element.zIndex};
    `

    if (element.type === 'text') {
      const textStyles = `
        ${commonStyles}
        font-size: ${element.fontSize};
        font-weight: ${element.fontWeight};
        line-height: ${element.lineHeight};
        color: ${element.color};
        text-align: ${element.textAlign};
        font-family: ${element.fontFamily};
      `

      htmlString += `<div data-id="${element.id}" style="${textStyles}">${element.text}</div>`
    } else if (element.type === 'image') {
      htmlString += `<img data-id="${element.id}" src="${element.content}" style="${commonStyles}" />`
    }
  })

  htmlString += '</div>'
  return htmlString
}

const MaterialGenerator = ({ store, onGenerate }) => {
  const { yz, windowProxy } = store
  const [token, setToken] = useState('')
  // const [offsetElements, setOffsetElements] = useState([])
  useEffect(() => {
    fetchShopPubImgToken(yz).then(res => {
      setToken(res.uptoken)
    })
    getPrepaidPromotionQrCode(yz).then(res => {
      console.log(res, 'qrcode')
    })

    setTimeout(() => {
      const calResult = calculateElementOffsets(windowProxy, {
        ratio: ZoomRatio.zoomOut,
        keepSize: true,
      })
      console.log(fabricElements2HTML(calResult))
      // setOffsetElements(calResult)
      // getPoster(yz, {
      //   elements: JSON.stringify(calResult),
      //   ...DisplayRect,
      // }).then(res => {
      //   console.log(res, 'resss')
      //   onGenerate([res.img])
      // })
    }, 2000)
  }, [])

  return (
    <>
      <div className="display-container">
        {/* <TemplateTwo /> */}
        <TemplateThree />
      </div>
    </>
  )
}

export default MaterialGenerator

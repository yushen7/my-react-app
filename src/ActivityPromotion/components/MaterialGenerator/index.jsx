import React, { useRef } from 'react'
import './style.scss'
import { getPrepaidPromotionQrCode } from './api.js'
import { useEffect } from 'react'
// import TemplateThree from './templates/template3/index.jsx'
// import TemplateTwo from './templates/template2/index.jsx'
import TemplateOne from './templates/template1/index.jsx'
import { ChannelTemplate } from '../../constant.jsx'
const MaterialGenerator = ({ onGenerate, data, channel, template }) => {
  return (
    <>
      <div
        // style={{ position: 'absolute', overflow: 'hidden' }}
        className="display-container"
      >
        {<TemplateOne onGenerate={onGenerate} data={data} channel={channel} />}
        {/* <TemplateTwo onGenerate={onGenerate} data={data} channel={channel} /> */}
        {/* {template === ChannelTemplate.template3 && (
          <TemplateThree
            onGenerate={onGenerate}
            data={data}
            channel={channel}
          />
        )} */}
      </div>
    </>
  )
}

export default MaterialGenerator

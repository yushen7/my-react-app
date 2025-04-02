import React, { useRef, useState } from 'react'
import './style.scss'
import TemplateThree from './templates/template3/index.jsx'
import TemplateTwo from './templates/template2/index.jsx'
import TemplateOne from './templates/template1/index.jsx'
import { ChannelTemplate } from '../../constant.jsx'
const MaterialGenerator = ({ data, channel, template }) => {
  const [show ,setShow] = useState(false)
  return (
    <>
      <div
        style={{ position: 'absolute', overflow: show ? 'visible' : 'hidden' }}
        className="display-container"
      >
        <div onClick={() => setShow(!show)}>Show</div>
        <TemplateOne data={data} channel={channel} />
        {template === ChannelTemplate.template1 && (
          <TemplateOne data={data} channel={channel} />
        )}
        {template === ChannelTemplate.template2 && (
          <TemplateTwo data={data} channel={channel} />
        )}
        {template === ChannelTemplate.template3 && (
          <TemplateThree data={data} channel={channel} />
        )}
      </div>
    </>
  )
}

export default MaterialGenerator

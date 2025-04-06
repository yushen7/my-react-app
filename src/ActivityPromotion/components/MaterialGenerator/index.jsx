import React, { useRef, useState } from 'react'
import './style.scss'
import TemplateThree from './templates/template3/index.jsx'
import TemplateTwo from './templates/template2/index.jsx'
import TemplateOne from './templates/template1/index.jsx'
import { ChannelTemplate } from '../../constant.jsx'
import { calculateElementOffsets } from './utils.js'
import { fabricElements2HTML } from '../MaterialGeneratorContainer/index.jsx'
import { MaterialChannelList } from './channels/index.jsx'
const MaterialGenerator = ({ data, channel }) => {
  const [show, setShow] = useState(false)

  const channelInfo = MaterialChannelList.find(item => item.id === channel)
  return (
    <>
      <div
        style={{ position: 'absolute', overflow: show ? 'visible' : 'hidden' }}
        className="display-container"
      >
        <div
          onClick={() => {
            setShow(!show)

            const calResult = calculateElementOffsets({
              ratio: channelInfo.posterRatio,
              keepSize: true,
              className: channelInfo.id,
            })
            console.log(fabricElements2HTML(calResult))
            console.log(channelInfo.posterRatio, 'channelInfo')
          }}
        >
          Show
        </div>
        {/* <TemplateOne data={data} channel={channel} /> */}
        {/* <TemplateTwo data={data} channel={channel} /> */}
        <TemplateThree data={data} channel={channel} />
        {/* <TemplateOne data={data} channel={channel} />
        {template === ChannelTemplate.template1 && (
          <TemplateOne data={data} channel={channel} />
        )}
        {template === ChannelTemplate.template2 && (
          <TemplateTwo data={data} channel={channel} />
        )}
        {template === ChannelTemplate.template3 && (
          <TemplateThree data={data} channel={channel} />
        )} */}
      </div>
    </>
  )
}

export default MaterialGenerator

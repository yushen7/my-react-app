import { MaterialChannelList } from '../../../channels'
import banner from './banner'
import YLBChannel from './ylb'

const AllLayouts = [banner, YLBChannel]

export default MaterialChannelList.map(item => ({
  ...item,
  layouts: AllLayouts.find(layout => layout.id === item.id).layouts,
}))

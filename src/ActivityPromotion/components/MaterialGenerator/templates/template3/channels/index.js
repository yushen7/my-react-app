import { MaterialChannelList } from '../../../channels'
import banner from './banner'
import windowPromotion from './windowPromotion'
import YLBChannel from './ylb'
import cashierCard from './cashierCard'
import friendCircle from './friendCircle'

const AllLayouts = [banner, YLBChannel, windowPromotion, cashierCard, friendCircle]

export default MaterialChannelList.map(item => {
  const matched = AllLayouts.find(layout => layout.id === item.id)
  return {
    ...item,
    layouts: matched.layouts,
  }
})

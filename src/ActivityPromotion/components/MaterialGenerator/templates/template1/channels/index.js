import { MaterialChannelList } from '../../../channels'
import banner from './banner'
import cashierCard from './cashierCard'
import windowPromotion from './windowPromotion'
import YLBChannel from './ylb'
import friendCircle from './friendCircle'

const AllLayouts = [
  YLBChannel,
  windowPromotion,
  banner,
  cashierCard,
  friendCircle,
]

export default MaterialChannelList.map(item => {
  const matched = AllLayouts.find(layout => layout.id === item.id)
  if (!matched) {
    return null
  }
  return {
    ...item,
    layouts: matched.layouts,
  }
}).filter(item => item !== null)

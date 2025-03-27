import { MaterialChannelList } from '../../../channels'
import banner from './banner'
// import windowPromotion from './windowPromotion'
import YLBChannel from './ylb'
// import cashierCard from './cashierCard'
// import friendCircle from './friendCircle'

const AllLayouts = [YLBChannel]

export default MaterialChannelList.map(item => {
  const matched = AllLayouts.find(layout => layout.id === item.id)
  if (!matched) {
    return null
  }
  console.log(matched, 'matched');
  return {
    ...item,
    layouts: matched.layouts,
  }
}).filter(item => item !== null)

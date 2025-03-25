import { ProductLayout } from './productLayout.jsx'
import { TopLayout } from './topLayout.jsx'
import { BaseRect } from '../../../channels/base.jsx'

export const AllConfigs = {
  materialGenerator: {
    width: BaseRect.width,
    height: BaseRect.height,
    position: 'absolute',
  },
  materialBackground: {
    type: 'image',
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: 0,
    previewContent:
      'https://img01.yzcdn.cn/upload_files/2025/03/23/FpbYBm053nMcEIroxd74MGHUpIJO.png',
    content:
      'https://img01.yzcdn.cn/upload_files/2025/03/23/FpbYBm053nMcEIroxd74MGHUpIJO.png',
  },
  materialDecorationBar: {
    type: 'image',
    width: '69.51%',
  },
  ...TopLayout,
  ...ProductLayout,
}

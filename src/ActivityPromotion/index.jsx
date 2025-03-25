import React, { useState } from 'react'
import './style.scss'
import { AllMaterials } from './constant.jsx'
import { GenerationStatus } from './constant.jsx'
import MaterialGenerator from './components/MaterialGenerator/index.jsx'

/**
 * @typedef {Object} MaterialItem
 * @property {string} id - Unique identifier
 * @property {string} title - Display title
 * @property {string} imageUrl - URL to image
 * @property {string} [editText] - Optional edit text
 */

const ActivityPromotion = ({
  generationStatus,
  store,
  selectedMaterials = [],
  isOpenRecommend,
}) => {
  const [showTip, setShowTip] = useState(true)
  const [showChooseDialog, setShowChooseDialog] = useState(false) // 选择物料弹窗
  const [materialImageList, setMaterialImageList] = useState([])

  const handleEdit = item => {
    console.log('编辑物料', item)
  }

  const handleGenerate = values => {
    setMaterialImageList(values)
  }

  const renderMaterialItems = items => {
    return (
      <div className="material-items-container">
        {items.map((item, index) => (
          <div key={item.id} className="material-item">
            <div
              className="material-image"
              style={{
                backgroundImage: `url(${materialImageList[index]})`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
              }}
            ></div>
            <div className="material-info">
              <div className="material-title">{item.title}</div>
              <div className="material-edit">
                {/* <Button type="text" onClick={() => handleEdit(item)}>
                  {item.editText}
                </Button> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="activity-promotion">
      <div className="activity-promotion__section">
        <span className="activity-promotion__section-title">1. 充值推荐：</span>
        {isOpenRecommend ? '已开启' : '未开启'}
      </div>
      <div
        className="activity-promotion__section"
        style={{
          marginTop: 12,
        }}
      >
        {generationStatus === GenerationStatus.Generating ? (
          <div>生成中...</div>
        ) : (
          <>
            <div className="activity-promotion__section-title">2. 活动物料</div>
            {renderMaterialItems(
              AllMaterials.filter(item => selectedMaterials.includes(item.id))
            )}
          </>
        )}

        <MaterialGenerator onGenerate={handleGenerate} store={store} />
      </div>
    </div>
  )
}

export const useActivityPromotion = () => {
  const [generationStatus, setGenerationStatus] = useState(
    GenerationStatus.Initial
  )

  const [selectedValues, setSelectedValues] = useState(
    AllMaterials.map(item => item.id)
  )

  const [isOpenRecommend, setIsOpenRecommend] = useState(false)

  const handleRefresh = () => {
    setGenerationStatus(GenerationStatus.Generating)
    setTimeout(() => {
      setGenerationStatus(GenerationStatus.Generated)
    }, 2000)
  }

  return {
    ActivityPromotion,
    generationStatus,
    setGenerationStatus,
    handleRefresh,
    selectedMaterials: selectedValues,
    isOpenRecommend,
  }
}

export default ActivityPromotion

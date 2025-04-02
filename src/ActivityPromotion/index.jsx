import React, { useCallback, useEffect, useState } from 'react'
import './style.scss'
// import { openEditDialog } from './EditDialog.jsx'
import {
  AllMaterials,
  ChannelTemplate,
  MaterialChannel,
  MaterialChannelNum,
} from './constant.jsx'
import { GenerationStatus } from './constant.jsx'
import { getChannelTemplate, processPlanData } from './utils.js'
import MaterialGeneratorContainer from './components/MaterialGeneratorContainer/index.jsx'

export const formatActivityPromotion = ({
  materialImageInfo,
  selectedMaterials,
  isOpenRecommend,
}) => {
  const selectedMaterialImageInfo = Object.keys(materialImageInfo)
    .filter(id => selectedMaterials.includes(id))
    .reduce((acc, id) => {
      acc[id] = materialImageInfo[id]
      return acc
    }, {})
  const result = {}
  const popup = selectedMaterialImageInfo[MaterialChannel.windowPromotion]
  const banner = selectedMaterialImageInfo[MaterialChannel.banner]
  if (popup) {
    result.popup = {
      imgUrl: popup.imgUrl,
      imgId: popup.imgId,
    }
  }
  if (banner) {
    result.banner = {
      imgUrl: banner.imgUrl,
      imgId: banner.imgId,
    }
  }
  result.materialList = selectedMaterials
    .filter(
      id =>
        id !== MaterialChannel.windowPromotion && id !== MaterialChannel.banner
    )
    .map(id => ({
      type: MaterialChannelNum[id],
      imgUrl: selectedMaterialImageInfo[id].imgUrl,
    }))

  result.recommend = {
    openRecommendation: isOpenRecommend,
  }
  return result
}

/**
 * @typedef {Object} MaterialItem
 * @property {string} id - Unique identifier
 * @property {string} title - Display title
 * @property {string} imageUrl - URL to image
 * @property {string} [editText] - Optional edit text
 */

const ActivityPromotion = ({
  generationStatus,
  planData,
  setActivityPlanData,
  setGenerationStatus,
  isView,
}) => {
  const [qrCode, setQrCode] = useState('')
  // 这个是给里面布局用的
  const processedPlanData = processPlanData(planData)
  // 这个是活动推广数据
  const { activityPromotion } = planData
  const { selectedMaterials, isOpenRecommend, template } = activityPromotion

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
          minHeight: 200,
        }}
      >
        {selectedMaterials.length > 0 && (
          <>
            <div className="activity-promotion__section-title">2. 活动物料</div>
            <MaterialGeneratorContainer
              data={processedPlanData}
              generationStatus={generationStatus}
              selectedMaterials={selectedMaterials}
              isView={isView}
              activityPromotion={activityPromotion}
              setGenerationStatus={setGenerationStatus}
              setActivityPlanData={setActivityPlanData}
            />
          </>
        )}
      </div>
    </div>
  )
}
const DefaultActivityPromotion = {
  isOpenRecommend: true,
  selectedMaterials: AllMaterials.map(item => item.id),
  materialImageInfo: {},
  // 渲染的模板
  template: ChannelTemplate.template1,
}

export const getDefaultActivityPromotion = () => {
  return {
    ...DefaultActivityPromotion,
  }
}
export const useActivityPromotion = ({
  setActivityPlanData,
  planData,
  setSubmitLoading,
  isView,
}) => {
  const [generationStatus, setGenerationStatus] = useState(
    isView ? GenerationStatus.Generated : GenerationStatus.Generating
  )

  const { activityPromotion } = planData

  useEffect(() => {
    if (!setSubmitLoading) {
      return
    }
    if (generationStatus === GenerationStatus.Generating) {
      // @TODO setloading?
      setSubmitLoading(true)
    }
    if (generationStatus === GenerationStatus.Generated) {
      setSubmitLoading(false)
    }
  }, [generationStatus])

  const handleRefresh = () => {
    setGenerationStatus(GenerationStatus.Generating)
    // 保留选中的物料
    setActivityPlanData({
      activityPromotion: {
        ...getDefaultActivityPromotion(),
        selectedMaterials: planData.activityPromotion.selectedMaterials,
        template: getChannelTemplate(planData.activityPromotion.template),
      },
    })
  }

  // const handleChoose = () => {
  //   openEditDialog({
  //     selectedValues: activityPromotion.selectedMaterials,
  //     onConfirm: values => {
  //       setActivityPlanData({
  //         activityPromotion: {
  //           ...planData.activityPromotion,
  //           isOpenRecommend: values.isOpenRecommend,
  //           selectedMaterials: values.materials,
  //         },
  //       })
  //     },
  //     isOpenRecommend: activityPromotion.isOpenRecommend,
  //   })
  // }

  return {
    ActivityPromotion,
    generationStatus,
    setGenerationStatus,
    handleRefresh,
    // handleChoose,
  }
}

export default ActivityPromotion

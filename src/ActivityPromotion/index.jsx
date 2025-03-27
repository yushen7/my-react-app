import React, { useEffect, useState } from 'react'
import './style.scss'
import { openEditDialog } from './EditDialog.jsx'
import {
  AllMaterials,
  ChannelTemplate,
  MaterialChannel,
  MaterialChannelNum,
} from './constant.jsx'
import { GenerationStatus } from './constant.jsx'
import { processPlanData } from './utils.js'
import MaterialGeneratorContainer from './components/MaterialGeneratorContainer/index.jsx'

const formatMaterialImageInfo2Submit = materialImageInfo => {
  const result = {}
  const popup = materialImageInfo[MaterialChannel.windowPromotion]
  const banner = materialImageInfo[MaterialChannel.banner]
  if (popup) {
    result.popup = {
      imgUrl: popup.imgUrl,
    }
  }
  if (banner) {
    result.banner = {
      imgUrl: banner.imgUrl,
      prepaidActivityId: banner.prepaidActivityId,
    }
  }
  result.materialList = Object.keys(materialImageInfo)
    .filter(
      id =>
        id !== MaterialChannel.windowPromotion && id !== MaterialChannel.banner
    )
    .map(id => ({
      type: MaterialChannelNum[id],
      imgUrl: materialImageInfo[id].imgUrl,
    }))
  return result
}

const handleSelected4Submit = (activityPromotion, selectedValues) => {
  const result = {}

  if (selectedValues.includes(MaterialChannel.windowPromotion)) {
    result.popup = {
      imgUrl: activityPromotion.popup.imgUrl,
    }
  }
  if (selectedValues.includes(MaterialChannel.banner)) {
    result.banner = {
      imgUrl: activityPromotion.banner.imgUrl,
    }
  }

  result.materialList = selectedValues
    .filter(
      id =>
        id !== MaterialChannel.windowPromotion && id !== MaterialChannel.banner
    )
    .map(id => ({
      type: MaterialChannelNum[id],
      imgUrl: activityPromotion.materialList.find(
        material => material.type === MaterialChannelNum[id]
      ).imgUrl,
    }))

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
  store,
  selectedMaterials = [],
  isOpenRecommend,
  planData,
  setActivityPlanData,
  setGenerationStatus,
  isView,
}) => {
  const processedPlanData = processPlanData(planData)
  const [qrCode, setQrCode] = useState('');

  const handleGenerate = materialImageInfo => {
    const allGenerated =
      Object.values(materialImageInfo).length === selectedMaterials.length
    setGenerationStatus(
      allGenerated ? GenerationStatus.Generated : GenerationStatus.Generating
    )
    setActivityPlanData({
      activityPromotion: {
        ...planData.activityPromotion,
        ...formatMaterialImageInfo2Submit(materialImageInfo),
      },
    })
  }

  useEffect(() => {
    // @TODO 二维码
    // getPrepaidPromotionQrCode().then(res => {
    //   if (res.shortUrl) {
    //     qrCode
    //       .toDataURL(res.shortUrl, {
    //         errorCorrectionLevel: 'H',
    //         margin: 1,
    //         width: 300,
    //         color: {
    //           dark: '#000000',
    //           light: '#ffffff',
    //         },
    //       })
    //       .then(dataUrl => {
    //         console.log(dataUrl, 'dataUrl')
    //       })
    //   }
    // })
  }, [])

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
          minHeight: 500,
        }}
      >
        <div className="activity-promotion__section-title">2. 活动物料</div>
        <MaterialGeneratorContainer
          store={store}
          data={processedPlanData}
          generationStatus={generationStatus}
          selectedMaterials={selectedMaterials}
          template={ChannelTemplate.template3}
          onGenerate={handleGenerate}
          isView={isView}
        />
      </div>
    </div>
  )
}

export const useActivityPromotion = ({ setActivityPlanData, planData }) => {
  const [generationStatus, setGenerationStatus] = useState(
    GenerationStatus.Generating
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

  const handleChoose = () => {
    openEditDialog({
      selectedValues,
      onConfirm: values => {
        setSelectedValues(values.materials)
        setIsOpenRecommend(values.isOpenRecommend)
        setActivityPlanData({
          activityPromotion: {
            ...planData.activityPromotion,
            recommend: {
              openRecommendation: values.isOpenRecommend,
            },
            ...handleSelected4Submit(
              planData.activityPromotion,
              values.materials
            ),
          },
        })
      },
      isOpenRecommend,
    })
  }

  return {
    ActivityPromotion,
    generationStatus,
    setGenerationStatus,
    handleRefresh,
    handleChoose,
    selectedMaterials: selectedValues,
    isOpenRecommend,
  }
}

export default ActivityPromotion

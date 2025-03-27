import { Button, Checkbox, closeDialog, Dialog, openDialog, Radio } from 'zent'
import { useState } from 'react'
import { AllMaterials } from './constant.jsx'

const EditDialog = ({
  selectedValues: selectedValuesProp,
  isOpenRecommend: isOpenRecommendProp,
  onConfirm,
}) => {
  const [selectedValues, setSelectedValues] = useState(selectedValuesProp)
  const [isOpenRecommend, setIsOpenRecommend] = useState(isOpenRecommendProp)
  const handleCancel = () => {
    onConfirm({
      materials: selectedValuesProp,
      isOpenRecommend,
    })
  }
  const handleConfirm = () => {
    onConfirm({
      materials: selectedValues,
      isOpenRecommend,
    })
  }

  return (
    <div className="activity-promotion-edit-dialog">
      <div className="activity-promotion-edit-dialog__content">
        <div className="activity-promotion-edit-dialog__section">
          <div
            style={{
              marginTop: 6,
            }}
          >
            充值推荐：
          </div>
          <div>
            <Radio.Group
              value={isOpenRecommend}
              onChange={e => {
                setIsOpenRecommend(e.target.value)
              }}
            >
              <Radio value={true}>开启</Radio>
              <Radio value={false}>关闭</Radio>
            </Radio.Group>
          </div>
        </div>
        <div
          className="activity-promotion-edit-dialog__section"
          style={{
            marginTop: 8,
          }}
        >
          <div
            style={{
              marginTop: 16,
            }}
          >
            选择物料：
          </div>
          <div>
            <Checkbox.Group
              value={selectedValues}
              onChange={values => {
                setSelectedValues(values)
              }}
            >
              <div className="activity-promotion-edit-dialog-checkbox-group">
                {AllMaterials.map(material => (
                  <div key={material.id}>
                    <Checkbox
                      style={{
                        marginTop: 16,
                      }}
                      value={material.id}
                    >
                      {material.title}
                    </Checkbox>
                    {material.description && (
                      <div className="material-description">
                        {material.description}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </Checkbox.Group>
          </div>
        </div>
      </div>

      <div className="activity-promotion-edit-dialog__footer">
        <Button onClick={handleCancel}>取消</Button>
        <Button type="primary" onClick={handleConfirm}>
          确定
        </Button>
      </div>
    </div>
  )
}

const DialogId = 'activityMaterialEditDialog'

export const openEditDialog = ({
  selectedValues,
  onConfirm,
  isOpenRecommend,
}) => {
  const handleConfirm = values => {
    closeDialog(DialogId)
    onConfirm(values)
  }
  const handleCancel = () => {
    closeDialog(DialogId)
  }
  openDialog({
    children: (
      <EditDialog
        isOpenRecommend={isOpenRecommend}
        selectedValues={selectedValues}
        onConfirm={handleConfirm}
      />
    ),
    title: '修改活动推广内容',
    onClose: handleCancel,
    dialogId: DialogId,
  })
}

export default EditDialog

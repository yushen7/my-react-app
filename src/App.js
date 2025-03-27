import logo from './logo.svg'
import './App.css'
import { useActivityPromotion } from './ActivityPromotion'

const planData = {
  activityBackground:
    '春分踏青季家庭需求旺盛，借节日消费高峰推出储值赠礼活动，可快速回笼资金，锁定客户后续复购，提升淡季订单量，建议设置梯度优惠刺激充值。',
  activityObjective: '提升淡季销量',
  activityTitle: '春分储值活动方案',
  reportDate: '2025-03-25',
  activityDate: ['2025-04-03 00:00:00', '2025-04-10 23:59:59'],
  activityName: '春分储值有礼',
  rechargeList: [
    {
      amount: 100,
      bonusAmount: 10,
      couponRights: [
        {
          count: 1,
          preferentialMode: 1,
          relativeValidTimeDuration: 7,
          thresholdAmount: 48,
          thresholdType: 1,
          validTimeGenerateType: 2,
          value: 8,
          voucherValueGenerateType: 1,
          goodsInfo: [
            {
              type: 'item',
              channelId: 0,
              itemId: 6269,
              select: 'all',
            },
            {
              type: 'item',
              channelId: 1,
              itemId: 533,
              select: 'all',
            },
          ],
        },
      ],
    },
    {
      amount: 200,
      bonusAmount: 30,
      couponRights: [
        {
          count: 1,
          preferentialMode: 1,
          relativeValidTimeDuration: 7,
          thresholdAmount: 68,
          thresholdType: 1,
          validTimeGenerateType: 2,
          value: 10,
          voucherValueGenerateType: 1,
          goodsInfo: [
            {
              type: 'item',
              channelId: 0,
              itemId: 1045,
              select: 'all',
            },
            {
              type: 'item',
              channelId: 1,
              itemId: 3714,
              select: 'all',
            },
          ],
        },
      ],
    },
    {
      amount: 300,
      bonusAmount: 50,
      couponRights: [
        {
          count: 1,
          preferentialMode: 1,
          relativeValidTimeDuration: 7,
          thresholdAmount: 68,
          thresholdType: 1,
          validTimeGenerateType: 2,
          value: 10,
          voucherValueGenerateType: 1,
          goodsInfo: [
            {
              type: 'item',
              channelId: 0,
              itemId: 9335,
              select: 'all',
            },
            {
              type: 'item',
              channelId: 1,
              itemId: 1495,
              select: 'all',
            },
          ],
        },
        {
          count: 1,
          preferentialMode: 1,
          relativeValidTimeDuration: 7,
          thresholdAmount: 100,
          thresholdType: 1,
          validTimeGenerateType: 2,
          value: 20,
          voucherValueGenerateType: 1,
          goodsInfo: [
            {
              type: 'item',
              channelId: 0,
              itemId: 3008,
              select: 'all',
            },
            {
              type: 'item',
              channelId: 1,
              itemId: 4035,
              select: 'all',
            },
          ],
        },
      ],
    },
  ],
  marketingPlan: {
    crowdName: '过去参与过储值活动的客户',
    crowdJson: null,
    noticeChannels: ['wecom', 'sms', 'wechat'],
    notifications: [
      {
        executeTimeDetail: {
          executeTime: '10:00:00',
        },
        noticeContent: {
          wecom: '内容',
          sms: '内容',
          wechat: '内容',
        },
      },
    ],
  },
}

function App() {
  const setActivityPlanData = data => {
    console.log(data)
  }
  const { ActivityPromotion, setGenerationStatus, selectedMaterials } =
    useActivityPromotion({
      setActivityPlanData,
      planData,
    })
  return (
    <div className="App">
      <ActivityPromotion
        store={{
          yz: {
            windowProxy: window,
            request: () => Promise.resolve({}),
          },
          windowProxy: window,
        }}
        planData={planData}
        setActivityPlanData={setActivityPlanData}
        selectedMaterials={selectedMaterials}
        setGenerationStatus={setGenerationStatus}
      />
    </div>
  )
}

export default App

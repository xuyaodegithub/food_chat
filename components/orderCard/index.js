// components/orderCard/index.js
var common = require("../../fetch/request.js")
const app = getApp()
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    dataList: {
      type: Array
    },
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    watchMess(e){
      let item = e.currentTarget.dataset.item
      wx.navigateTo({
        url: '/pages/store/logisticsInformation/index',
      })
    },
    goorderDetial(e) {
      let orderId = e.currentTarget.dataset.orderid
      wx.navigateTo({
        url: `/pages/store/orderDetial/index?orderId=${orderId}`,
      })
    },
    payment(e){
      let orderId = e.currentTarget.dataset.orderid
      let data = {
        url: '/wxpay/unifiedOrder',
        data: {
          orderId: orderId
        },
        callback: (res) => {
          wx.requestPayment({
            timeStamp: res.data.data.timeStamp,
            nonceStr: res.data.data.nonceStr,
            package: res.data.data.package,
            signType: 'MD5',
            paySign: res.data.data.paySign,
            success(res1) {
              // wx.showToast({ title: '支付成功', icon: 'none' })
              wx.reLaunch({
                url: '../paySuccess/index'
              })
            },
            fail(res) {
              // wx.showToast({ title: '支付失败', icon: 'none' })
            }
          })
        }
      }
      common.fetch(data)
    }
  }
})

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
      let index = e.currentTarget.dataset.index
      if (item.state == 1) wx.switchTab({ url: '/pages/store/listIndex/index', })
      else if (item.state == 2) this.sureGet(item.orderId, index)
      else wx.navigateTo({ url: `/pages/store/detail/index?id=${item.subProductOrders[0].productId}`, })
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
    },
    sureGet(id, index){//确认收货
    let _self=this
      let data = {
        url: '/mall/comfirmOrderReceived',
        data: {
          orderId: id
        },
        callback: (res) => {
          wx.showToast({ title: '确认成功', icon: 'none' })
          _self.triggerEvent('myevent', index)
        }
      }
      wx.showModal({
        title: '提示',
        content: '商品已签收，确认收货?',
        confirmColor:'#e96e32',
        success(res) {
          if (res.confirm) {
            common.fetch(data)
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    },
    cancalItem(e){//取消订单
      let _self = this
      let items = e.currentTarget.dataset.item
      let index = e.currentTarget.dataset.index
      let data={
        url:'/mall/cancelOrder',
        data:{
          orderId: items.orderId
        },
        callback:(res)=>{
          wx.showToast({ title: '取消成功', icon: 'none' })
          _self.triggerEvent('myevent', index)
        }
      }
      wx.showModal({
        title: '提示',
        content: '确认取消此订单?',
        confirmColor: '#e96e32',
        success(res) {
          if (res.confirm) {
            common.fetch(data)
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    }
  }
})

// pages/store/orderDetial/index.js
var common = require("../../../fetch/request.js")
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    orderId:'',
      userMess:{
        // name:'王小二',phone:'13356789652',adress:'杭州市 浙江省 上城区近江时代大厦A装一单元19楼1901'
      },
    orderMess: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({ orderId: options.orderId})
    this.orderDetial()
  },
  orderDetial(){//获取订单详情
      let _self=this
      let data={
        url:'/mall/order',
        data:{
          orderId: this.data.orderId
        },
        callback:(res)=>{
          _self.setData({ orderMess: res.data.data, userMess: res.data.data.orderLogisticsDo})
        }
      }
      common.fetch(data)
  },
  doSomething(){//详情按钮
    let orderId = this.data.orderId
    let state = this.data.orderMess.state
    if(state==0) this.paymenet(orderId)
    else if (state == 1) wx.switchTab({ url: '../listIndex/index', })
    else if (state == 2) this.sureGet(orderId)
    // else if (state == 2) wx.navigateTo({url: '../logisticsInfoemation/index',})
    else if (state == 3) wx.navigateTo({ url: `../detail/index?id=${this.data.orderMess.subProductOrders[0].productId}`})
  },
  paymenet(info) {//支付唤醒
    let data = {
      url: '/wxpay/unifiedOrder',
      data: {
        orderId: info
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
  sureGet(id) {//确认收货
    let data = {
      url: '/mall/comfirmOrderReceived',
      data: {
        orderId: id
      },
      callback: (res) => {
        wx.showToast({ title: '确认成功', icon: 'none' })
        wx.redirectTo({
          url: '../orderList/index',
        })
      }
    }
    wx.showModal({
      title: '提示',
      content: '商品已签收，确认收货?',
      confirmColor: '#e96e32',
      success(res) {
        if (res.confirm) {
          common.fetch(data)
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  // onShareAppMessage: function () {

  // }
})
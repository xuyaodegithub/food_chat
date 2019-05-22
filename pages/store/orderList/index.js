// pages/store/orderList/index.js
var common = require("../../../fetch/request.js")
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active:0,
    page:1,
    pageSize:10,
    proMess: [],
    stopPost:false,
    state:-1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getOrderList()
  },
  onChange(event) {
    let index = Number(event.detail.index)-1
    if (index==this.data.state)  return
    this.setData({ 
      state: index ,
      page:1,
      stopPost:false
      })
    this.getOrderList(1)
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  getOrderList(num){//获取订单列表
  let _self=this
    let data={
      url:'/mall/listOrders',
      data:{
        state: this.data.state,//全部-1待付款0代发货1待收货2
        page: this.data.page,
        pageSize: this.data.pageSize
      },
      callback:(res)=>{
        if (num == 1)  _self.setData({ proMess: res.data.data })
        else _self.setData({ proMess: _self.data.proMess.concat(res.data.data) })
        if (res.data.data.length < 10) _self.setData({ stopPost: true })
      }
    }
    common.fetch(data)
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
    if (this.data.stopPost) return
      this.setData({page:this.data.page+1})
      this.getOrderList(2)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
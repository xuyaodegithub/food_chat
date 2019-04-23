// pages/attractInvestment/attractDetial/attractDetial.js
var common = require("../../../fetch/request.js")
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
      id:'',
      datialData:{},
      othersMsg: [{ title: '加盟费', msg: '' }, { title: '开店面积', msg: '' }, { title: '回本周期', msg: '' }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (options.id){
      this.setData({
        id: options.id
      })
      this.getDetial()
    }else wx.showToast({title: '商品错误，请重新进入',icon:'none'})
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },
  //获取详情
  getDetial(){
    wx.showLoading({ })
    let _self=this
    let data={
      url:'/brandJoin/detail',
      data:{
        id:this.data.id
      },
      callback:(res)=>{
        let othersMsg = _self.data.othersMsg
        othersMsg.map((val,index)=>{
          if (index == 0) val.msg = res.data.data.feeDescription
          else if (index == 1) val.msg = res.data.data.shopAreaDesc
          else val.msg = res.data.data.balancePeriod
        })
          this.setData({
            datialData:res.data.data,
            othersMsg: othersMsg
          })
          wx.hideLoading()
      }
    }
    common.fetch(data)
  },
  getPhoneNumber (e) {
    console.log(e.detail.errMsg)
    if (e.detail.errMsg !='getPhoneNumber:ok'){//点击拒绝授权提示
      wx.showToast({ title: '申请需要授权', icon: 'none' });
      return 
    }
    // console.log(e.detail.iv)
    // console.log(e.detail.encryptedData)
      let data={
        url: "/user/applyForAlliance",
        data:{
          brandName: this.data.datialData.brandName,
          encryptedData: e.detail.encryptedData,
          iv: e.detail.iv
        },
        callback:(res)=>{
          wx.navigateTo({url: '/pages/join-info/join-info' })
        }
      }
      common.fetch(data)
  },
  goWechat(){
    wx.navigateTo({ url: '../wechatUs/wechatUs'})
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
  onShareAppMessage: function () {

  }
})
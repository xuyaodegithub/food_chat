// pages/attractInvestment/attractList/attractList.js
var common = require("../../../fetch/request.js")
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    page:1,
    rows:10,
    advers:[
      { image: 'http://p1.meituan.net/xianfudwm/7f0b1de878f6199ebc536950dacafdd5154556.jpg', link: '' },
      { image: "http://p1.meituan.net/xianfudwm/1dda38f78110895ae16776951a593aab135352.jpg", link: '' },
      { image: "http://p0.meituan.net/xianfudwm/a96a4de82cc27c73ddbc45954a616005268025.jpg", link: '' },
      { image: "http://p1.meituan.net/xianfudwm/6ecb8beacf3b315f84943aff536338e0185042.jpg",link:''}
    ],
    attractList:[],
    openUp:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getAttractList(1)
  },
//获取招商列表
  getAttractList(key,down) {
    let data = {
      url: '/brandJoin/list',
      type: 'GET',
      data: {
        page: this.data.page,
        pageSize: this.data.rows
      },
      callback: (res) => {
        if(key==1)this.setData({attractList: res.data.data})
        else this.setData({attractList: [...this.data.attractList,...res.data.data] })
        if (down){
          wx.hideNavigationBarLoading()
          wx.stopPullDownRefresh()
        }
        if (res.data.data.length < 10) this.setData({ openUp:false })
      }
    }
    common.fetch(data)
  },
  //去详情
  goDetial(e){
    let id = e.currentTarget.dataset.id
    wx.navigateTo({url: `../attractDetial/attractDetial?id=${id}`})
  },
  goWechat() {
    wx.navigateTo({ url: '../wechatUs/wechatUs', })
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
    wx.showNavigationBarLoading()
    this.setData({ page: 1})
    this.getAttractList(1,'down')
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    if(!this.data.openUp) return
      this.setData({
        page: this.data.page+1
      })
    this.getAttractList(2)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
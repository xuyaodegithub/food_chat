// pages/join-info/join-info.js
const app = getApp();
var config = require('../../config.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    budgetOptions: ["1万以下",
      "1~5万",
      "5~10万",
      "10~20万",
      "20~50万",
      "50~100万",
      "100万以上"
    ],
    experienceOptions: [
      "无", "1年以下", "1~3年", "3~5年", "5年以上"
    ],
    haveShopOptions: ["有", "无"],
    budget: "请选择",
    experience: "请选择",
    haveShop: "请选择",

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  bindBudgetChange: function(e) {
    this.setData({
      budget: this.data.budgetOptions[e.detail.value]
    });
  },
  bindExperienceChange: function (e) {
    this.setData({
      experience: this.data.experienceOptions[e.detail.value]
    });
  },
  bindHaveShopChange: function (e) {
    this.setData({
      haveShop: this.data.haveShopOptions[e.detail.value]
    });
  },

  onSubmit: function (e) {
    var params = {
      budget: this.data.budget,
      experience: this.data.experience,
      hasStore: this.data.haveShop,
    };
    wx.showLoading({
      title: '提交中',
    })
    wx.request({
      url: config.apiUrl + "/user/applyForAllianceExtra", // 仅为示例，并非真实的接口地址
      data: params,
      header: {
        'content-type': 'application/json', // 默认值
        'token': app.token
      },
      method: "get",
      success(res) {
        wx.hideLoading()
        wx.navigateBack({
        })
      }
    })
  },
})
// pages/store/toSureBuy/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      adressMess:{
        name:'张二麻子',
        phone:'13256564789',
        mess:'浙江省 杭州市 滨江区新东方国际5楼101室'
      },
      proMess:{
        title:'350方/天天伴/400套十三水十三水所所',
        img:'https://gd3.alicdn.com/imgextra/i2/273229813/O1CN01gJ9HKK2MMP7YNOeee_!!273229813.jpg',
        price:'93.80',
        num:1,
        freeShipping:1
      },
      buyNum:0,
      money:'93.80'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      this.setData({
        buyNum: this.data.proMess.num
      })
  },
  onSubmit(){

  },
  chengnum(e) {
    let type = e.currentTarget.dataset.type
    if (type == 2) this.setData({ buyNum: this.data.buyNum += 1 })
    else {
      if (this.data.buyNum == 1) {
        wx.showToast({ title: '购买不可少于一件', icon: 'none' })
        return
      }
      this.setData({
        buyNum: this.data.buyNum -= 1
      })
    }
  },
  inputChange(e){
    let val = e.detail.value;
  },
  payMemoy(){
    wx.navigateTo({
      url: '../paySuccess/index',
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
  onShareAppMessage: function () {

  }
})
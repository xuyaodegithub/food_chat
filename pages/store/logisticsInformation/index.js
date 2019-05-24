// pages/store/logisticsInformation/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mess: {
      title: '350方/天天伴/400套十三水十三水所所',
      img: 'https://gd3.alicdn.com/imgextra/i2/273229813/O1CN01gJ9HKK2MMP7YNOeee_!!273229813.jpg',
      price: '93.80',
      num: 1,
      freeShipping: 1,
      time: '2019-05-20',
      surePay: '93.5',
      status: 0,
      number:'5956465452',
      company:'中通快递',
      phone:95311

    },
    active:0,
    steps: [
      {
        text: '已签收',
        desc: '您的订单已经被便利店....'
      }, {
        text: '派送中',
        desc: '您的订单正在配送中....'
      },
      {
        text: '运输中',
        desc: '您的快递已经到达了0....'
      },  {
        text: '已下单',
        desc: '您已提交了订单，请等待处理。2019-05-16  04:30'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
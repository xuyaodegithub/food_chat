// pages/store/addNewAdress/index.js
import Dialog from '../../../vant/dialog/dialog';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value:'',
    phone:'',
    region: ['省份', '城市', '区县'],
    customItem: '全部',
    checked:false,
    id:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      id: options.id ? options.id : ''
    })
    if (options.id) wx.setNavigationBarTitle({ title: '修改地址' })//动态设置页面标题
  },
  onChangeI(event) {
    // event.detail 为当前输入的值
    console.log(event.detail);
  },
  //地区选择器
  bindRegionChange(e) {//地区选择器嫦娥和事件
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value
    })
  },
  bindTextAreaBlur(e){//多行文本输入框失去焦点事件
    console.log(e.detail.value)
  },
  onChange(event){
    this.setData({
      checked: event.detail
    });
  },
  deleteItem(){//删除地址
    Dialog.confirm({
      title: '提示',
      message: '确定要删除此地址么？'
    }).then(() => {
      // on confirm
      wx.navigateBack({
        delta: 1
      })
    }).catch(() => {
      // on cancel
      console.log('cancel')
    });

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
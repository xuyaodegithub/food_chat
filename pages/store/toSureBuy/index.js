// pages/store/toSureBuy/index.js
var common = require("../../../fetch/request.js")
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
      adressMess:{
        receiverProvince: '',
        receiverCity: '',
        receiverDistrict: '',
        receiverAddress: '',
        receiverName: '',
        receiverMobile: '',
      },
        // userName:'张二麻子',
        // telNumber:'13256564789',
        // detailInfo:'浙江省 杭州市 滨江区新东方国际5楼101室'
      // },
      proMess:{
        // title:'350方/天天伴/400套十三水十三水所所',
        // img:'https://gd3.alicdn.com/imgextra/i2/273229813/O1CN01gJ9HKK2MMP7YNOeee_!!273229813.jpg',
        // price:'93.80',
        // num:1,
        // freeShipping:1
        },
      money:'93.80'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getDetailData()
    this.getAdressss()
  },
  onSubmit(){

  },
  chengnum(e) {//+-
    let type = e.currentTarget.dataset.type
    let data = this.data.proMess
    if (type == 2) {
      data.num = data.num+1
    }else {
      if (data.num == 1) {
        wx.showToast({ title: '购买不可少于一件', icon: 'none' })
        return
      }
      data.num = data.num - 1
    }
    this.setData({ proMess: data })
  },
  inputChange(e){
    let val = e.detail.value;
    let daya = this.data.proMess
    daya.num = val ? Number(val) : 1
    this.setData({
      proMess: daya
    })
  },
  payMemoy(){//提交订单
    if (!this.data.adressMess.receiverName || !this.data.adressMess.receiverMobile){
      wx.showToast({title: '请先完善收货地址信息',icon:'none'})
      return
    }
      let _self = this
      let data={
        url:'/mall/submitProductOrder',
        type:'POST',
        data:{
          num: this.data.proMess.num,
          productId: this.data.proMess.procuctId,
          receiverAddress: this.data.adressMess.receiverAddress,
          receiverCity: this.data.adressMess.receiverCity,
          receiverDistrict: this.data.adressMess.receiverDistrict,
          receiverMobile: this.data.adressMess.receiverMobile,
          receiverName: this.data.adressMess.receiverName,
          receiverProvince: this.data.adressMess.receiverProvince,
          skuKey: this.data.proMess.nomalMess.skuKey
        },
        callback:(res)=>{
          _self.paymenet(res.data.data)
        }
      }
      common.fetch(data)
  },
  paymenet(info){//支付唤醒
      let data={
        url:'/wxpay/unifiedOrder',
        data:{
          orderId: info
        },
        callback:(res)=>{
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
  choseAdress(){
    let _self=this
    // wx.navigateTo({
    //   url: '../adress-list/index',
    // })
    wx.getSetting({
      success(res) {
        // 如果没有则获取授权
        if (!res.authSetting['scope.address']) {
          wx.authorize({
            scope: 'scope.address',
            success() {
              _self.selectAdress()
            },
            fail() {
              wx.showModal({
                title: '提示',
                content: '您还未授权使用微信地址',
                confirmText: '去授权',
                success(res) {
                  if (res.confirm) {
                    // console.log('用户点击确定')
                    wx.openSetting({
                      success(res) {
                        console.log(res.authSetting)
                        // res.authSetting = {
                        //   "scope.userInfo": true,
                        //   "scope.userLocation": true
                        // }
                      }
                    })
                  } else if (res.cancel) {
                    console.log('用户点击取消')
                  }
                }
              })
            }
          })
        } else {
          // 有则直接保存
          _self.selectAdress()
        }
      }
    })
  },
  selectAdress() {//选择微信地址
    let _self = this
    wx.chooseAddress({
      success(res) {
        console.log(res)
        if (res.errMsg !== 'chooseAddress:ok') {
          wx.showToast({ title: res.errMsg, })
          return
        }
        let data = _self.data.adressMess
        data.receiverProvince = res.provinceName
        data.receiverCity = res.cityName
        data.receiverDistrict = res.countyName
        data.receiverAddress = res.detailInfo
        data.receiverName = res.userName
        data.receiverMobile = res.telNumber
        // _self.updataThis(res)
        _self.setData({
          adressMess: data
        })
      }
    })
  },
  getDetailData(){//从storerage中取出存储的信息
    let data = wx.getStorageSync('saveData')
    console.log(data)
    this.setData({
      proMess: data,
    })
    // console.log(data)
  },
  getAdressss(){//获取默认地址
      let _self = this
      let data={
        url:'/mall/defaultAddress',
        data:{ },
        callback:(res)=>{
          _self.setData({ adressMess:res.data.data})
        }
      }
    common.fetch(data)
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
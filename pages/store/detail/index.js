// pages/store/detail/index.js
var common = require("../../../fetch/request.js")
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    productId:'',
    store:'',
    benners:[
      { image: 'https://gd3.alicdn.com/imgextra/i2/273229813/O1CN01gJ9HKK2MMP7YNOeee_!!273229813.jpg' },
      { image: 'https://gd1.alicdn.com/imgextra/i4/57009101/TB2A6ibbmiK.eBjSZFyXXaS4pXa_!!57009101.jpg' },
      { image: 'https://gd2.alicdn.com/imgextra/i2/2614654258/O1CN01hX8fu01hKCxJEVoB6_!!2614654258.jpg'},
    ],
    oneItem:{ },
    buyNum:1,
    showPopup:false,
    nomalList:[],
    namalDetial:[],
    nomalMess:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({ productId: options.id})
    this.getDetail()
  },
  goBuy(){//立即购买
    this.setData({
      showPopup:true
    })
  },
  inputChange(e) {//购买数量输入
    let val = e.detail.value;
    this.setData({
      buyNum:val ? Number(val) : 1
    })
  },
  closeP(){//xx关闭弹框
    this.setData({ showPopup: false })
  },
  closePopu(){
    let arr = this.data.nomalList
    let select = arr.every((item,key)=>{
      return item.selected==1
    })
    if (select){
      let saveData={
        procuctName: this.data.oneItem.title,//产品名称
        procuctId: this.data.oneItem.productId,//产品id
        nomalMess: this.data.nomalMess,//产品sku
        num: this.data.buyNum//数量
      }
      wx.setStorageSync('saveData', saveData)
      wx.navigateTo({
        url: '../toSureBuy/index',
      })
      this.setData({ showPopup: false })
    } else wx.showToast({ title: '请先选择规格', icon: 'none' })
  },
  selectNomall(e){
    let _self=this
    let index = e.currentTarget.dataset.index
    let indexson = e.currentTarget.dataset.indexson
    let arr = this.data.nomalList
    arr[index].selected = 1
    arr[index].selectindex = indexson
    let select = arr.every((item, key) => {
        return item.selected == 1
      })
     if (select) {
        let str=[]
        arr.map((val,index)=>{
          str.push(val.options[val.selectindex]) 
        })
       this.data.namalDetial.map((val,index)=>{
         console.log(str.join(','))
         if (val.skuKey == str.join(',')){
           _self.setData({ nomalMess: val })
         }
       })
     }
    this.setData({
      nomalList: arr
    })
  },
  chengnum(e){
    let type = e.currentTarget.dataset.type
      if(type==2)this.setData({buyNum:this.data.buyNum+=1})
      else{
        if (this.data.buyNum==1) {
          wx.showToast({ title: '购买不可少于一件',icon:'none'})
          return
        }
        this.setData({
          buyNum: this.data.buyNum-=1
        })
      }
  },
  previewImage(){
    wx.previewImage({
      current: this.data.oneItem.img, // 当前显示图片的http链接
      urls: [this.data.oneItem.img] // 需要预览的图片http链接列表
    })
  },
  getDetail(){//获取详情
    let _self=this
    let data={
      url:'/mall/product',
      data:{
        id: this.data.productId
      },
      callback:(res)=>{
        let arr = res.data.data.productSkuPropertyList
        arr.map((val,index)=>{
          val['selected']=0
          val['selectindex']=-1
        })
        _self.setData({ 
          oneItem: res.data.data, 
          nomalList: arr,
          namalDetial: res.data.data.productSkuList//全部规格详细
        })
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
  // onPullDownRefresh: function () {

  // },

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
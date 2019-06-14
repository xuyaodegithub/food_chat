// pages/store/listIndex/index.js
var common = require("../../../fetch/request.js")
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    classList:[],
    productList:[],
    classindex:0,//当前分类name
    className:'',
    page:1,
    pageSize:10,
    moveTrue:false,//是否关闭触底请求
    showSJ:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      showSJ:options.showSJ ? true : false
    })
    this.categoryList()
  },
  changeTitle(e){//改变分类
    if (this.data.classindex === e.currentTarget.dataset.index) return
    this.setData({
      classindex: e.currentTarget.dataset.index,
      className: e.currentTarget.dataset.item,
      page:1,
      pageSize:10,
      moveTrue:false
    })
    this.listProduct(1)
  },
  goDetail(e){//进详情
    let id = e.currentTarget.dataset.ids
    wx.navigateTo({
      url: `../detail/index?id=${id}`,
    })
  },
  goorderList(){//进订单页
    // wx.scanCode({
    //   onlyFromCamera: false,//是否只能从相机扫码，不允许从相册选择图片
    //   scanType: ['barCode', 'qrCode'],
    //   success(res) {
    //     console.log(res)
      
    //   },
    //   fail(err) {
    //     console.log(err) '/pages/Bluetooth/Bluetooth'
    //   }
    // })
    wx.navigateTo({
      url: '../orderList/index',
    })
  },
  categoryList(){//获取分类列表
    let _self=this
    let data={
              url:'/mall/categoryList',
              data:{},
              callback:(res)=>{
                _self.setData({
                  classList:res.data.data,
                  className: _self.data.showSJ ? '外卖运营' : res.data.data[0],
                  classindex: _self.data.showSJ ? res.data.data.indexOf('外卖运营') : 0
                }, _self.listProduct)
              }
        }
    common.fetch(data)
  },
  listProduct(num) {//获取分类下的产品
    let _self = this
    let data = {
      url: '/mall/listProduct',
      data: {
        category:this.data.className,
        page:this.data.page,
        pageSize: this.data.pageSize
      },
      callback: (res) => {
        if(num==1) _self.setData({productList: res.data.data})
        else _self.setData({ productList: _self.data.productList.concat(res.data.data) })
        if (res.data.data.length < 10) _self.setData({ moveTrue : true})
      }
    }
    common.fetch(data)
  },
  getMoveProduct(){
    if (this.data.moveTrue) return
    this.setData({
      page: this.data.page+1
    })
    this.listProduct(2)
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
  onShareAppMessage: function (ops) {
    let imgurl,pageUrl,title
    if (ops.from === 'button') {
      // 来自页面内转发按钮、、menu
      console.log(ops.target)
    }
    if (this.data.className == '外卖运营') {
      imgurl = '/images/share2.jpg'
      pageUrl = '/pages/store/listIndex/index?showSJ=1'
      title = '外卖【订单提升】解决方案，效果明显，安全可靠，商家满意度高！'
    }else{
      imgurl = '/images/share1.jpg'
      pageUrl = '/pages/store/listIndex/index'
      title = '【外卖包材】餐盒、餐具、纸巾、餐袋，【工厂直批—全网最低】'
    } 
    return {
      title: title,
      path: pageUrl,//当前页面 path ，必须是以 / 开头的完整路径
      imageUrl: imgurl,//转发图标
      success: function (res) {
        //成功
        console.log('success')
      },
      fail: function (res) {
        // 转发失败
        console.log(res);
      }
    }
  }
})
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
    className:'',//当前分类name
    page:1,
    pageSize:10,
    moveTrue:false,//是否关闭触底请求
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.categoryList()
  },
  changeTitle(e){//改变分类
    if (this.data.className === e.currentTarget.dataset.item) return
    this.setData({
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
                  className: res.data.data[0]
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
  // onShareAppMessage: function () {

  // }
})
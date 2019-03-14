const app = getApp();
var config = require('../../config.js');

var brandCates = [
  {
    "key": "简餐",
    "doc_count": 286615
  },
  {
    "key": "米粉面馆",
    "doc_count": 156350
  },
  {
    "key": "地方小吃",
    "doc_count": 152182
  },
  {
    "key": "奶茶果汁",
    "doc_count": 87882
  },
  {
    "key": "盖浇饭",
    "doc_count": 77673
  },
  {
    "key": "川湘菜",
    "doc_count": 71720
  },
  {
    "key": "炸鸡炸串",
    "doc_count": 69038
  },
  {
    "key": "烧烤",
    "doc_count": 53051
  },
  {
    "key": "麻辣烫",
    "doc_count": 51231
  },
  {
    "key": "包子粥店",
    "doc_count": 47673
  },
  {
    "key": "甜品",
    "doc_count": 47304
  },
  {
    "key": "汉堡",
    "doc_count": 40754
  },
  {
    "key": "其他菜系",
    "doc_count": 36660
  },
  {
    "key": "饺子馄饨",
    "doc_count": 36328
  },
  {
    "key": "香锅砂锅",
    "doc_count": 26615
  },
  {
    "key": "蛋糕",
    "doc_count": 24350
  },
  {
    "key": "卤味鸭脖",
    "doc_count": 24292
  },
  {
    "key": "火锅烤鱼",
    "doc_count": 20416
  },
  {
    "key": "日韩料理",
    "doc_count": 19789
  },
  {
    "key": "水果",
    "doc_count": 17525
  },
  {
    "key": "黄焖鸡米饭",
    "doc_count": 17304
  },
  {
    "key": "便利店",
    "doc_count": 17188
  },
  {
    "key": "披萨意面",
    "doc_count": 17060
  },
  {
    "key": "大型超市",
    "doc_count": 15405
  },
  {
    "key": "小龙虾",
    "doc_count": 15341
  },
  {
    "key": "东北菜",
    "doc_count": 14695
  },
  {
    "key": "咖啡",
    "doc_count": 14270
  },
  {
    "key": "江浙菜",
    "doc_count": 13886
  },
  {
    "key": "鲜花",
    "doc_count": 13714
  },
  {
    "key": "面包",
    "doc_count": 13297
  },
  {
    "key": "西餐",
    "doc_count": 12801
  },
  {
    "key": "生煎锅贴",
    "doc_count": 11662
  },
  {
    "key": "海鲜",
    "doc_count": 10572
  },
  {
    "key": "煲仔饭",
    "doc_count": 10450
  },
  {
    "key": "粤菜",
    "doc_count": 9004
  },
  {
    "key": "休闲零食",
    "doc_count": 7169
  },
  {
    "key": "零食",
    "doc_count": 6755
  },
  {
    "key": "烧腊饭",
    "doc_count": 6266
  },
  {
    "key": "鲁菜",
    "doc_count": 5650
  },
  {
    "key": "西北菜",
    "doc_count": 5072
  },
  {
    "key": "绿植",
    "doc_count": 3990
  },
  {
    "key": "蔬菜豆品",
    "doc_count": 2655
  },
  {
    "key": "新疆菜",
    "doc_count": 2544
  },
  {
    "key": "云南菜",
    "doc_count": 2367
  },
  {
    "key": "咖喱饭",
    "doc_count": 2202
  },
  {
    "key": "饮料冰品",
    "doc_count": 1478
  },
  {
    "key": "名酒坊",
    "doc_count": 1396
  },
  {
    "key": "肉禽蛋品",
    "doc_count": 1395
  },
  {
    "key": "东南亚菜",
    "doc_count": 1069
  },
  // {
  //   "key": "粮油副食",
  //   "doc_count": 975
  // },
  // {
  //   "key": "水站",
  //   "doc_count": 604
  // },
  // {
  //   "key": "海鲜水产",
  //   "doc_count": 558
  // },
  // {
  //   "key": "冷冻速食",
  //   "doc_count": 526
  // },
  // {
  //   "key": "奶站",
  //   "doc_count": 452
  // },
  // {
  //   "key": "茶行",
  //   "doc_count": 243
  // },
  // {
  //   "key": "美妆母婴",
  //   "doc_count": 207
  // },
  // {
  //   "key": "宠物超市",
  //   "doc_count": 200
  // }
]

// pages/brand/brand.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    brandCates: brandCates,
    brandRankList:[],
    activeNames:[],
    selectedTagIndex:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getBrands()
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

  },

  getBrands(flavor){
    var that = this;
    wx.showLoading({
      title: '加载中',
    })
    var brandSearchData = {
      
      "size": 0,
      "aggs": {
        "brand": {
          "terms": {
            "field": "brand",
            "size": 100
          },
          "aggs": {
            "monthSale": {
              "sum": {
                "field": "month_sale"
              }
            }
          }
        }
      }
    }

    if(flavor){
      brandSearchData.query = {
        "match": {
          "flavors": flavor
        }
      }
    }

    wx.request({
      url: config.apiUrl + "/shop/ele/search", // 仅为示例，并非真实的接口地址
      data: brandSearchData,
      header: {
        'content-type': 'application/json' // 默认值
      },
      method: "post",
      success(res) {
        var result = [];
        var list = res.data.aggregations.brand.buckets;
        for (var i = 0; i < list.length; i++) {
          var row = list[i];
          if (row.key != '') {
            row.avgSalesCount = Math.round(row.monthSale.value / row.doc_count);
            result.push(row);
          }
        }

        that.setData(
          {
            brandRankList: result,
          }
        );
        wx.hideLoading()
        //console.log(res.data.data)
      }
    })
  },
  getPhoneNumber: function (e) {
    console.log(e.detail.errMsg)
    console.log(e.detail.iv)
    console.log(e.detail.encryptedData)
    wx.request({
      url: config.apiUrl + "/user/weixinSavePhone", // 仅为示例，并非真实的接口地址
      data: {
        encryptedData: e.detail.encryptedData,
        iv: e.detail.iv
      },
      header: {
        'content-type': 'application/json', // 默认值
        'token': app.token
      },
      method: "get",
      success(res) {
        wx.showModal({ title:"提交成功",content:"您的手机号已成功提交，我们将会派专人与你取得联系"})
      }
    })
  },
  onChange(event) {
    this.setData({
      activeNames: event.detail
    });
    
  },
  selectTag(event){
    console.log(event.target.dataset);
    this.setData({
      selectedTagIndex: event.target.dataset.index
    });
    var flavor = null;
    if (event.target.dataset.index == "0"){
      this.getBrands();
    }
    else{
      this.getBrands(this.data.brandCates[event.target.dataset.index - 1].key);
    }
    
  }
})
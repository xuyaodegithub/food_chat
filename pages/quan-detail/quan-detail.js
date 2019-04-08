// pages/quan-detail/quan-detail.js
import {
  formatNumberW
} from '../../utils/util.js'
const app = getApp();
var config = require('../../config.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    quanName: "杭州市滨江区江陵路888号新东方国际科技大厦",
    options: {},
    catRankList: [],
    shopRankList: [],
    brandRankList: [],
    shopCount:"--",
    monthSale: "--",
    avgMonthSale: "--",
    workNum:"--",
    homeNum: "--",
    schoolNum:"--"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

    this.setData({
      quanName:options.name
    })
    this.data.options = options;
    this.getData();
    this.getMapPoi();
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

  getData: function() {
    wx.showLoading({
      title: '加载中',
    })
    var that = this;
    var searchBody = {
      "size": 200,
      "sort": [{
        "month_sale": {
          "order": "desc"
        }
      }],
      "aggs": {
        "monthSale": {
          "sum": {
            "field": "month_sale"
          }
        },
        "brand": {
          "terms": {
            "field": "brand",
            "size": 100,
            "order": {
              "monthSale": "desc"
            }
          },
          "aggs": {
            "monthSale": {
              "sum": {
                "field": "month_sale"
              }
            }
          }
        },
        "flavor": {
          "terms": {
            "field": "flavors",
            "size": 100,
            "order": {
              "monthSale": "desc"
            }
          },
          "aggs": {
            "monthSale": {
              "sum": {
                "field": "month_sale"
              }
            }
          }
        }
      },
      "query": {
        "bool": {
          "filter": {
            "geo_distance": {
              "distance": "1km",
              "location": {
                "lat": this.data.options.lat,
                "lon": this.data.options.lng
              }
            }
          }
        }
      }
    };
    wx.request({
      url: config.apiUrl + "/shop/ele/search", // 仅为示例，并非真实的接口地址
      data: searchBody,
      header: {
        'content-type': 'application/json' // 默认值
      },
      method: "post",
      success(res) {
        var result = [];
        var catRankList = [];
        var brandRankList = [];
        var list = res.data.hits.hits;
        for (var i = 0; i < list.length; i++) {
          var row = list[i]['_source'];
          //if (row.key != '') {
          //row.avgSalesCount = Math.round(row.month_sale.value / row.doc_count);
          //row.monthSaleStr = formatNumberW(row.monthSale.value)
          row.label = row.flavors.join(" ")
          result.push(row);
          //}
        }

        for (var i = 0; i < res.data.aggregations.flavor.buckets.length; i++) {
          var row = res.data.aggregations.flavor.buckets[i];
          //if (row.key != '') {
          row.avgSalesCount = Math.round(row.monthSale.value / row.doc_count);
          row.monthSaleStr = formatNumberW(row.monthSale.value)
          catRankList.push(row);
          //}
        }
        for (var i = 0; i < res.data.aggregations.brand.buckets.length; i++) {
          var row = res.data.aggregations.brand.buckets[i];
          if (row.key != '') {
            row.avgSalesCount = Math.round(row.monthSale.value / row.doc_count);
          row.monthSaleStr = formatNumberW(row.monthSale.value)
          brandRankList.push(row);
          }
        }

        var avgMonthSale = "--";
        if (res.data.hits.total>0){
          avgMonthSale = Math.round(res.data.aggregations.monthSale.value / res.data.hits.total)
        }
        that.setData({
          shopRankList: result,
          catRankList: catRankList,
          brandRankList: brandRankList,
          shopCount: res.data.hits.total,
          monthSale: formatNumberW(res.data.aggregations.monthSale.value),
          avgMonthSale: avgMonthSale
        });
        wx.hideLoading()
        //console.log(res.data.data)
      }
    })
  },

  getMapPoi:function(){
    var that = this;
    var params = {
      lat:this.options.lat,
      lon: this.options.lng,
      radius:1000
    }
    wx.request({
      url: config.apiUrl + "/distance/info", // 仅为示例，并非真实的接口地址
      data: params,
      header: {
        'content-type': 'application/json' // 默认值
      },
      method: "get",
      success(res) {
        that.setData({
          schoolNum: res.data.data.schoolNum,
          workNum: res.data.data.workNum,
          homeNum: res.data.data.homeNum,
        })
      }
    })
  },
  openBrandDetail: function (event) {
    var brand = event.currentTarget.dataset.brand;
    wx.navigateTo({
      url: '/pages/brand-detail/brand-detail?brand=' + brand,
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  openShopDetail: function (e) {
    console.log(e.currentTarget.dataset.index);
    var itemData = this.data.shopRankList[e.currentTarget.dataset.index];

    wx.navigateTo({
      url: '/pages/shop-detail/shopDetail?shopId=' + itemData.md5id,
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
})
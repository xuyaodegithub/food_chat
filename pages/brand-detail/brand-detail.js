var regions = require('../../libs/regions2.js');
var foodCates = require('../../libs/foodCates.js');
import {
  formatNumberW
} from '../../utils/util.js'
var config = require('../../config.js');
const app = getApp();
// pages/brand-detail/brand-detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: 0,
    brandName: "肯德基",
    monthSale: '--',
    shopCount: '--',
    avgSale: '--',
    flavors: [],
    shopRankList: [],
    shopRankList1: [],
    shopRankList2: [],
    shopRankList3: [],
    provinceRankList: ["北京", "上海", "广东"]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(options);
    this.setData({
      brandName: options.brand
    });
    this.getBrandInfo(options.brand)
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

  getBrandInfo(brandName) {
    var that = this;
    wx.showLoading({
      title: '加载中',
    })
    var brandSearchData = {
      "query": {
        "match": {
          "brand": brandName
        }
      },
      "size": 50,
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
        "hot_province": {
          "terms": {
            "field": "province",
            "size": 5
          }
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
        var shopRankList = [];
        var hits = res.data.hits.hits;
        for (var i = 0; i < hits.length; i++) {
          var row = hits[i]['_source'];
          //if (row.key != '') {
          //row.avgSalesCount = Math.round(row.month_sale.value / row.doc_count);
          //row.monthSaleStr = formatNumberW(row.monthSale.value)
          //row.label = row.flavors.join(" ")
          row.label = row.city + " " + row.district;
          shopRankList.push(row);
        }
        var provinceRankList = [];
        for (var i = 0; i < res.data.aggregations.hot_province.buckets.length; i++) {
          var row = res.data.aggregations.hot_province.buckets[i];
          provinceRankList.push(row);
        }
        that.setData({
          shopRankList: shopRankList,
          flavors: shopRankList[0].flavors,
          monthSale: formatNumberW(res.data.aggregations.monthSale.value),
          shopCount: res.data.hits.total,
          avgSale: Math.round(res.data.aggregations.monthSale.value / res.data.hits.total),
          provinceRankList: provinceRankList
        });
        wx.hideLoading()
        //console.log(res.data.data)
      }
    })
  },
  getShopList(index) {
    var that = this;
    wx.showLoading({
      title: '加载中',
    })
    var searchBody = {
      "query": {
        "bool": {
          "must": [{
              "term": {
                "brand": {
                  "value": this.data.brandName
                }
              }
            },
            {
              "term": {
                "province": {
                  "value": this.data.provinceRankList[index].key
                }
              }
            }
          ]
        }
      },
      "size": 50,
      "sort": [{
        "month_sale": {
          "order": "desc"
        }
      }]
    }

    wx.request({
      url: config.apiUrl + "/shop/ele/search", // 仅为示例，并非真实的接口地址
      data: searchBody,
      header: {
        'content-type': 'application/json' // 默认值
      },
      method: "post",
      success(res) {
        var shopRankList = [];
        var hits = res.data.hits.hits;
        for (var i = 0; i < hits.length; i++) {
          var row = hits[i]['_source'];
          row.label = row.city + " " + row.district;
          shopRankList.push(row);
        }

        if (index == 0) {
          that.setData({
            shopRankList1: shopRankList,
          });
        }
        else if (index == 1) {
          that.setData({
            shopRankList2: shopRankList,
          });
        }
        else if (index == 2) {
          that.setData({
            shopRankList3: shopRankList,
          });
        }
        wx.hideLoading()
        //console.log(res.data.data)
      }
    })
  },
  getPhoneNumber: function(e) {
    console.log(e.detail.errMsg)
    console.log(e.detail.iv)
    console.log(e.detail.encryptedData)
    var brand = e.target.dataset.brand;
    if (e.detail.errMsg == 'getPhoneNumber:ok') {
      wx.request({
        url: config.apiUrl + "/user/applyForAlliance", // 仅为示例，并非真实的接口地址
        data: {
          brandName: brand,
          encryptedData: e.detail.encryptedData,
          iv: e.detail.iv
        },
        header: {
          'content-type': 'application/json', // 默认值
          'token': app.token
        },
        method: "get",
        success(res) {
          //wx.showModal({ title: "提交成功", content: "您的手机号已成功提交，我们将会派专人与你取得联系" })
          wx.navigateTo({
            url: '/pages/join-info/join-info',
            success: function(res) {},
            fail: function(res) {},
            complete: function(res) {},
          })
        }
      })
    }
  },
  onTabChange: function (e) {
    console.log(e)
    var provinceIndex = e.detail.index-1;
    if (provinceIndex <0){
      return
    }
    if (provinceIndex == 0) {
      if (this.data.shopRankList1.length==0){
        this.getShopList(provinceIndex);
      }
    }
    else if (provinceIndex == 1) {
      if (this.data.shopRankList2.length == 0) {
        this.getShopList(provinceIndex);
      }
    }
    else if (provinceIndex == 2) {
      if (this.data.shopRankList3.length == 0) {
        this.getShopList(provinceIndex);
      }
    }
  }
})
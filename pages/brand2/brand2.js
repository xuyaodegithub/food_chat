const app = getApp();
var regions = require('../../libs/regions2.js');
var foodCates = require('../../libs/foodCates.js');
import {
  formatNumberW
} from '../../utils/util.js'
var config = require('../../config.js');
// pages/brand2/brand2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selectedArea: "全国",
    selectedProvince: "全国",
    selectedCity: "全部",
    showFoodCates: false,
    brandCates: foodCates,
    selectedTagIndex: 0,
    foodCate: "全部",
    searchText: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.getBrands();
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
  bindRegionChange: function(e) {
    console.log(e)
    var selectedArea = e.detail.selectedProvince;
    if (e.detail.selectedCity != '全部') {
      selectedArea += " " + e.detail.selectedCity
    }
    this.setData({
      selectedArea: selectedArea,
      selectedProvince: e.detail.selectedProvince,
      selectedCity: e.detail.selectedCity
    });
    this.getBrands();
  },

  showCates: function() {
    this.setData({
      showFoodCates: true
    });
  },
  closeFoodCates: function () {
    this.setData({
      showFoodCates: false
    });
  },
  selectTag(event) {
    console.log(event.target.dataset);
    var foodCate = "全部"
    if (event.target.dataset.index != 0){
      foodCate = this.data.brandCates[event.target.dataset.index -1].key;
    }

    this.setData({
      selectedTagIndex: event.target.dataset.index,
      foodCate: foodCate,
      showFoodCates: false
    });
    var flavor = null;
    this.getBrands();
  },

  getBrands() {
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
            },
            "img": {
              "terms": {
                "field": "image_path.keyword",
                "size": 1
              }
            },
            "hot_province": {
              "terms": {
                "field": "city",
                "size": 2
              }
            },
          }
        }
      }
    }

    var conditions = [];

    if (this.data.searchText != '') {
      conditions.push({
        "match": {
          "name.ikmax": this.data.searchText
        }
      })
    }
    if (this.data.foodCate != '全部') {
      conditions.push({
        "term": {
          "flavors": this.data.foodCate
        }
      })
    }
    if (this.data.selectedProvince != '全国') {
      conditions.push({
        "term": {
          "province": this.data.selectedProvince
        }
      })
    }

    if (this.data.selectedCity != '全部') {
      conditions.push({
        "term": {
          "city": this.data.selectedCity
        }
      })
    }

    if (conditions.length > 0) {
      brandSearchData.query = {
        "bool": {
          "must": conditions
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
            row.monthSaleStr = formatNumberW(row.monthSale.value);
            row.hot_area = "";
            if (row.hot_province.buckets.length > 0) {
              row.hot_area += row.hot_province.buckets[0].key;
            }
            if (row.hot_province.buckets.length > 1) {
              row.hot_area += " " + row.hot_province.buckets[1].key;
            }

            row.brandImg = "";
            if (row.img.buckets.length > 0) {
              var imgStr = "";
              imgStr = row.img.buckets[0].key;
              row.brandImg = "https://fuss10.elemecdn.com/" + imgStr.substr(0, 1) + "/" + imgStr.substr(1, 2) + "/" + imgStr.substr(3) + "." + imgStr.substr(32);
            }


            result.push(row);
          }
        }

        that.setData({
          brandRankList: result,
        });
        wx.hideLoading()
        //console.log(res.data.data)
      }
    })
  },
  onSearch: function(event) {
    this.data.searchText = event.detail;
    this.getBrands();
  },

  onCancel: function(event) {
    // this.data.searchText = "";
    // this.getBrands();
  },

  openBrandDetail: function(event) {
    var brand = event.currentTarget.dataset.brand;
    wx.navigateTo({
      url: '/pages/brand-detail/brand-detail?brand=' + brand,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  getPhoneNumberCatch: function(e) {

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

  getPhoneNumber2: function (e) {
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
            url: '/pages/brand-enter/brand-enter',
            success: function (res) { },
            fail: function (res) { },
            complete: function (res) { },
          })
        }
      })
    }
  },
})
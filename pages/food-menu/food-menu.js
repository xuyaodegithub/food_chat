var regions = require('../../libs/regions2.js');
var foodCates = require('../../libs/foodCates.js');
var res = require('./food-menu-mock.js');
import { formatNumberW } from '../../utils/util.js'
var config = require('../../config.js');
var province_map = {
  "辽宁省": "liaoning",
  "安徽省": "anhui",
  "河北省": "hebei",
  "内蒙古自治区": "neimenggu",
  "山东省": "shandong",
  "北京市": "beijing",
  "陕西省": "shanxi",
  "吉林省": "jilin",
  "宁夏回族自治区": "ningxia",
  "甘肃省": "gansu",
  "湖南省": "hunan",
  "云南省": "yunnan",
  "贵州省": "guizhou",
  "广东省": "guangdong",
  "浙江省": "zhejiang",
  "福建省": "fujian",
  "江苏省": "jiangsu",
  "河南省": "henan",
  "四川省": "sichuan",
  "山西省": "shanxi2",
  "江西省": "jiangxi",
  "广西壮族自治区": "guangxi",
  "湖北省": "hubei",
  "青海省": "qinghai",
  "海南省": "hainan",
  "新疆维吾尔自治区": "xinjiang",
  "台湾省": "taiwan",
  "天津市": "tianjin",
  "西藏自治区": "xizang",
  "黑龙江省": "heilongjiang",
  "上海市": "shanghai",
  "重庆市": "chongqing"
}

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
  onLoad: function (options) {
    this.getBrands();
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
  bindRegionChange: function (e) {
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

  showCates: function () {
    this.setData({
      showFoodCates: true
    });
  },
  selectTag(event) {
    console.log(event.target.dataset);
    this.setData({
      selectedTagIndex: event.target.dataset.index,
      foodCate: this.data.brandCates[event.target.dataset.index].key,
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
    //that.onListResponse(res);
    if (this.data.selectedProvince != '全国') {
      this.searchInProvince(this.data.selectedProvince);
    }
    else{
      this.searchFull();
    }
   
    //this.searchInProvince("浙江省");
  },

  searchFull(){
    var that = this;
    var index_name = "meituan_food_top2000";

    var searchBody = {

      "size": 100,
      "sort": [
        {
          "month_sale": {
            "order": "desc"
          }
        }
      ],
    }

    var conditions = [];
    searchBody.query = {
      "bool": {
        "must": [
          {
            "range": {
              "avg_price": {
                "gte": 10
              }
            }
          }
        ]
      }
    }
    if (this.data.searchText != '') {
      searchBody.query.bool.must.push({
        "match_phrase": {
          "name": this.data.searchText
        }
      });
    }

    wx.request({
      url: config.apiUrl + "/search/essearch?indexName=" + index_name, // 仅为示例，并非真实的接口地址
      data: searchBody,
      header: {
        'content-type': 'application/json' // 默认值
      },
      method: "post",
      success(res) {
        var result = [];
        var list = res.data.hits.hits;
        for (var i = 0; i < list.length; i++) {
          var row = list[i]._source;
          row.key = row.name;
          row.avgSalesCount = Math.round(row.month_sale / row.shop_count);
          row.monthSaleStr = formatNumberW(row.month_sale);
          row.hot_area = "";
          if (row.hot_city.length > 0) {
            row.hot_area += row.hot_city[0];
          }
          if (row.hot_city.length > 1) {
            row.hot_area += " " + row.hot_city[1];
          }

          row.foodImg = row.picture;
          row.hot_brandStr = "";
          if (row.hot_brand.length > 0) {
            row.hot_brandStr += row.hot_brand[0];
          }
          if (row.hot_brand.length > 1) {
            row.hot_brandStr += " " + row.hot_brand[1];
          }
          result.push(row);
        }
        that.setData(
          {
            brandRankList: result,
          }
        );
        wx.hideLoading()
      }
    })
  },

  searchInProvince(province){
    var that = this;
    var index_name = "meituan_food_20190322_" + province_map[province];

    var searchBody = {

      "size": 0,
      "aggs": {
        "NAME": {
          "terms": {
            "field": "name.keyword",
            "size": 100,
            "order": {
              "sale": "desc"
            }
          },

          "aggs": {
            "picture": {
              "top_hits": {
                "size": 1,
                "_source": ["picture"]
              }
            },
            "sale": {
              "sum": {
                "field": "monthSaled"
              }
            },
            "avg_price": {
              "avg": {
                "field": "price"
              }
            },
            "hot_province": {
              "terms": {
                "field": "city",
                "size": 2
              }
            },
            "hot_brand": {
              "terms": {
                "field": "brand",
                "size": 2
              }
            }
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

    if (this.data.selectedCity != '全部') {
      conditions.push({
        "term": {
          "city": this.data.selectedCity
        }
      })
    }

    if (conditions.length > 0) {
      searchBody.query = {
        "bool": {
          "must": conditions
        }
      }
    }

    wx.request({
      url: config.apiUrl + "/search/essearch?indexName=" + index_name, // 仅为示例，并非真实的接口地址
      data: searchBody,
      header: {
        'content-type': 'application/json' // 默认值
      },
      method: "post",
      success(res) {
        that.onListResponse(res);
      }
    })
  },

  onListResponse:function(res){
    var result = [];
    var list = res.data.aggregations.NAME.buckets;
    for (var i = 0; i < list.length; i++) {
      var row = list[i];
      if (row.key != '') {
        row.avgSalesCount = Math.round(row.sale.value / row.doc_count);
        row.monthSaleStr = formatNumberW(row.sale.value);
        row.hot_area = "";
        if (row.hot_province.buckets.length > 0) {
          row.hot_area += row.hot_province.buckets[0].key;
        }
        if (row.hot_province.buckets.length > 1) {
          row.hot_area += " " + row.hot_province.buckets[1].key;
        }

        row.foodImg = row.picture.hits.hits[0]._source.picture;
        row.hot_brandStr = "";
        if (row.hot_brand.buckets.length > 0) {
          row.hot_brandStr += row.hot_brand.buckets[0].key;
        }
        if (row.hot_brand.buckets.length > 1) {
          row.hot_brandStr += " " +row.hot_brand.buckets[1].key;
        }
        result.push(row);
      }
    }

    this.setData(
      {
        brandRankList: result,
      }
    );
    wx.hideLoading()
  },

  onSearch: function (event) {
    this.data.searchText = event.detail;
    this.getBrands();
  },

  onCancel: function (event) {
    // this.data.searchText = "";
    // this.getBrands();
  },
})
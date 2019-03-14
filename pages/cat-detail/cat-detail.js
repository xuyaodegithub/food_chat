import * as echarts from '../../ec-canvas/echarts';
const app = getApp();
var config = require('../../config.js');
// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    range: [],
    region: ['广东省', '广州市', '海珠区'],
    current: "tab1",
    categoryListClass: "",
    shopListClass: "",
    areaListClass: "",
    ec: {
      lazyLoad: true // 延迟加载
      //onInit: initChart
    },
    catRankList: [],
    areaRankList: [],
    weekData: [],
    shopRankList: [],
    shopCount: "--",
    salesCount: "--",
    avgSalesCount: "--",
    regionData: {
      selectedProvince: "浙江省",
      selectedCity: "杭州",
      selectedDistrict: {
        name: "全部",
        id: 2390
      }
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.echartsComponnet = this.selectComponent('#mychart');
    var regionData = {};
    if (options.selectedProvince || options.selectedCity || options.selectedDistrict) {
      regionData = {
        //selectedProvince: selectedProvince,
        selectedCity: options.selectedCity,
        selectedDistrict: {
          name: options.selectedDistrict,
          id: options.districtId
        },
        // selectedArea: {
        //   name: options.selectedArea,
        //   id: options.areaId
        // },
        food_name: options.food_name
      };
      if (options.selectedArea){
        regionData.selectedArea = {
           name: options.selectedArea,
           id: options.areaId
        }
      }
    }
    else {
      regionData = {
        //selectedProvince: "浙江省",
        selectedCity: "杭州",
        selectedDistrict: {
          name: "西湖区",
          id: 2396
        },
        selectedArea: {
          name: "303生活广场",
          id: 16839
        },
        food_name: ""
      };
    }
    this.setData(
      {
        regionData: regionData
      }
    )
    this.requestData(regionData);


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

  handleChange: function ({ detail }) {
    this.setData({
      current: detail.key
    });
    if (detail.key == "tab1") {
      this.setData({
        areaListClass: "",
        categoryListClass: "hidden",
        shopListClass: "hidden",
      });
    }
    else if (detail.key == "tab2") {
      this.setData({
        areaListClass: "hidden",
        categoryListClass: "",
        shopListClass: "hidden",
      });
    }
    else if (detail.key == "tab3") {
      this.setData({
        areaListClass: "hidden",
        categoryListClass: "hidden",
        shopListClass: "",
      });
    }
  },
  bindRegionChange: function (e) {
    //console.log('picker发送选择改变，携带值为', e)
    var regionData = e.detail;
    this.requestData(regionData);
  },
  openCatChart: function (e) {
    wx.navigateTo({
      url: '/pages/cat-chart/cat-chart',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })

  },
  openMap: function (e) {
    var lat = this.data.areaRankList[0].lat;
    var lng = this.data.areaRankList[0].lng;
    var grade = this.weekRequestData.grade;
    var regionId = this.weekRequestData.regionId;
    wx.navigateTo({
      url: '/pages/business-map/business-map?lat=' + lat + '&lng=' + lng + '&grade=' + grade + '&regionId=' + regionId,
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })

  },
  getOptionFromWeekData: function (weekData) {

    weekData.reverse();
    var option = {
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['月销总量'],
        top: 20,
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['01-13', '01-14', '01-15', '01-16', '01-17', '01-18', '01-19']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: '月销总量',
          type: 'line',
          stack: '总量',
          data: [120, 132, 101, 134, 90, 230, 210]
        },
        // {
        //   name: '联盟广告',
        //   type: 'line',
        //   stack: '总量',
        //   data: [220, 182, 191, 234, 290, 330, 310]
        // }
      ]
    };

    option.xAxis.data = [];
    //option.legend.selected = {};
    option.series[0].data = [];
    for (var i = 0; i < weekData.length; i++) {
      option.xAxis.data.push(weekData[i].dateTime);
      option.series[0].data.push(weekData[i].salesCount);
      //option.legend.selected[catRankList[i].food_name] = i < 10;

    }
    return option;

  },
  //初始化图表
  init_echarts: function (option) {
    this.echartsComponnet.init((canvas, width, height) => {
      // 初始化图表
      const Chart = echarts.init(canvas, null, {
        width: width,
        height: height
      });
      Chart.setOption(option);

      //此处为折线图的点击事件（可忽略）
      Chart.on('click', function (handler, context) {
        console.dir(handler.value);
        xwx.toast("" + handler.value + "").icon("none").show();
      });

      ////此处为折线图的点击事件

      // 注意这里一定要返回 chart 实例，否则会影响事件处理等
      return Chart;
    });
  },

  requestData: function (regionData) {

    wx.showLoading({
      title: '加载中',
    })
    var that = this;
    var weekRequestData = {};
    var shopRankRequestData = { page: 1, pageSize: 100 };
    weekRequestData.grade = 2;
    if (regionData.selectedDistrict.name != '全部') {
      weekRequestData.grade = 3;
      shopRankRequestData.district = regionData.selectedDistrict.name
    }
    weekRequestData.regionId = regionData.selectedDistrict.id;
    if (regionData.selectedArea){
      weekRequestData.grade = 4;
      weekRequestData.regionId = regionData.selectedArea.id;
    }
    
   
    
    shopRankRequestData.city = regionData.selectedCity
    
    if (regionData.selectedArea){
      shopRankRequestData.area_name = regionData.selectedArea.name
    }
    
    shopRankRequestData.food_name = regionData.food_name
    this.weekRequestData = weekRequestData;
    

    wx.request({
      url: config.apiUrl + "/area/week", // 仅为示例，并非真实的接口地址
      data: weekRequestData,
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        // var result = [];
        // for (var i = 0; i < res.data.data.length; i++) {
        //   var row = res.data.data[i];
        //   row.avgSalesCount = parseInt(row.avgSalesCount);
        //   result.push(row);
        // }

        var weekData = [].concat(res.data.data);
        var option = that.getOptionFromWeekData(weekData);
        that.init_echarts(option);
        that.setData(
          {
            weekData: res.data.data,
            shopCount: res.data.data[0].shopCount,
            salesCount: res.data.data[0].salesCount,
            avgSalesCount: parseInt(res.data.data[0].salesCount / res.data.data[0].shopCount)
          }
        );
        //console.log(res.data.data)
      }
    })


    wx.request({
      url: config.apiUrl + "/shop/ele/rate", // 仅为示例，并非真实的接口地址
      data: shopRankRequestData,
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        // var result = [];
        // for (var i = 0; i < res.data.data.length; i++) {
        //   var row = res.data.data[i];
        //   row.avgSalesCount = parseInt(row.avgSalesCount);
        //   result.push(row);
        // }
        that.setData(
          {
            shopRankList: res.data.data
          }
        );
        wx.hideLoading()
        //console.log(res.data.data)
      }
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

  headTabChange: function (e) {
    wx.showToast({
      title: `美团数据正在开发中`,
      icon: 'none'
    });
  },

})
import * as echarts from '../../ec-canvas/echarts';
const app = getApp();
var config = require('../../config.js');

function initChart(canvas, width, height) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height
  });
  canvas.setChart(chart);


  var option = {
    title: {
      text: '',
      left: 'center'
    },
    color: ["#37A2DA", "#67E0E3", "#9FE6B8"],
    legend: {
      data: ['A', 'B', 'C'],
      top: 50,
      left: 'center',
      backgroundColor: 'red',
      z: 100
    },
    grid: {
      containLabel: true
    },
    tooltip: {
      show: true,
      trigger: 'axis'
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
      // show: false
    },
    yAxis: {
      x: 'center',
      type: 'value',
      splitLine: {
        lineStyle: {
          type: 'dashed'
        }
      }
      // show: false
    },
    series: [{
      name: 'A',
      type: 'line',
      smooth: true,
      data: [18, 36, 65, 30, 78, 40, 33]
    }, {
      name: 'B',
      type: 'line',
      smooth: true,
      data: [12, 50, 51, 35, 70, 30, 20]
    }, {
      name: 'C',
      type: 'line',
      smooth: true,
      data: [10, 30, 31, 50, 40, 20, 10]
    }]
  };

  option = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [{
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      type: 'line'
    }]
  };
  option = {
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
  chart.setOption(option);
  return chart;
}
// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    range:[],
    region: ['广东省', '广州市', '海珠区'],
    current:"tab1",
    categoryListClass:"",
    shopListClass: "",
    areaListClass: "",
    ec: {
      lazyLoad: true // 延迟加载
      //onInit: initChart
    },
    catRankList:[],
    areaRankList:[],
    weekData:[],
    shopRankList: [],
    shopCount:"--",
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
    var regionData ={};
    if (options.selectedProvince || options.selectedCity || options.selectedDistrict ){
      regionData = {
        selectedProvince: selectedProvince,
        selectedCity: selectedCity,
        selectedDistrict: {
          name: options.selectedDistrict,
          id: options.regionId
        }
      };
    }
    else{
      regionData = {
        selectedProvince:"浙江省",
        selectedCity: "杭州",
        selectedDistrict:{
          name:"全部",
          id: 2390
        }
      };
    }
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

  handleChange:function({detail}){
    this.setData({
      current: detail.key
    });
    if(detail.key == "tab1"){
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
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
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

  requestData:function(regionData){

    
    var that = this;

    var foodCatRateData = {};
    var areaRankRequestData = {
      page:1,
      pageNo:100
    };
    var weekRequestData = {};
    var shopRankRequestData = {page:1,pageSize:100};
    areaRankRequestData.regionId = regionData.selectedDistrict.id;
    if (regionData.selectedProvince != '全国'){
      foodCatRateData.province = regionData.selectedProvince;
      areaRankRequestData.grade = 1;
      if (regionData.selectedCity != '全部') {
        foodCatRateData.city = regionData.selectedCity;
        shopRankRequestData.city = regionData.selectedCity;
        areaRankRequestData.grade = 2;
        if (regionData.selectedDistrict.name != '全部') {
          foodCatRateData.district = regionData.selectedDistrict.name;
          shopRankRequestData.district = regionData.selectedDistrict.name;
          areaRankRequestData.grade = 3;
        }
        else{
          areaRankRequestData.grade = 2;
        }
      }
      else{
        areaRankRequestData.grade = 1;
        areaRankRequestData.regionId = regionData.selectedDistrict.id;
      }
    }
    else{
      areaRankRequestData.grade = 1;
      areaRankRequestData.regionId = 0;
    }
    weekRequestData.grade = areaRankRequestData.grade;
    weekRequestData.regionId = areaRankRequestData.regionId;

    this.weekRequestData = weekRequestData;
    wx.request({
      url: config.apiUrl + "/food/ele/rate", // 仅为示例，并非真实的接口地址
      data: foodCatRateData,
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        that.setData(
          {
            catRankList: res.data.data
          }
        );
        //console.log(res.data.data)
      }
    })

    wx.request({
      url: config.apiUrl + "/area/rank", // 仅为示例，并非真实的接口地址
      data: areaRankRequestData,
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        var result = [];
        for (var i = 0; i < res.data.data.length; i++) {
          var row = res.data.data[i];
          row.avgSalesCount = parseInt(row.avgSalesCount);
          result.push(row);
        }

        that.setData(
          {
            areaRankList: result
          }
        );
        //console.log(res.data.data)
      }
    })

    wx.request({
      url: config.apiUrl + "/area/week", // 仅为示例，并非真实的接口地址
      data:weekRequestData,
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
        //console.log(res.data.data)
      }
    })
  },

  openAreaDetail:function(e){
    console.log(e.currentTarget.dataset.index);

 
    var itemData = this.data.areaRankList[e.currentTarget.dataset.index];
    wx.navigateTo({
      url: '/pages/area-detail/area-detail?selectedCity=' + itemData.city + '&selectedDistrict=' + itemData.district + '&districtId=' + itemData.districtId + '&selectedArea=' + itemData.area + '&areaId=' + itemData.areaId,
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  }

})
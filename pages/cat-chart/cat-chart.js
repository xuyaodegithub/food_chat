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
    text: '商圈品类分布',
    subtext: '纯属虚构',
    x: 'center'
  },
  tooltip: {
    trigger: 'item',
    formatter: "{a} <br/>{b} : {c} ({d}%)"
  },
  legend: {
    orient: 'vertical',
    left: 'left',
    data: ['盖浇饭', '奶茶饮品', '川湘菜', '中式简餐', '汉堡', '木桶饭', '麻辣烫', '米粉面馆', '凉粉', '小吃']
  },
  series: [
    {
      name: '访问来源',
      type: 'pie',
      radius: '55%',
      center: ['50%', '60%'],
      data: [
        { value: 335, name: '盖浇饭' },
        { value: 310, name: '奶茶饮品' },
        { value: 234, name: '川湘菜' },
        { value: 135, name: '中式简餐' },
        { value: 1548, name: '汉堡' },
        { value: 1548, name: '木桶饭' },
        { value: 1548, name: '麻辣烫' },
        { value: 1548, name: '凉粉' },
        { value: 1548, name: '小吃' }
      ],
      itemStyle: {
        emphasis: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
};
  chart.setOption(option);
  return chart;
}
// pages/cat-chart/cat-chart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ec: {
      //onInit: initChart
      lazyLoad: true // 延迟加载
    },
    catRankList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.echartsComponnet = this.selectComponent('#mychart');
    var that = this;
    wx.request({
      url: config.apiUrl + "/food/ele/rate", // 仅为示例，并非真实的接口地址
      data: {
        city: '杭州',
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        that.setData(
          {
            catRankList: res.data.data
          }
        );
        var options = that.getOptionFromCatList(res.data.data);
        that.init_echarts(options);
        //console.log(res.data.data)
      }
    })
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

  getOptionFromCatList: function (catRankList){
    var option = {
      title: {
        text: '商圈品类分布',
        subtext: '纯属虚构',
        x: 'center'
      },
      tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      legend: {
        type: 'scroll',
        orient: 'vertical',
        right: 10,
        top: 20,
        bottom: 20,
        //orient: 'vertical',
        //left: 'left',
        data: ['盖浇饭', '奶茶饮品', '川湘菜', '中式简餐', '汉堡', '木桶饭', '麻辣烫', '米粉面馆', '凉粉', '小吃']
      },
      series: [
        {
          name: '访问来源',
          type: 'pie',
          radius: '40%',
          center: ['40%', '50%'],
          data: [
            { value: 335, name: '盖浇饭' },
            { value: 310, name: '奶茶饮品' },
            { value: 234, name: '川湘菜' },
            { value: 135, name: '中式简餐' },
            { value: 1548, name: '汉堡' },
            { value: 1548, name: '木桶饭' },
            { value: 1548, name: '麻辣烫' },
            { value: 1548, name: '凉粉' },
            { value: 1548, name: '小吃' }
          ],
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    };
    
    option.legend.data = [];
    option.legend.selected = {};
    option.series[0].data = [];
    for (var i = 0; i < catRankList.length;i++){
      option.legend.data.push(catRankList[i].food_name);
      option.series[0].data.push({ value: catRankList[i].recent_order_num,name:catRankList[i].food_name});
      //option.legend.selected[catRankList[i].food_name] = i < 10;
      
    }
    return option;

  }

})
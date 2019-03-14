//var amapFile = require('../../libs/amap-wx.js');
var config = require('../../config.js');
// pages/business-map/business-map.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lat: 30.205185,
    lng: 120.202948,
    markers: [{
      //iconPath: '/resources/others.png',
      id: 0,
      title:"月销15823",
      latitude: 30.205185,
      longitude: 120.202948,
      width: 50,
      height: 50,
      callout:{
        content: "月销15823",
        display: 'ALWAYS',
        bgColor:"#33FFFFFF"
      }
    }],
    circles:[
      // {
      //   latitude: 30.205185,
      //   longitude: 120.202948,
      //   radius: 2000,
      //   color: "#FFFF0033",
      //   fillColor:"#FFFF0033",
      //   strokeWidth:1
      // },
      // {
      //   latitude: 30.205185,
      //   longitude: 120.252948,
      //   radius: 2000,
      //   color: "#FFFF0033",
      //   fillColor: "#FFFF0033",
      //   strokeWidth: 1
      // },
      // {
      //   latitude: 30.155185,
      //   longitude: 120.202948,
      //   radius: 2000,
      //   color: "#FFFF0033",
      //   fillColor: "#FFFF0033",
      //   strokeWidth: 1
      // },
    ],
    areaList:[],
    selectedItem:{},
    polyline: [{
      points: [{
        longitude: 113.3245211,
        latitude: 23.10229
      }, {
        longitude: 113.324520,
        latitude: 23.21229
      }],
      color: '#FF0000DD',
      width: 2,
      dottedLine: true
    }],
    controls: [{
      id: 1,
      iconPath: '/resources/location.png',
      position: {
        left: 0,
        top: 300 - 50,
        width: 50,
        height: 50
      },
      clickable: true
    }]
  },
  regionchange(e) {
    console.log(e.type)
  },
  markertap(e) {
    //console.log(e.markerId)
    this.setData(
      {
        selectedItem: this.areaList[e.markerId]
      }
    )
  },
  controltap(e) {
    console.log(e.controlId)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '加载中',
    })
    var that = this;
    // var myAmapFun = new amapFile.AMapWX({ key: '218b64057c4c5d63a639216de21c8ac2' });
    // myAmapFun.getPoiAround({
    //   success: function (data) {
    //     //成功回调
    //   },
    //   fail: function (info) {
    //     //失败回调
    //     console.log(info)
    //   }
    // })
    this.setData({
      lat: options.lat,
      lng: options.lng,
    })
    var that = this;
    wx.request({
      url: config.apiUrl + "/area/rank", // 仅为示例，并非真实的接口地址
      data: {
        grade: options.grade,
        regionId: options.regionId,
        page:1,
        pageNo:100
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        var circles = [];
        var markers = [];
        var areaList = [];
        for (var i = 0; i < res.data.data.length; i++) {
          var row = res.data.data[i];
          row.avgSalesCount = parseInt(row.avgSalesCount);
          areaList.push(row)
          var circle = {
            latitude: row.lat,
            longitude: row.lng,
            radius: 1000,
            color: "#FFFF0033",
            fillColor: "#FFFF0033",
            strokeWidth: 1
          }
          circles.push(circle);

          var marker = {
            //iconPath: '/resources/others.png',
            id: i,
            title: "月销" + row.salesCount,
            latitude: row.lat,
            longitude: row.lng,
            width: 50,
            height: 50,
            //title: row.salesCount,
            //label: row.salesCount,
            callout: {
              content: "月销" + row.salesCount,
              display: 'ALWAYS',
              //bgColor: "#33FFFFFF"
            }
          }
          markers.push(marker);
        }

        that.areaList = areaList;
        that.setData(
          {
            circles: circles,
            markers: markers
          }
        );
        wx.hideLoading()
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

  }
})
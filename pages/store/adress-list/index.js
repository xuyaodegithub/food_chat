// pages/store/adress-list/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      adressList:[
        {
          userName: '张二麻子',
          telNumber: '13256564789',
          detailInfo: '浙江省 杭州市 滨江区新东方国际5楼101室',
          id:1
        }, {
          userName: '王小二',
          telNumber: '13256564789',
          detailInfo: '浙江省 杭州市 滨江区新东方国际5楼101室',
          id: 2
        }, {
          userName: '李狗蛋',
          telNumber: '13256564789',
          detailInfo: '浙江省 杭州市 滨江区新东方国际5楼101室',
          id: 3
        }, {
          userName: '李狗蛋',
          telNumber: '13256564789',
          detailInfo: '浙江省 杭州市 滨江区新东方国际5楼101室',
          id: 3
        }, {
          userName: '李狗蛋',
          telNumber: '13256564789',
          detailInfo: '浙江省 杭州市 滨江区新东方国际5楼101室',
          id: 3
        }, {
          userName: '李狗蛋',
          telNumber: '13256564789',
          detailInfo: '浙江省 杭州市 滨江区新东方国际5楼101室',
          id: 3
        }, {
          userName: '李狗蛋',
          telNumber: '13256564789',
          detailInfo: '浙江省 杭州市 滨江区新东方国际5楼101室',
          id: 3
        },
      ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  addNew(){
    wx.navigateTo({
      url: '../addNewAdress/index',
    })
  },
  useWechatAdress(){
      let _self = this
      wx.getSetting({
        success(res) {
          // 如果没有则获取授权
          if (!res.authSetting['scope.address']) {
            wx.authorize({
              scope: 'scope.address',
              success() {
                _self.selectAdress()
              },
              fail() {
                wx.showModal({
                  title: '提示',
                  content: '您还未授权使用微信地址',
                  confirmText: '去授权',
                  success(res) {
                    if (res.confirm) {
                      // console.log('用户点击确定')
                      wx.openSetting({
                        success(res) {
                          console.log(res.authSetting)
                          // res.authSetting = {
                          //   "scope.userInfo": true,
                          //   "scope.userLocation": true
                          // }
                        }
                      })
                    } else if (res.cancel) {
                      console.log('用户点击取消')
                    }
                  }
                })
              }
            })
          } else {
            // 有则直接保存
            _self.selectAdress()
          }
        }
      })
  },
  selectAdress() {//选择微信地址
    let _self = this
    wx.chooseAddress({
      success(res) {
        console.log(res)
        if (res.errMsg !== 'chooseAddress:ok') {
          wx.showToast({ title: res.errMsg, })
          return
        }
        _self.updataThis(res)
        // _self.setData({
        //   adressMess: res
        // })
      }
    })
  },
  choseThis(e){//选择某个地址
   let item=e.currentTarget.dataset.item
    this.updataThis(item)
  },
  updataIt(e){//编辑
    let item = e.currentTarget.dataset.item
    wx.navigateTo({
      url: `../addNewAdress/index?id=${item.id}`,
    })
  },
  updataThis(res){//修改上页数据，并返回
    let pages = getCurrentPages();
    let prevPage = pages[pages.length - 2];  //上一个页面
    let info = prevPage.data //取上页data里的数据也可以修改
    prevPage.setData({ adressMess: res })//设置数据
    wx.navigateBack({
      delta: 1
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
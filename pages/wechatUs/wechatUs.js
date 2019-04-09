// pages/wechatUs/wechatUs.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  saveImg() {
    // this.closeEwm=null
    let _self = this
    wx.getSetting({
      success(res) {
        // 如果没有则获取授权
        if (!res.authSetting['scope.writePhotosAlbum']) {
          wx.authorize({
            scope: 'scope.writePhotosAlbum',
            success() {
              _self.afterCanSaveImg()
            },
            fail() {
              wx.showModal({
                title: '提示',
                content: '您还未授权访问相册权限',
                confirmText:'去授权',
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
          _self.afterCanSaveImg()
        }
      }
    })
  },
  //保存图片
  afterCanSaveImg() {
    let _self = this
    wx.showModal({
      title: '提示',
      content: '确认保存图片么？',
      success: function (res) {
        if (res.confirm) {
          // console.log('用户点击确定')
              //  console.log(res);
          wx.getImageInfo({////////////////////////
            src: '../../images/first.jpg',
            success(res) {
              wx.saveImageToPhotosAlbum({
                filePath: res.path,
                success() {
                  wx.showToast({
                    title: '保存成功'
                  })
                },
                fail() {
                  wx.showToast({
                    title: '保存失败',
                    icon: 'none'
                  })
                }
              })
            }
          })
            
        }
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
  // onShareAppMessage: function () {

  // }
})
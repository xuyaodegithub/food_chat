// pages/store/listIndex/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    classIndex:0,
      PList:[
        {
          title: '方形餐盒', List: [
            { title: '350方/天天伴/400套十三水十三水所所', sall: '3568', price: '93.50' ,di:1,img:'https://gd3.alicdn.com/imgextra/i2/273229813/O1CN01gJ9HKK2MMP7YNOeee_!!273229813.jpg'},
            { title: '350方/天天伴/400套十三水十三水所所', sall: '3568', price: '93.50', di: 2,img: 'https://gd3.alicdn.com/imgextra/i2/273229813/O1CN01gJ9HKK2MMP7YNOeee_!!273229813.jpg'},
            { title: '350方/天天伴/400套十三水十三水所所', sall: '3568', price: '93.50', di: 1,img: 'https://gd3.alicdn.com/imgextra/i2/273229813/O1CN01gJ9HKK2MMP7YNOeee_!!273229813.jpg' },
            { title: '350方/天天伴/400套十三水十三水所所', sall: '3568', price: '93.50', di: 1,img: 'https://gd3.alicdn.com/imgextra/i2/273229813/O1CN01gJ9HKK2MMP7YNOeee_!!273229813.jpg' },
            { title: '350方/天天伴/400套十三水十三水所所', sall: '3568', price: '93.50', di: 1,img: 'https://gd3.alicdn.com/imgextra/i2/273229813/O1CN01gJ9HKK2MMP7YNOeee_!!273229813.jpg' },
            { title: '350方/天天伴/400套十三水十三水所所', sall: '3568', price: '93.50', di: 1,img: 'https://gd3.alicdn.com/imgextra/i2/273229813/O1CN01gJ9HKK2MMP7YNOeee_!!273229813.jpg' },
            { title: '350方/天天伴/400套十三水十三水所所', sall: '3568', price: '93.50', di: 1, img: 'https://gd3.alicdn.com/imgextra/i2/273229813/O1CN01gJ9HKK2MMP7YNOeee_!!273229813.jpg' },
            { title: '350方/天天伴/400套十三水十三水所所', sall: '3568', price: '93.50', di: 1,img: 'https://gd3.alicdn.com/imgextra/i2/273229813/O1CN01gJ9HKK2MMP7YNOeee_!!273229813.jpg' },
            { title: '350方/天天伴/400套十三水十三水所所', sall: '3568', price: '93.50', di: 1,img: 'https://gd3.alicdn.com/imgextra/i2/273229813/O1CN01gJ9HKK2MMP7YNOeee_!!273229813.jpg' },
            { title: '350方/天天伴/400套十三水十三水所所', sall: '3568', price: '93.50', di: 1, img: 'https://gd3.alicdn.com/imgextra/i2/273229813/O1CN01gJ9HKK2MMP7YNOeee_!!273229813.jpg' },
          ]
        }, {
          title: '圆形餐盒', List: [
            { title: '350方/天天伴/400套十三水十三水所所', sall: '3568', price: '93.50', di: 1, img: 'https://gd2.alicdn.com/imgextra/i3/386289545/TB2644Sv9XlpuFjy0FeXXcJbFXa_!!386289545.jpg' }, 
            { title: '350方/天天伴/400套十三水十三水所所', sall: '3568', price: '93.50', di: 1, img: 'https://gd2.alicdn.com/imgextra/i3/386289545/TB2644Sv9XlpuFjy0FeXXcJbFXa_!!386289545.jpg' },
            { title: '350方/天天伴/400套十三水十三水所所', sall: '3568', price: '93.50', di: 1, img: 'https://gd2.alicdn.com/imgextra/i3/386289545/TB2644Sv9XlpuFjy0FeXXcJbFXa_!!386289545.jpg' },
            { title: '350方/天天伴/400套十三水十三水所所', sall: '3568', price: '93.50', di: 1, img: 'https://gd2.alicdn.com/imgextra/i3/386289545/TB2644Sv9XlpuFjy0FeXXcJbFXa_!!386289545.jpg' },
            { title: '350方/天天伴/400套十三水十三水所所', sall: '3568', price: '93.50', di: 1, img: 'https://gd2.alicdn.com/imgextra/i3/386289545/TB2644Sv9XlpuFjy0FeXXcJbFXa_!!386289545.jpg' },
          ]
        }, {
          title: '圆盆餐盒', List: [
            { title: '350方/天天伴/400套十三水十三水所所', sall: '3568', price: '93.50', di: 1, img: 'https://gd4.alicdn.com/imgextra/i4/386289545/TB21Yd7cVXXXXaQXXXXXXXXXXXX-386289545.jpg' },
            { title: '350方/天天伴/400套十三水十三水所所', sall: '3568', price: '93.50', di: 1, img: 'https://gd4.alicdn.com/imgextra/i4/386289545/TB21Yd7cVXXXXaQXXXXXXXXXXXX-386289545.jpg' },
            { title: '350方/天天伴/400套十三水十三水所所', sall: '3568', price: '93.50', di: 1, img: 'https://gd4.alicdn.com/imgextra/i4/386289545/TB21Yd7cVXXXXaQXXXXXXXXXXXX-386289545.jpg' },
            { title: '350方/天天伴/400套十三水十三水所所', sall: '3568', price: '93.50', di: 1, img: 'https://gd4.alicdn.com/imgextra/i4/386289545/TB21Yd7cVXXXXaQXXXXXXXXXXXX-386289545.jpg' },
            { title: '350方/天天伴/400套十三水十三水所所', sall: '3568', price: '93.50', di: 1, img: 'https://gd4.alicdn.com/imgextra/i4/386289545/TB21Yd7cVXXXXaQXXXXXXXXXXXX-386289545.jpg' },
            { title: '350方/天天伴/400套十三水十三水所所', sall: '3568', price: '93.50', di: 1, img: 'https://gd4.alicdn.com/imgextra/i4/386289545/TB21Yd7cVXXXXaQXXXXXXXXXXXX-386289545.jpg' },
          ]
        }, {
          title: '筷子/四件套', List: [
            { title: '350方/天天伴/400套十三水十三水所所', sall: '3568', price: '93.50', di: 1, img: 'https://img.alicdn.com/imgextra/i3/13736715/O1CN01ZllMua1zTW6oFBmFr_!!0-saturn_solar.jpg' },
            { title: '350方/天天伴/400套十三水十三水所所', sall: '3568', price: '93.50', di: 1, img: 'https://img.alicdn.com/imgextra/i3/13736715/O1CN01ZllMua1zTW6oFBmFr_!!0-saturn_solar.jpg' },
            { title: '350方/天天伴/400套十三水十三水所所', sall: '3568', price: '93.50', di: 1, img: 'https://img.alicdn.com/imgextra/i3/13736715/O1CN01ZllMua1zTW6oFBmFr_!!0-saturn_solar.jpg' },
            { title: '350方/天天伴/400套十三水十三水所所', sall: '3568', price: '93.50', di: 1, img: 'https://img.alicdn.com/imgextra/i3/13736715/O1CN01ZllMua1zTW6oFBmFr_!!0-saturn_solar.jpg' },
            { title: '350方/天天伴/400套十三水十三水所所', sall: '3568', price: '93.50', di: 1, img: 'https://gd3.alicdn.com/imgextra/i2/273229813/O1CN01gJ9HKK2MMP7YNOeee_!!273229813.jpg' },
            { title: '350方/天天伴/400套十三水十三水所所', sall: '3568', price: '93.50', di: 1, img: 'https://gd3.alicdn.com/imgextra/i2/273229813/O1CN01gJ9HKK2MMP7YNOeee_!!273229813.jpg' },
            { title: '350方/天天伴/400套十三水十三水所所', sall: '3568', price: '93.50', di: 1,img: 'https://gd3.alicdn.com/imgextra/i2/273229813/O1CN01gJ9HKK2MMP7YNOeee_!!273229813.jpg' },
          ]
        }, {
          title: '食品袋子', List: [
            { title: '350方/天天伴/400套十三水十三水所所', sall: '3568', price: '93.50', di: 1, img: 'https://gd3.alicdn.com/imgextra/i2/273229813/O1CN01gJ9HKK2MMP7YNOeee_!!273229813.jpg' },
            { title: '350方/天天伴/400套十三水十三水所所', sall: '3568', price: '93.50', di: 1, img: 'https://gd3.alicdn.com/imgextra/i2/273229813/O1CN01gJ9HKK2MMP7YNOeee_!!273229813.jpg' },
          ]
        }, {
          title: '乳白餐具', List: [
            { title: '350方/天天伴/400套十三水十三水所所', sall: '3568', price: '93.50', di: 1,img: 'https://gd3.alicdn.com/imgextra/i2/273229813/O1CN01gJ9HKK2MMP7YNOeee_!!273229813.jpg' },
            { title: '350方/天天伴/400套十三水十三水所所', sall: '3568', price: '93.50', di: 1,img: 'https://gd3.alicdn.com/imgextra/i2/273229813/O1CN01gJ9HKK2MMP7YNOeee_!!273229813.jpg' },
            { title: '350方/天天伴/400套十三水十三水所所', sall: '3568', price: '93.50', di: 1, img: 'https://gd3.alicdn.com/imgextra/i2/273229813/O1CN01gJ9HKK2MMP7YNOeee_!!273229813.jpg' },
            { title: '350方/天天伴/400套十三水十三水所所', sall: '3568', price: '93.50', di: 1, img: 'https://gd3.alicdn.com/imgextra/i2/273229813/O1CN01gJ9HKK2MMP7YNOeee_!!273229813.jpg' },
            { title: '350方/天天伴/400套十三水十三水所所', sall: '3568', price: '93.50', di: 1,di:1, img: 'https://gd3.alicdn.com/imgextra/i2/273229813/O1CN01gJ9HKK2MMP7YNOeee_!!273229813.jpg' },
            { title: '350方/天天伴/400套十三水十三水所所', sall: '3568', price: '93.50', di: 1, img: 'https://gd3.alicdn.com/imgextra/i2/273229813/O1CN01gJ9HKK2MMP7YNOeee_!!273229813.jpg' },
            { title: '350方/天天伴/400套十三水十三水所所', sall: '3568', price: '93.50', di: 1, img: 'https://gd3.alicdn.com/imgextra/i2/273229813/O1CN01gJ9HKK2MMP7YNOeee_!!273229813.jpg' },
            { title: '350方/天天伴/400套十三水十三水所所', sall: '3568', price: '93.50', di: 1, img: 'https://gd3.alicdn.com/imgextra/i2/273229813/O1CN01gJ9HKK2MMP7YNOeee_!!273229813.jpg' },
            { title: '350方/天天伴/400套十三水十三水所所', sall: '3568', price: '93.50', di: 1,img: 'https://gd3.alicdn.com/imgextra/i2/273229813/O1CN01gJ9HKK2MMP7YNOeee_!!273229813.jpg' },
            { title: '350方/天天伴/400套十三水十三水所所', sall: '3568', price: '93.50', di: 1, img: 'https://gd3.alicdn.com/imgextra/i2/273229813/O1CN01gJ9HKK2MMP7YNOeee_!!273229813.jpg' },
            { title: '350方/天天伴/400套十三水十三水所所', sall: '3568', price: '93.50', di: 1,img: 'https://gd3.alicdn.com/imgextra/i2/273229813/O1CN01gJ9HKK2MMP7YNOeee_!!273229813.jpg' },
            { title: '350方/天天伴/400套十三水十三水所所', sall: '3568', price: '93.50', di: 1, img: 'https://gd3.alicdn.com/imgextra/i2/273229813/O1CN01gJ9HKK2MMP7YNOeee_!!273229813.jpg' },
            { title: '350方/天天伴/400套十三水十三水所所', sall: '3568', price: '93.50', di: 1, img: 'https://gd3.alicdn.com/imgextra/i2/273229813/O1CN01gJ9HKK2MMP7YNOeee_!!273229813.jpg' },

          ]
        },
      ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  changeTitle(e){//改变分类
    console.log(e.currentTarget.dataset.index)
    if (this.data.classIndex === e.currentTarget.dataset.index) return
    this.setData({
      classIndex: e.currentTarget.dataset.index
    })
  },
  goDetail(e){//进详情
    let id = e.currentTarget.dataset.ids
    wx.navigateTo({
      url: `../detail/index?id=${id}`,
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
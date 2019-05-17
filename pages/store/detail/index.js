// pages/store/detail/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    benners:[
      { image: 'https://gd3.alicdn.com/imgextra/i2/273229813/O1CN01gJ9HKK2MMP7YNOeee_!!273229813.jpg' },
      { image: 'https://gd1.alicdn.com/imgextra/i4/57009101/TB2A6ibbmiK.eBjSZFyXXaS4pXa_!!57009101.jpg' },
      { image: 'https://gd2.alicdn.com/imgextra/i2/2614654258/O1CN01hX8fu01hKCxJEVoB6_!!2614654258.jpg'},
    ],
    oneItem:{
      title:'350方方型一次性外卖盒 400套',
      price:'76.80',
      FreeShipping:1,
      SalesVolume:2380,
      place:'杭州',
      img: 'https://gd2.alicdn.com/imgextra/i2/2614654258/O1CN01hX8fu01hKCxJEVoB6_!!2614654258.jpg',
      store:99
    },
    buyNum:1,
    showPopup:false,
    nomalMess:[
      {title:'尺寸',mess:[
        { nallid: 1, title: '小型' ,selected:0},
        { nallid: 2, title: '中型', selected: 0 },
        { nallid: 3, title: '大型', selected: 0},
      ]},
      {title:'颜色',mess:[
        { nallid: 4, title: '透明', selected: 0},
        { nallid: 5, title: '白色', selected: 0},
        { nallid: 6, title: '天蓝色', selected: 0},
        { nallid: 7, title: '深粉橙色', selected: 0},
        { nallid: 8, title: '黄色', selected: 0},
        { nallid: 9, title: '绿色', selected: 0},
        { nallid: 10, title: '其他', selected: 0},
      ]}
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.id)
  },
  goBuy(){
    this.setData({
      showPopup:true
    })
  },
  closeP(){
    this.setData({ showPopup: false })
  },
  closePopu(){
    let arr = this.data.nomalMess
    let allSelect=[]
    arr.map((val,index)=>{
      let select = val.mess.some((item,key)=>{
        return item.selected==1
      })
      if (select) allSelect.push(select)
    })
    if (allSelect.length === this.data.nomalMess.length){
    wx.navigateTo({
      url: '../toSureBuy/index',
    })
      this.setData({ showPopup: false })
    } else wx.showToast({ title: '请先选择规格', icon: 'none' })
  },
  selectNomall(e){
    let index = e.currentTarget.dataset.index
    let indexson = e.currentTarget.dataset.indexson
    let ids = e.currentTarget.dataset.ids
    let arr = this.data.nomalMess
    arr[index].mess.map((val,index)=>{
      val.selected=0
    })
    arr[index].mess[indexson].selected=1
    this.setData({
      nomalMess: arr
    })
  },
  chengnum(e){
    let type = e.currentTarget.dataset.type
      if(type==2)this.setData({buyNum: this.data.buyNum+=1})
      else{
        if (this.data.buyNum==1) {
          wx.showToast({ title: '购买不可少于一件',icon:'none'})
          return
        }
        this.setData({
          buyNum: this.data.buyNum-=1
        })
      }
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
  // onPullDownRefresh: function () {

  // },

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
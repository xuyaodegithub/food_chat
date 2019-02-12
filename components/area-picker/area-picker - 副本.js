// components/area-picker/area-picker.js
var regions = require('../../libs/regions.js');
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    range:[],
    region:[],
    provinces:[],
    cities:[],
    districts:[],
    selectedProvince:"",
    selectedCity: "",
    selectedDistrict: "",
  },

  /**
   * 组件的方法列表
   */
  methods: {
    bindRegionChange: function (e) {
      console.log('picker发送选择改变，携带值为', e.detail.value)
      this.setData({
        region: e.detail.value
      })
    },
    regionColumnChange: function (e) {
      var tempRange = [];
      if (e.detail.column == 0) {
        var provinces = this.provinces;
        this.selectedProvince = provinces[e.detail.value];
        var cities = this.getKeys(regions[this.selectedProvince]);
        this.cities = cities;
        this.selectedCity = cities[0];
        var districts = regions[this.selectedProvince][this.selectedCity];
        this.districts = districts;
        tempRange.push(provinces);
        tempRange.push(cities);
        tempRange.push(districts);
        this.setData({
          range: tempRange
        });
      }
      else if (e.detail.column == 1) {
        var provinces = this.provinces;
        var cities = this.cities;
        this.selectedCity = cities[e.detail.value];
        var districts = regions[this.selectedProvince][this.selectedCity];
        this.districts = districts;
        tempRange.push(provinces);
        tempRange.push(cities);
        tempRange.push(districts);
        this.setData({
          range: tempRange
        });
      }
    },

    bindRegionChange:function(e){
      var range = e.detail.value;
      this.setData({
        selectedProvince: this.provinces[range[0]],
        selectedCity: this.cities[range[1]],
        selectedDistrict: this.districts[range[2]],
      });

      var eventData = {
        selectedProvince: this.provinces[range[0]],
          selectedCity: this.cities[range[1]],
            selectedDistrict: this.districts[range[2]],
      }
      this.triggerEvent('change', eventData);
    },

    getKeys: function (json) {
      var keys = [];
      for (var item in json) {
        keys.push(item);
      }
      return keys;
    },
  },
  lifetimes: {
    attached() {
      // 在组件实例进入页面节点树时执行
      // wx.authorize({
      //   scope: 'scope.userLocation',
      //   success() {
      //     wx.getLocation({
      //       type: 'wgs84',
      //       success(res) {
      //         const latitude = res.latitude
      //         const longitude = res.longitude
      //         const speed = res.speed
      //         const accuracy = res.accuracy
      //       }
      //     })
      //   },
        
      // })
      var tempRange = [];
      var provinces = this.getKeys(regions);
      this.provinces = provinces;
      this.selectedProvince = provinces[0];

      var cities = this.getKeys(regions[provinces[0]]);
      this.cities = cities;
      this.selectedCity = cities[0];
      var districts = regions[this.selectedProvince][this.selectedCity];
      this.districts = districts;
      tempRange.push(provinces);
      tempRange.push(cities);
      tempRange.push(districts);
      this.range = tempRange;
      this.setData({
        range: tempRange
      });
    },
    detached() {
      // 在组件实例被从页面节点树移除时执行
    },
  },

  
})

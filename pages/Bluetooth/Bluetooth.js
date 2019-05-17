// pages/Bluetooth/Bluetooth.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    BullothList:[],//发现的设备,已过滤掉name为空的蓝牙设备
    itemOne:'',
    itemOneServer: {},
    itemOneServerChart:{},
    sendValue:'',
    writeDatas:'',
    placeholder:'提示信息'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.startBulloth()
    this.initEditor()
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
  initEditor(){
    // let oEditor = wx.createSelectorQuery().select('#editor')
    // console.log(oEditor)
    // oEditor.setContents({
    //   html:'<div>xuyao</div>',
    //   success(res){
    //     console.log(res)
    //   }
    // })
  },
  readOnlyChange() {
    this.setData({
      readOnly: !this.data.readOnly
    })
  },
  onEditorReady() {
    const that = this
    wx.createSelectorQuery().select('#editor').context(function (res) {
      that.editorCtx = res.context
    }).exec()
  },
  format(e) {
    const { name, value } = e.target.dataset
    if (!name) return
    // console.log('format', name, value)
    this.editorCtx.format(name, value)
  },
  goWX(){
    wx.navigateToMiniProgram({
      appId:"wxdb0507db667d1521",
      success(res){
        console.log(res)
      }
    })
  },
  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },
  startBulloth(){
    let bList=[]//蓝牙存放数组
    let _self=this
    wx.openBluetoothAdapter({//初始化蓝牙模块
      success(res){
        if (res.errMsg ==='openBluetoothAdapter:ok'){
          wx.getBluetoothAdapterState({//获取本机蓝牙适配器状态。
            success(res){
              console.log(res,'7//////////////////////////////////////////////////////')
            }
          })

          
            wx.startBluetoothDevicesDiscovery({//开始搜索附近蓝牙设备
              services: [],
              success(res) {
                if (res.errCode==0){
             
                }else wx.showToast({title: res.errMsg,icon:'none'})
                // console.log(res)
              }
            })
        }
        wx.onBluetoothDeviceFound( (res) =>{//初始化成功之后监听发现新设备事件 
          console.log('new device list has founded')
          console.dir(res)
          // console.log(ab2hex(devices[0].advertisData))
          if (res.devices[0].name !=''){//发现到需要链接的设备后,做一下处理
          console.log('jjjjjjjjjjjjjjjjjjjjjjj')
            bList.push(res.devices[0])
          }
          // if (res.devices[0].name == '测试机' || bList.length>=6) {
          //   wx.stopBluetoothDevicesDiscovery({//停止搜索设备，释放空间
          //     success(err) {
          //     }
          //   })
            // wx.hideLoading()
            _self.setData({
              BullothList: bList
            })
          // }
        })
      },
      fail(err){
        wx.showToast({ title: '请打开蓝牙,重新尝试',icon:'none'})
      }
    })
   
  },
  connectThis(e){//链接某个蓝牙
  let _self=this
  wx.showLoading({title: '正在连接,请稍等...'})
    let item = e.currentTarget.dataset.item
    this.setData({
      itemOne: item
    })
    wx.createBLEConnection({//连接低功耗蓝牙设备。若小程序在之前已有搜索过某个蓝牙设备，并成功建立连接，可直接传入之前搜索获取的 deviceId 直接尝试连接该设备，无需进行搜索操作。
      deviceId: item.deviceId,//用于区分设备的 id
      timeout: 10000,//超时时间，单位ms，不填表示不会超时
      success(res) {
        if (res.errCode == 0) {//链接成功之后做什么
          wx.stopBluetoothDevicesDiscovery({//停止搜索设备，释放空间
              success(err) {
              }
            })
        wx.hideLoading()
        wx.showToast({
          title: '连接成功',icon:'none'
        })
          wx.getBLEDeviceServices({//获取蓝牙设备所有服务(service)。链接成功之后 
            deviceId: item.deviceId,//蓝牙设备 id
            success(services) {//返回的数组，每个对象属性、uuid蓝牙设备服务的 uuid、isPrimary该服务是否为主服务
              console.log(services, 'fffffffffffffffffffffffffff')
              _self.setData({
                itemOneServer: services.services
              })
              wx.getBLEDeviceCharacteristics({// 获取蓝牙设备某个服务中所有特征值(characteristic) 。
                deviceId: item.deviceId,//蓝牙设备 id
                serviceId: services.services[0].uuid,//蓝牙服务 uuid，需要使用 getBLEDeviceServices 获取
                success(characteristics) {//该服务下的所有特征值，uuid蓝牙设备特征值的 uuid、properties该特征值支持的操作类型properties 的结构read：boolean	该特征值是否支持 read 操作、write	boolean	该特征值是否支持 write 操作、notify	boolean	该特征值是否支持 notify 操作、indicate	boolean	该特征值是否支持 indicate 操作
                  console.log(characteristics)
                  _self.setData({
                    itemOneServerChart: characteristics.characteristics
                  })
                  wx.notifyBLECharacteristicValueChange({//启用低功耗蓝牙设备特征值变化时的 notify 功能，订阅特征值。注意：必须设备的特征值支持 notify 或者 indicate 才可以成功调用。另外，必须先启用 notifyBLECharacteristicValueChange 才能监听到设备 characteristicValueChange 事件
                    deviceId: item.deviceId,//蓝牙设备 id
                    serviceId: services.services[0].uuid,//蓝牙特征值对应服务的 uuid
                    characteristicId: characteristics.characteristics[1].uuid,//蓝牙特征值的 uuid
                    state: true,//是否启用 notify
                    success(res) {
                      console.log('notifyBLECharacteristicValueChange success', res.errMsg)
                      wx.onBLECharacteristicValueChange((res)=>{
                        console.log(`characteristic ${res.characteristicId} has changed, now is ${res.value}`,'监听特征值变化')
                        console.log(ab2hex(res.value), '监听特征值变化')
                      })
                    },
                    fail(err){
                      console.log('notifyBLECharacteristicValueChange fail', err.errMsg)
                    }

                  })
                },
                fail(err){
                  console.log(err.errMsg)
                }
              })
            }
          })
        }
        // if (res.errCode == 10012) {
        //   wx.hideLoading()
        //   wx.showToast({
        //     title: '链接超时', icon: 'none'
        //   })
        // }
      },
      fail(err){
        wx.hideLoading()
        wx.showToast({
          title: '链接超时', icon: 'none'
        })
      }
      })
          
  },
  sendThis() {
    let that = this;
    let str = this.data.sendValue
    console.log(str)
     let dataBuffer = new ArrayBuffer(str.length)   
      let dataView = new DataView(dataBuffer)   
       for (var i = 0; i < str.length; i++) { 
         dataView.setUint8(i, str.charAt(i).charCodeAt())
          } 
       let dataHex = that.ab2hex(dataBuffer); 
       this.writeDatas = that.hexCharCodeToStr(dataHex);
      wx.writeBLECharacteristicValue({//向低功耗蓝牙设备特征值中写入二进制数据。注意：必须设备的特征值支持 write 才可以成功调用。建议每次写入不超过20字节。
        deviceId: that.data.itemOne.deviceId,	//string		是	蓝牙设备 id
        serviceId: that.data.itemOneServer[0].uuid,//	string		是	蓝牙特征值对应服务的 uuid
        characteristicId: that.data.itemOneServerChart[1].uuid,//	string		是	蓝牙特征值的 uuid
        value: dataBuffer,// 	ArrayBuffer		是	蓝牙设备特征值对应的二进制值
        success(res) {
          console.log('发送的数据：' + that.writeDatas)
          console.log('message发送成功')
        },
        fail(err){
          console.log('message发送失败',err.errMsg)
        }
      })
  },
  otherSet(){
         // wx.getBluetoothDevices({//获取在蓝牙模块生效期间所有已发现的蓝牙设备。包括已经和本机处于连接状态的设备。
                  //   success(res){
                  //     console.log(res)
                  //   }
                  // })
                  // wx.showLoading({
                  //   title: '正在搜索蓝牙设备',
                  // })
    wx.createBLEConnection({//连接低功耗蓝牙设备。若小程序在之前已有搜索过某个蓝牙设备，并成功建立连接，可直接传入之前搜索获取的 deviceId 直接尝试连接该设备，无需进行搜索操作。
      deviceId: '',//用于区分设备的 id
      timeout: 10000,//超时时间，单位ms，不填表示不会超时
      success(res) {
        if (res.errCode == 0) {//链接成功之后做什么
          wx.getBLEDeviceServices({//获取蓝牙设备所有服务(service)。
            deviceId: 11,//蓝牙设备 id
            success(services) {//返回的数组，每个对象属性、uuid蓝牙设备服务的 uuid、isPrimary该服务是否为主服务

            }
          })
          wx.getBLEDeviceCharacteristics({// 获取蓝牙设备某个服务中所有特征值(characteristic) 。
            deviceId: '',
            serviceId: '',//蓝牙服务 uuid，需要使用 getBLEDeviceServices 获取
            success(characteristics) {//该服务下的所有特征值，uuid蓝牙设备特征值的 uuid、properties该特征值支持的操作类型properties 的结构read：boolean	该特征值是否支持 read 操作、write	boolean	该特征值是否支持 write 操作、notify	boolean	该特征值是否支持 notify 操作、indicate	boolean	该特征值是否支持 indicate 操作

            }
          })
          wx.notifyBLECharacteristicValueChange({//启用低功耗蓝牙设备特征值变化时的 notify 功能，订阅特征值。注意：必须设备的特征值支持 notify 或者 indicate 才可以成功调用。另外，必须先启用 notifyBLECharacteristicValueChange 才能监听到设备 characteristicValueChange 事件
            deviceId: '',//蓝牙设备 id
            serviceId: '',//蓝牙特征值对应服务的 uuid
            characteristicId: '',//蓝牙特征值的 uuid
            state: '',//是否启用 notify
            success() {

            }

          })
          wx.onBLECharacteristicValueChange((res) => {//监听低功耗蓝牙设备的特征值变化事件。必须先启用 notifyBLECharacteristicValueChange 接口才能接收到设备推送的 notification。res属性deviceId	string	蓝牙设备 id、serviceId	string	蓝牙特征值对应服务的 uuid、characteristicId	string	蓝牙特征值的 uuid、value	ArrayBuffer	特征值最新的值

          })
          wx.writeBLECharacteristicValue({//向低功耗蓝牙设备特征值中写入二进制数据。注意：必须设备的特征值支持 write 才可以成功调用。建议每次写入不超过20字节。
            deviceId: '',	//string		是	蓝牙设备 id
            serviceId: '',//	string		是	蓝牙特征值对应服务的 uuid
            characteristicId: '',//	string		是	蓝牙特征值的 uuid
            value: '',// 	ArrayBuffer		是	蓝牙设备特征值对应的二进制值
            success(res) {

            }
          })
          wx.closeBluetoothAdapter({//关闭蓝牙模块，释放空间资源
            success(res) {

            }
          })

        }
      }
    })
  },
  // ArrayBuffer转16进制字符串示例
   ab2hex(buffer) {//设备特征值改变时的返回值格式转换
    const hexArr = Array.prototype.map.call(
      new Uint8Array(buffer),
      function (bit) {
        return ('00' + bit.toString(16)).slice(-2)
      }
    )
  return hexArr.join('')
  },
  /*转成可展会的文字*/
  hexCharCodeToStr(hexCharCodeStr) { 
    var trimedStr = hexCharCodeStr.trim();
     var rawStr = trimedStr.substr(0, 2).toLowerCase() === '0x' ? trimedStr.substr(2) : trimedStr;
      var len = rawStr.length; 
      var curCharCode; 
      var resultStr = []; 
      for (var i = 0; i < len; i = i + 2) { 
        curCharCode = parseInt(rawStr.substr(i, 2), 16); resultStr.push(String.fromCharCode(curCharCode)); 
        }
         return resultStr.join(''); 
         },
       /*转换成需要的格式*/
       buf2string(buffer) { 
         var arr = Array.prototype.map.call(new Uint8Array(buffer), x => x)                    
         return arr.map((char, i) => { return String.fromCharCode(char); }).join(''); 
         }, 
         receiveData(buf) { 
           return this.hexCharCodeToStr(this.ab2hex(buf)) 
         },
  changeValue(e){
    let value = e.detail.value;
    this.setData({
      sendValue: value
    })
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
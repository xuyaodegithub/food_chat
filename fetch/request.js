//公共方法js//模块化
//可以将一些公共的代码抽离成为一个单独的 js 文件，作为一个模块。模块只有通过 module.exports 或者 exports 才能对外暴露接口。
//在需要使用这些模块的文件中，使用 require(path) 将公共代码引入:var a=require(path) require 暂时不支持绝对路径
// header: {
//   'content-type': 'application/x-www-form-urlencoded' // 默认值
// },
const app = getApp()
function fetch(data) {
  wx.request({
    url: app.baseUrl+data.url,
    data: data.data,
    dataType: 'json',
    method: data.type ? data.type : 'GET',
    header: {
      'content-type': 'application/json',
      'token': app.token
      // 'cookie': wx.getStorageSync("sessionid")//读取cookie
    },
    success: function (res) {
      // console.log(res.statusCode)
      if (res.data.code == 0)  data.callback(res)
      else wx.showToast({title: res.data.msg,icon: 'none'});
    },
    fail:function(res){
      wx.showToast({
        title: '请求错误',
        icon: 'none',
        duration: 2000
      });
    }
  })
}
// function mothod3(data) {
//   wx.request({
//     url: app.baseUrl + data.url,
//     data: data.data,
//     dataType: 'json',
//     method: 'POST',
//     header: {
//       'cookie': wx.getStorageSync("sessionid"),//读取cookie
//       'content-type': 'application/x-www-form-urlencoded' // 默认值
//     },
//     success: function (res) {
//       data.callback(res)
//     },
//     fail: function (res) {
//       wx.showToast({
//         title: '请求错误',
//         icon: 'none',
//         duration: 2000
//       });
//     }
//   })
// }
// function mothod4(data) {
//   wx.request({
//     url: app.snrcUrl + data.url,
//     data: data.data,
//     dataType: 'json',
//     method: 'POST',
//     header: {
//       'content-type': 'application/x-www-form-urlencoded' // 默认值
//     },
//     success: function (res) {
//       data.callback(res)
//     },
//     fail: function (res) {
//       wx.showToast({
//         title: '请求错误',
//         icon: 'none',
//         duration: 2000
//       });
//     }
//   })
// }
// function getGraphCode(data) {
//   wx.request({
//     url: app.baseUrl + '/mobile/code/wxGraphCode',
//     data: {},
//     responseType: 'arraybuffer',
//     method: 'GET',
//     header: {
//       'cookie': wx.getStorageSync("sessionid"),//读取cookie
//       'content-type': 'application/x-www-form-urlencoded' // 默认值
//     },
//     success: function (res) {
//       if (res.statusCode == 200) {
//         data.callback(res)
//       } else {
//         wx.showToast({
//           title: res.data.message,
//           icon: 'none',
//           duration: 2000
//         });
//       }
//     },
//     fail: function (res) {
//       wx.showToast({
//         title: '请求错误',
//         icon: 'none',
//         duration: 2000
//       });
//     }
//   })
// }
// function getLoginMess(callback,_self,options){
//     if (app.userId) {
//       callback()
//     } else {
//       console.log(_self.route+'-----------------------------------')
//       let callBackUrl={
//         url: _self.route,
//         id: options ? options.id : "",
//         type: options ? options.type : "",
//         // recId: options ? options.recId : ''
//         // inviteId: options.inviteId ? options.inviteId : '',
//         // inviteMemberId: options.inviteMemberId ? options.inviteMemberId : '',
//         // isShare: options.isShare ? options.isShare : '',
//       }
//       if (options){
//         callBackUrl.recId = options.recId ? options.recId : ''
//         callBackUrl.isMore = options.isMore ? options.isMore : ''
//         callBackUrl.inviteId = options.inviteId ? options.inviteId : ''
//         callBackUrl.inviteMemberId = options.inviteMemberId ? options.inviteMemberId : ''
//         callBackUrl.isShare = options.isShare ? options.isShare : ''
//         callBackUrl.ordeNo = options.ordeNo ? options.ordeNo : ''
//       }
//       wx.setStorageSync('callBackUrl', callBackUrl)
//       app.getLogin().then(function (res) {
//         callback()
//       }).catch(function (err) {
//         console.log(err)
//       })
//     }
//   }

module.exports = {
  fetch,
} 

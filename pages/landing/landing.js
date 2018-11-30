// pages/landing/landing.js
const app = getApp();
Page({
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  goNext: function () {
    wx.switchTab({
      url: '/pages/index/index'
    })
  },
  onLoad: function (options) {
    const host = 'http://localhost:3000/';    
    wx.getSetting({
      success(res) {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: function (res) {
              wx.request({
                // pass code to rails login#login, a new user be created by rails
                url: host + 'update_user_info', method: 'post', data: {
                  id: app.globalData.userId.id,
                  name: res.userInfo.nickName,
                  nationality: res.userInfo.city,
                  gender: res.userInfo.gender,
                  avatar: res.userInfo.avatarUrl
                },
                success: res => {
                  console.log("Sucess pass data to rails")
                }
              })
            }
          })
        }
      }
    })
  },
  bindGetUserInfo(e) {
    console.log(e.detail.userInfo)
  }
  // getUserInfo: function (e) {
  //   console.log(e)
  //   app.globalData.userInfo = e.detail.userInfo 
  //   this.setData({
  //     userInfo: e.detail.userInfo
  //   })
  // }
})
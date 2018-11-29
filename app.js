//app.js
App({
  onLaunch: function () {
    const host = 'http://localhost:3000/';
    console.log('processing to login');
    wx.login({
      success: res => {
        console.log(res)
        wx.request({
          // pass code to rails login#login, a new user be created by rails
          url: host + 'login', method: 'post', data: {
            code: res.code 
          },
          success: res => {
            this.globalData.userId = res.data.userId
          }
        })
      }
    });
  },
  globalData: {
    items: []
  }
  // getUserInfo: function (e) {
  //   console.log("HEY GET USER INFO")
  //   console.log(e)
  //   app.globalData.userInfo = e.detail.userInfo
  //   this.setData({
  //     userInfo: e.detail.userInfo
  //   })
  // }
})
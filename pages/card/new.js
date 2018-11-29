
const app = getApp()
const myRequest = require('../../lib/api/request');



Page({
  data: {},
  // Form Submit Button
  onLoad: function(){
    console.log("loading gb data for create")
  },
  bindSubmit: function (e) {
    let page = this;
    wx.showToast({ title: 'Sending...', icon: 'loading', duration: 1000 })
    // Post new card to API
    myRequest.post({
      path: 'users/' + app.globalData.userId.id + '/cards',
      data: {
        card: {
          name: e.detail.value.name,
          description: e.detail.value.description
        }
      },
      success(res) {
        console.log(res)
      }
    });

    setTimeout(function () {
      wx.reLaunch({
        url: '/pages/index/index'
      })
    }, 1000)

  }
})
// pages/list/new.js

const app = getApp()
const myRequest = require('../../lib/api/request');
console.log(app.globalData.userId)
Page({
  data: {},
  // Form Submit Button
  bindSubmit: function (e) {
    let page = this;
    wx.showToast({ title: 'Sending...', icon: 'loading', duration: 1000 })
    // Post new card to API
    myRequest.post({
      path: 'users/1/lists',
      data: {
        list: {
          name: e.detail.value.name
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
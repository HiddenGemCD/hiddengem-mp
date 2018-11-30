// pages/card/edit.js
const app = getApp();
const myRequest = require('../../lib/api/request');

Page({
  data: {
  },
  onLoad: function (e) {
    let page = this;
    page.setData({
      card_id: e.id,
      user_id: app.globalData.userId.id
    });
    const user_id = this.data.user_id;
    const card_id = this.data.card_id;

    myRequest.get({
      path: 'cards/' + card_id,
      success(res) {
        page.setData({
          name: res.data.name,
          description: res.data.description
        });
      }
    });
  },
  bindSubmit: function (e) {
    console.log(222222,'bindsubmit')
    let page = this;
    const user_id = this.data.user_id;
    const card_id = this.data.card_id;
    wx.showToast({ title: 'Sending...', icon: 'loading', duration: 1000 })
    // Post new card to API
    myRequest.put({
      path: 'users/' + user_id + '/cards/' + card_id,
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
        url: '/pages/list/mylist'
      })
    }, 1000)
  }
})


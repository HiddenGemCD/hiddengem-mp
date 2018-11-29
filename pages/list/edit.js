// pages/list/edit.js
const app = getApp();
const myRequest = require('../../lib/api/request');

Page({
  data: {
  },
  onLoad: function (e) {
    let page = this;
    page.setData({  
      list_id: e.id,
      user_id: app.globalData.userId.id 
     });
    const user_id = this.data.user_id;
    const list_id = this.data.list_id;
    myRequest.get({
      path: 'lists/' + list_id,
      success(res) {
        // console.log("GET LIST INFO")
        // console.log(res.data.list)
        page.setData({
          name: res.data.list.name,
        });
      }
    });
    console.log(this.data)
  },
  bindSubmit: function (e) {
    let page = this;
    wx.showToast({ title: 'Sending...', icon: 'loading', duration: 1000 })
    // Post new card to API
    myRequest.put({
      path: 'users/' + user_id + '/lists/' + list_id,
      data: {
        card: {
          name: e.detail.value.name,
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

// myRequest.put({
//   path: 'users/' + user_id + '/lists/' + list_id,
// })
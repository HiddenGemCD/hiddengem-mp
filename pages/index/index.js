//index.js
//获取应用实例
const app = getApp()
const myRequest = require('../../lib/api/request');

Page({
  data: { 
    items: []
    },
  onLoad: function () {
    let page = this
    // Fetch Items from API
    myRequest.get({
      path: 'cards',
      success(res) {
        console.log(res)
        page.setData({ items: res.data.cards })
      }
    })
    // wx.request({
    //   url: 'http://localhost:3000/api/v1/cards',
    //   header: {
    //     'Content-Type': 'application/json'
    //   },
    //   success: (res) => {
    //     console.log(333,res)
    //   }
    // })
  },
  goAllLists: function() {
    wx.navigateTo({
      url: '/pages/list/index'
    })
  },
  goMyLists: function() {
    wx.navigateTo({
      url: '/pages/list/mylist'
    })
  },
  newCard: function() {
    console.log('create new post...');
    wx.switchTab({
      url: '/pages/card/new'
    })
  }
})

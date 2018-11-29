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
        page.setData({items : res.data.cards})
      }
    })
  },
  goAllLists: function() {
    wx.navigateTo({
      url: '/pages/list/list'
    })
  },
  goMyLists: function() {
    wx.navigateTo({
      url: '/pages/mylist/mylist'
    })
  },
  newCard: function() {
    console.log('create new post...');
    wx.switchTab({
      url: '/pages/post/post'
    })
  }
})

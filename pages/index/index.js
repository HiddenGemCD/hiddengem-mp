//index.js
//获取应用实例
const app = getApp()
const myRequest = require('../../lib/api/request');

Page({
  data: { 
    cards: [],
    lists: [],
    users: []
    },
  onLoad: function () {
    let page = this
    // Fetch Items from API
    myRequest.get({
      path: 'cards',
      success(res) {
        page.setData({ cards: res.data.cards })
      }
    })
    myRequest.get({
      path: 'lists',
      success(res) {
        page.setData({ lists: res.data.lists })
      }
    })
    myRequest.get({
      path: 'users',
      success(res) {
        page.setData({ users: res.data.users })
        // console.log(page.data)
      }
    })
    
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
    // console.log('create new post...');
    wx.switchTab({
      url: '/pages/card/new'
    })
  },
  viewList: function(e) {
    // console.log(e.target)
    const user_id = e.target.id;
    const avatar_url = e.target.dataset.avatar_url;
    // console.log(avatar_url);
    wx.navigateTo({
      url: '/pages/list/visitlist?user_id=' + user_id + '&avatar_url=' + avatar_url,
    })
  }
})

// pages/mylist/mylist.js
const myRequest = require('../../lib/api/request');

Page({
  data: {
    items: []
  },
  onLoad: function (options) {
    let page = this
    myRequest.get({
      path: 'lists',
      success(res) {
        console.log(res)
        page.setData({ items: res.data.lists })
      }
    })
  },
  newCard: function () {
    wx.switchTab({
      url: '/pages/card/new'
    })
  },
  newList: function () {
    wx.navigateTo({
      url: '/pages/list/new'
    })
  },
  editList: function(e){
    const list_id = e.target.dataset.id;
    wx.navigateTo({
      url: '/pages/list/edit?id=' + list_id
    })
  }
})
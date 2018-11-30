// pages/mylist/mylist.js
const myRequest = require('../../lib/api/request');

Page({
  data: {
    lists: [],
    cards: []
  },
  onLoad: function (options) {
    let page = this
    myRequest.get({
      path: 'lists',
      success(res) {
        page.setData({ lists: res.data.lists })
      }
    })
    myRequest.get({
      path: 'cards',
      success(res) {
        page.setData({ cards: res.data.cards })
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
    const list_id = e.target.id;
    wx.navigateTo({
      url: '/pages/list/edit?id=' + list_id
    })
  },
  deleteList: function(e){
    console.log(e.target)
    const list_id = e.target.id;
    console.log(list_id)
    myRequest.delete({
      path: 'lists/' + list_id,
      success(res) {
        wx.redirectTo({
          url: '/pages/list/mylist'
        })
      }
    })
  },
  editCard: function (e) {
    const card_id = e.target.id;
    wx.navigateTo({
      url: '/pages/card/edit?id=' + card_id
    })
  },
  deleteCard: function (e) {
    console.log(e.target)
    const card_id = e.target.id;
    console.log(card_id)
    myRequest.delete({
      path: 'cards/' + card_id,
      success(res) {
        wx.reLaunch({
          url: '/pages/list/mylist'
        })
      }
    })
  },
})

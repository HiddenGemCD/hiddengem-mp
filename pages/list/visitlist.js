// pages/list/visitlist.js
const app = getApp()
const myRequest = require('../../lib/api/request');

Page({

  /**
   * Page initial data
   */
  data: {
    
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    let page = this
    page.setData(options)
    console.log(page.data)
    let user_id = page.data.user_id
    myRequest.get({
      path: 'users/' + user_id + '/lists',
      success(res) {
        page.setData({ lists: res.data.lists })
      }
    })
    myRequest.get({
      path: 'users/' + user_id + '/cards',
      success(res) {
        page.setData({ cards: res.data.cards })
      }
    })
    myRequest.get({
      path: 'users/' + user_id,
      success(res) {
        page.setData({ user: res.data.user })
      }
    })
  },


  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})
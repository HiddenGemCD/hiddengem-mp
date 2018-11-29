// pages/story/story.js
Page({

  /**
   * Page initial data
   */
  data: {
    text: 'Who is here?'
  },
  onReady: function () {
    
  },
  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    this.setData({
      text: 'new data'
    })
  },
  increaseCount: function() {
    this.setData({ number: 0  })
      count: this.data.count += 1
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
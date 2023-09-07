// logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: []
  },
  onLoad() {

  },

  goToInfoEditPage() {    
    wx.navigateTo({ url: '/pages/my/info-edit/index' });
  },
})

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

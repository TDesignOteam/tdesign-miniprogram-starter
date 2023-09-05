import {
  getHomeCards,
  getHomeSwipers
} from '../../api/home'

// 获取应用实例
// const app = getApp()

Page({
  data: {
    enable: false,
    swiperList: [],
    cardInfo: []
  },
  // 生命周期
  async onReady() {
    const [cardRes, swiperRes] = await Promise.all([getHomeCards(), getHomeSwipers()])
    this.setData({
      cardInfo: cardRes.data,
      swiperList: swiperRes.data
    })
  },
  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },
  onRefresh() {
    this.refresh()
  },
  async refresh() {
    this.setData({
      enable: true
    });
    const [cardRes, swiperRes] = await Promise.all([getHomeCards(), getHomeSwipers()])
    setTimeout(() => {
      this.setData({
        enable: false,
        cardInfo: cardRes.data,
        swiperList: swiperRes.data
      });
    }, 1500);
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
})
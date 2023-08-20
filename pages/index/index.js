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
  // methods
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
  }
})
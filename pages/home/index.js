import Message from 'tdesign-miniprogram/message/index';
import request from '../../api/request';


// 获取应用实例
// const app = getApp()

Page({
  data: {
    enable: false,
    swiperList: [],
    cardInfo: [],
    // 发布
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName'), // 如需尝试获取用户信息可改为false
  },
  // 生命周期
  async onReady() {
    const [cardRes, swiperRes] = await Promise.all([request('/home/cards').then(res => res.data), request('/home/swipers').then(res => res.data)])

    this.setData({
      cardInfo: cardRes.data,
      swiperList: swiperRes.data
    })


  },
  onLoad(option) {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true,
      });
    }
    if (option.release && option.release === 'success') {
      this.showReleaseMsg();
    }
  },
  onRefresh() {
    this.refresh()
  },
  async refresh() {
    this.setData({
      enable: true
    });
    const [cardRes, swiperRes] = await Promise.all([
      request('/home/cards').then(res => res.data),
      request('/home/swipers').then(res => res.data)
    ])

    setTimeout(() => {
      this.setData({
        enable: false,
        cardInfo: cardRes.data,
        swiperList: swiperRes.data
      });
    }, 1500);
  },
  showReleaseMsg() {
    Message.success({
      context: this,
      offset: [20, 32],
      duration: 4000,
      content: '发布成功',
    });
  },
  goRelease() {
    wx.navigateTo({
      url: '/pages/release/index',
    });
  },

  openDrawer() {
    this.setData({
      visible: true
    })
  },
  
})
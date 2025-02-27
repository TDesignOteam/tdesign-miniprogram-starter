import request from '~/api/request';

Page({
  data: {
    isLoad: false,
    service: [],
    personalInfo: {},
    settingdata: [
      { name: '联系客服', icon: 'service', type: 'service' },
      { name: '设置', icon: 'setting', type: 'setting' },
    ],
  },

  onLoad() {
    this.getServiceList();
  },

  async onShow() {
    const Token = wx.getStorageSync('access_token');
    const personalInfo = await this.getPersonalInfo();

    if (Token) {
      this.setData({
        isLoad: true,
        personalInfo,
      });
    }
  },

  getServiceList() {
    request('/api/getServiceList').then((res) => {
      const { service } = res.data.data;
      this.setData({ service });
    });
  },

  async getPersonalInfo() {
    const info = await request('/api/genPersonalInfo').then((res) => res.data.data);
    return info;
  },

  onLogin(e) {
    wx.navigateTo({
      url: '/pages/login/login',
    });
  },

  onNavigateTo() {
    wx.navigateTo({ url: `/pages/my/info-edit/index` });
  },
});

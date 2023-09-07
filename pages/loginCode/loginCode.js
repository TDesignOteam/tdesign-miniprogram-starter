import request from '../../api/request';

// pages/loginCode/loginCode.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    phoneNumber: '',
    sendCodeCount: 60,
    disabledClass: 't-disabled',
    verifyCode: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const { phoneNumber } = options;
    if (phoneNumber) {
      this.setData({ phoneNumber });
    }
    this.countDown();
  },

  onVerifycodeChange(e) {
    this.setData({
      verifyCode: e.detail.value,
    });
  },

  timer: null,
  countDown() {
    this.setData({ sendCodeCount: 60 });
    this.timer = setInterval(() => {
      if (this.data.sendCodeCount <= 0) {
        this.setData({ isSend: false, sendCodeCount: 0 });
        clearInterval(this.timer);
      } else {
        this.setData({ sendCodeCount: this.data.sendCodeCount - 1 });
      }
    }, 1000);
  },
  sendCode() {
    if (this.data.sendCodeCount === 0) {
      this.countDown();
    }
  },
  async login() {
    const res = await request('/login/postCodeVerify', 'get', { code: this.data.verifyCode });
    if (res.success) {
      await wx.setStorageSync('access_token', res.data.token);
      wx.switchTab({
        url: `/pages/my/index`,
      });
    }
  },
});

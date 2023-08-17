// pages/release/index.js
import { ajax } from '../../api/api';

Page({
  /**
   * 页面的初始数据
   */
  data: {
    originFiles: [
      {
        url: '/static/image1.png',
        name: 'uploaded1.png',
        type: 'image',
      },
      {
        url: '/static/image2.png',
        name: 'uploaded2.png',
        type: 'image',
      },
    ],
    gridConfig: {
      column: 4,
      width: 160,
      height: 160,
    },
    config: {
      count: 1,
    },
    tags: [],
  },
  onLoad: function () {
    // 使用 Mock
    ajax('/tags', (res) => {
      this.setData({
        tags: res.data,
      });
    });
  },
  handleSuccess(e) {
    const { files } = e.detail;
    console.log(files);
    this.setData({
      originFiles: files,
    });
  },
  handleRemove(e) {
    const { index } = e.detail;
    const { originFiles } = this.data;
    originFiles.splice(index, 1);
    this.setData({
      originFiles,
    });
  },
  handleClick(e) {
    console.log(e.detail.file);
  },
  release() {
    wx.reLaunch({
      url: `/pages/index/index?release=success`,
    });
  },
});

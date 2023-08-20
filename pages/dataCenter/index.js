// pages/dataCenter.js
Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    total_situation_dataList: null,
    complete_rate_dataList: null,
    interaction_situation_dataList: null,
    itemWidth: null,
    itemWidth: null,
    smallitemWidth: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log("hello world!")
    var that = this;
    wx.request({
      url: 'https://example.com/ajax?dataType=member',
      dataType: 'json',
      success(res) {
        var total_situation_data = res.data.list;
        that.setData({ 
          total_situation_dataList: total_situation_data
        });

        // 计算每个.item元素的宽度
        var itemWidth = (750 - 32 * (total_situation_data.length - 1)) / total_situation_data.length + 'rpx';

        // 更新.item元素的样式
        that.setData({
          itemWidth: itemWidth
        });
        console.log('total_situation_dataList:', that.data.total_situation_dataList);
        console.log('itemWidth:', that.data.itemWidth);

      }
    });

    wx.request({
      url: 'https://example.com/ajax?dataType=interaction',
      dataType: 'json',
      success(res) {
        var interaction_situation_data = res.data.list;
        that.setData({ 
          interaction_situation_dataList: interaction_situation_data
        });

        // 计算每个.item元素的宽度
        var itemWidth = (750 - 32 * (interaction_situation_data.length - 1)) / interaction_situation_data.length + 'rpx';

        // 更新.item元素的样式
        that.setData({
          smallitemWidth: itemWidth
        });
        console.log('interaction_situation_dataList:', that.data.interaction_situation_dataList);
        console.log('smallitemWidth:', that.data.smallitemWidth);
      }
    });

    wx.request({
      url: 'https://example.com/ajax?dataType=complete_rate',
      dataType: 'json',
      success(res) {
        var complete_rate_data = res.data.list;
        that.setData({ 
          complete_rate_dataList: complete_rate_data
        });

        // 计算每个.item元素的宽度
        var itemHeight = (344 - 16 * (complete_rate_data.length - 1)) / complete_rate_data.length + 'rpx';

        // 更新.item元素的样式
        that.setData({
          itemHeight: itemHeight
        });

        console.log('complete_rate_dataList:', that.data.complete_rate_dataList);
        console.log('itemHeight:', that.data.itemHeight);
      }
    });
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})
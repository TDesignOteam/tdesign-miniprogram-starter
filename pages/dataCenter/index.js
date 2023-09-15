// pages/dataCenter.js
import request from '../../api/request'

Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    totalSituationDataList: null,
    totalSituationKeyList: null,
    completeRateDataList: null,
    complete_rate_keyList: null,
    interactionSituationDataList: null,
    interaction_situation_keyList: null,
    areaDataList: null,
    areaDataKeysList : null,
    memberitemWidth: null,
    smallitemWidth: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const that = this;
    /**
     * 整体情况
     */
    request('/dataCenter/member').then(res => {
      const totalSituationData = res.data.template.succ.data.list;
      that.setData({ 
        totalSituationDataList: totalSituationData,
        totalSituationKeysList: Object.keys(totalSituationData[0])
      });

      // 计算每个.item元素的宽度
      const itemWidth = `${(750 - 32 * (totalSituationData.length - 1)) / totalSituationData.length}rpx`;

      // 更新.item元素的样式
      that.setData({
        memberitemWidth: itemWidth
      });
    })


    /**
     * 互动情况
     */

    request('/dataCenter/interaction').then(res => {
      const interactionSituationData = res.data.template.succ.data.list;
      console.log(interactionSituationData);
      that.setData({ 
        interactionSituationDataList: interactionSituationData,
        interactionSituationKeysList: Object.keys( interactionSituationData[0])
      });

      // 计算每个.item元素的宽度
      const itemWidth = `${(750 - 32 * (interactionSituationData.length - 1)) / interactionSituationData.length}rpx`;
      // 更新.item元素的样式
      that.setData({
        smallitemWidth: itemWidth
      });

    })
    /**
     * 完播率
     */ 

    request('/dataCenter/complete-rate').then(res => {
      const completeRateData = res.data.template.succ.data.list;
      that.setData({ 
        completeRateDataList: completeRateData,
        completeRateKeysList: Object.keys(completeRateData[0])
      });

      // 计算每个.item元素的宽度
      const itemHeight = `${(380) / completeRateData.length}rpx`;

      // 更新.item元素的样式
      that.setData({
        itemHeight: itemHeight
      });
    })
    
    /**
     * 按区域统计
     */

    request("/dataCenter/area").then(res => {
      const areaData = res.data.template.succ.data.list;
      console.log(areaData)
      that.setData({
        areaDataList: areaData,
        areaDataKeysList: Object.keys(areaData[0])
      })
    }) 

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
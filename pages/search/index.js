import {
  getSearchHistory,
  getSearchPopular,
} from '../../services/fetchSearchHistory';

Page({
  data: {
    historyWords: [],
    popularWords: [],
    searchValue: '',
    dialog: {
      title: '确认删除当前历史记录',
      showCancelButton: true,
      message: '',
    },
    dialogShow: false,
  },

  deleteType: 0,
  deleteIndex: '',

  onShow() {
    this.queryHistory();
    this.queryPopular();
  },

  /**
   * 查询历史记录
   * @returns {Promise<void>}
   */
  async queryHistory() {
    try {
      const data = await getSearchHistory();
      const code = 'Success';
      if (String(code).toUpperCase() === 'SUCCESS') {
        const { historyWords = [] } = data;
        this.setData({
          historyWords,
        });
      }
    } catch (error) {
      console.error(error);
    }
  },

  /**
   * 查询热门搜索
   * @returns {Promise<void>}
   */
  async queryPopular() {
    try {
      const data = await getSearchPopular();
      const code = 'Success';
      if (String(code).toUpperCase() === 'SUCCESS') {
        const { popularWords = [] } = data;
        this.setData({
          popularWords,
        });
      }
    } catch (error) {
      console.error(error);
    }
  },

  /**
   * 清空历史记录的再次确认框
   * 后期可能需要增加一个向后端请求的接口
   * @returns {Promise<void>}
   */
  confirm() {
    const { historyWords } = this.data;
    const { deleteType, deleteIndex } = this;
    historyWords.splice(deleteIndex, 1);
    if (deleteType === 0) {
      this.setData({
        historyWords,
        dialogShow: false,
      });
    } else {
      this.setData({ historyWords: [], dialogShow: false });
    }
  },

  /**
   * 取消清空历史记录
   * @returns {Promise<void>}
   */
  close() {
    this.setData({ dialogShow: false });
  },

  /**
   * 点击清空历史记录
   * @returns {Promise<void>}
   */
  handleClearHistory() {
    const { dialog } = this.data;
    this.deleteType = 1;
    this.setData({
      dialog: {
        ...dialog,
        message: '确认删除所有历史记录',
      },
      dialogShow: true,
    });
  },

  deleteCurr(e) {
    const { index } = e.currentTarget.dataset;
    const { dialog } = this.data;
    this.deleteIndex = index;
    this.setData({
      dialog: {
        ...dialog,
        message: '确认删除当前历史记录',
        deleteType: 0,
      },
      dialogShow: true,
    });
  },

  /**
   * 点击关键词跳转搜索
   * 后期需要增加跳转和后端请求接口
   * @returns {Promise<void>}
   */
  handleHistoryTap(e) {
    const { historyWords } = this.data;
    const { dataset } = e.currentTarget;
    const _searchValue = historyWords[dataset.index || 0] || '';
    wx.switchTab({ url: '/pages/index/index' });
    // if (_searchValue) {
    //     wx.navigateTo({
    //         url: `/pages/goods/result/index?searchValue=${_searchValue}`,
    //     });
    // }
  },

  /**
   * 提交搜索框内容
   * 后期需要增加跳转和后端请求接口
   * @returns {Promise<void>}
   */
  handleSubmit(e) {
    const { value } = e.detail.value;
    if (value.length === 0) return;
    wx.switchTab({ url: '/pages/index/index' });
    // wx.navigateTo({
    //     url: `/pages/goods/result/index?searchValue=${value}`,
    // });
  },

  /**
   * 点击取消回到主页
   * @returns {Promise<void>}
   */
  actionHandle() {
    this.setData({
      searchValue: '',
    });
    wx.switchTab({ url: '/pages/index/index' });
  },
});

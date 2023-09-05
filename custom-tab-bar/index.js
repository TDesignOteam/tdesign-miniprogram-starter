const app = getApp()

Component({
  data: {
    value: '',        // 初始值设置为空，避免第一次加载时闪烁
    unreadNum: 0,     // 未读消息数量
  },
  lifetimes: {
    ready() {
      const pages = getCurrentPages();
      const curPage = pages[pages.length - 1];
      if (curPage) {
        const nameRe = /pages\/(\w+)\/index/.exec(curPage.route);
        if (nameRe[1])
          this.setData({ value: nameRe[1] })
      }

      // 同步全局未读消息数量
      this.setUnreadNum(app.globalData.unreadNum)
      app.eventBus.on('unread-num-change', (unreadNum) => {
        this.setUnreadNum(unreadNum)
      })
    },
  },
  methods: {
    handleChange(e) {
      const { value } = e.detail
      wx.switchTab({ url: `/pages/${value}/index` })
    },

    /** 设置未读消息数量 */
    setUnreadNum(unreadNum) {
      this.setData({ unreadNum })
    }
  }
})

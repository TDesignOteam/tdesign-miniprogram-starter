
Component({
  data: {
    value: 'index',
    list: [{
      icon: 'home',
      value: 'index',
      label: '首页',
    },{
      icon: 'control-platform',
      value: 'explore',
      label: '发现',
    }, {
      icon: 'user',
      value: 'my',
      label: '我的'
    }]
  },
  lifetimes: {
    ready() {
      const pages = getCurrentPages();
      const curPage = pages[pages.length - 1];
      
      if (curPage) {
        const nameRe = /pages\/(\w+)\/index/.exec(curPage.route);
        if (nameRe === null) return
        if (nameRe[1] && nameRe) {
          this.setData({
            value: nameRe[1]
          })
        }
      }
    }
  },
  methods: {
    handleChange(e) {
      const { value } = e.detail;

      // this.setData({ value });
      wx.switchTab({
        url: `/pages/${value}/index`,
      })
    }
  }
})

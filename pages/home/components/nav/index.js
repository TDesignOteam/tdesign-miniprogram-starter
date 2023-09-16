Component({
  options: {
    styleIsolation: 'shared'
  },
  properties: {

  },
  data: {
    visible: false,
    sidebar: [{
        title: '首页'
      }, {
        title: '搜索页'
      }, {
        title: '发布页',
      },
      {
        title: '消息列表页',
      },
      {
        title: '对话页',
      },
      {
        title: '个人中心页',
      },
      {
        title: '个人信息表单页',
      },
      {
        title: '设置页',
      },
      {
        title: '数据图表页',
      },
      {
        title: '登录注册页',
      },
    ]
  },
  methods: {
    openDrawer() {
      this.setData({
        visible: true
      })
    },
    onClickSearch(){
      wx.navigateTo({
        url: '/pages/search/index',
      })
    }
  }
})
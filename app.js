// app.js
App({
  onLaunch() {
    const updateManager = wx.getUpdateManager()

    updateManager.onCheckForUpdate((res) => {
      // console.log(res.hasUpdate)
    })

    updateManager.onUpdateReady(() => {
      wx.showModal({
        title: '更新提示',
        content: '新版本已经准备好，是否重启应用？',
        success(res) {
          if (res.confirm) {
            updateManager.applyUpdate()
          }
        }
      })
    })
  },
  globalData: {
    userInfo: null
  }
})

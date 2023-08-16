// app.js
import { connectSocket, fetchUnreadNum } from './services/chat'

App({
  onLaunch() {
    const updateManager = wx.getUpdateManager()

    updateManager.onCheckForUpdate(function (res) {
      // console.log(res.hasUpdate)
    })

    updateManager.onUpdateReady(function () {
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

    this.getUnreadNum()
    this.connect()
  },
  globalData: {
    userInfo: null,
    unreadNum: 0,       // 未读消息数量
    socket: null,       // SocketTask 对象
  },

  /** 全局事件总线 */
  eventBus: {
    events: {},
    on(event, callback) {
      if (!this.events[event])
        this.events[event] = []
      this.events[event].push(callback)
    },
    off(event, callback) {
      if (!this.events[event])
        return
      if (!callback)
        this.events[event] = []
      else {
        const index = this.events[event].indexOf(callback)
        if (index !== -1)
          this.events[event].splice(index, 1)
      }
    },
    emit(event, ...args) {
      if (this.events[event])
        this.events[event].forEach(callback => callback(...args))
    }
  },

  /** 初始化WebSocket */
  connect() {
    const socket = connectSocket()
    socket.onMessage((data) => {
      data = JSON.parse(data)
      if (data.type === 'message' && !data.data.message.read)
        this.setUnreadNum(this.globalData.unreadNum + 1)
    })
    this.globalData.socket = socket
  },

  /** 获取未读消息数量 */
  getUnreadNum() {
    fetchUnreadNum().then(({ data }) => {
      this.globalData.unreadNum = data
      this.eventBus.emit('unread-num-change', data)
    })
  },

  /** 设置未读消息数量 */
  setUnreadNum(unreadNum) {
    this.globalData.unreadNum = unreadNum
    this.eventBus.emit('unread-num-change', unreadNum)
  }
})

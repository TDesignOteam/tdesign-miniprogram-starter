const ServiceMockData = require('../../mock/service.js')
const LoginMockData = require('../../mock/personinfo.js')

Page({
  data: {
    logs: [],
    image: '',
    isLoad:false,
    name:'',
    star:'',
    city:'',
    service:[],
    settingdata:[
      {name:'联系客服',icon:'service',type:'service'},
      {name:'设置',icon:'setting',type:'setting'},
    ]
  },
  onLoad() {
    this.setData({service:ServiceMockData['api/service'].data.service})
  },
  onShow(){
    const Token = wx.getStorageSync('access_token');
    const {image,name,star,city} = LoginMockData['api/login'].data
    if(Token)
      this.setData({
        isLoad:true,
        image:image,
        name:name,
        star:star,
        city:city,
       })
  },
  Login(e){
    wx.navigateTo({
      url: '/pages/login/login',
    })
  },

  // 点击设置按钮
  OnClickSetting(){
    wx.navigateTo({
      url: '/pages/setup/index',
    })
  },

  // 点击编辑按钮
  GotoEdit(){
    wx.navigateTo({ url: '/pages/my/info-edit/index' });
  },

  // 点击服务按钮
  onClickService(e){
    // console.log(e.target.dataset.index)
    let index = e.target.dataset.index
    if(index >= 4 && index <= 7){
      this.navigateToDataCenter()
    }
  },

  // 跳转数据中心
  navigateToDataCenter(){
    wx.navigateTo({
      url: '/pages/dataCenter/index',
    })
  },
})

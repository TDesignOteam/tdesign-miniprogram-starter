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
  GotoEdit(){
    wx.navigateTo({ url: '/pages/my/info-edit/index' });
  },
  onClick(e){
    console.log(e)
  }
})

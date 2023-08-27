// logs.js
const util = require('../../utils/util.js')
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
    var Token = wx.getStorageSync('access_token');
    const {image,name,star,city} = LoginMockData['api/login'].data
    if(Token){
      this.setData({
        isLoad:true,
        image:image,
        name:name,
        star:star,
        city:city,
       })
      }
  },
  Login(e){
    wx.navigateTo({
      url: 'url',
    })
  },
  onClickCell(e)
  {
    const { type } = e.currentTarget.dataset;
    switch(type){
      case 'service':{
        wx.navigateTo({
          url: 'url',
        })
        break;
      }
      case 'setting':{
        wx.navigateTo({
          url: 'url',
        })
        break;
      }
      case 'weixin':{
        wx.navigateTo({
          url: 'url',
        })
        break;
      }
      case 'QQ':{
        wx.navigateTo({
          url: 'url',
        })
        break;
      }
      case 'ducument':{
        wx.navigateTo({
          url: 'url',
        })
        break;
      }
      case 'map':{
        wx.navigateTo({
          url: 'url',
        })
        break;
      }
      case 'data':{
        wx.navigateTo({
          url: 'url',
        })
        break;
      }
    }
  },
  GotoEdit(){
    wx.navigateTo({
      url: 'url',
    })
  }
})

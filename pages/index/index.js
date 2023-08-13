// 获取应用实例
const app = getApp()

const tags = [{
    text: 'AI绘画',
    theme: 'primary'
  },
  {
    text: '版权素材',
    theme: 'success'
  }
]

const cradInfo = [{
  tags,
  desc: '少年,星空与梦想',
  url: '/static/home/card0.png'
}]

Page({
  data: {
    cardInfo: [{
        tags,
        desc: '少年,星空与梦想',
        url: '/static/home/card0.png'
      },
      {
        tags,
        desc: '仰望星空的少女',
        url: '/static/home/card1.png'
      },
      {
        tags,
        desc: '仰望星空的少年',
        url: '/static/home/card3.png'
      },
      {
        tags,
        desc: '少年,星空与梦想',
        url: '/static/home/card2.png'
      },
      {
        tags,
        desc: '多彩的天空',
        url: '/static/home/card4.png'
      }
    ],
  },
})
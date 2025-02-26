export default {
  path: '/api/getServiceList',
  data: {
    code: 200,
    message: 'success',
    data: {
      service: [
        { image: '/images/icon_wx.png', name: '微信', type: 'weixin', url: '' },
        { image: '/images/icon_qq.png', name: 'QQ', type: 'QQ', url: '' },
        { image: '/images/icon_doc.png', name: '腾讯文档', type: 'document', url: '' },
        { image: '/images/icon_map.png', name: '腾讯地图', type: 'map', url: '' },
        { image: '/images/icon_td.png', name: '数据中心', type: 'data', url: '/pages/dataCenter/index' },
        { image: '/images/icon_td.png', name: '数据中心', type: 'data', url: '/pages/dataCenter/index' },
        { image: '/images/icon_td.png', name: '数据中心', type: 'data', url: '/pages/dataCenter/index' },
        { image: '/images/icon_td.png', name: '数据中心', type: 'data', url: '/pages/dataCenter/index' },
      ],
    },
  },
};

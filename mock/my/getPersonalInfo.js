export default {
  path: '/api/genPersonalInfo',
  data: {
    code: 200,
    message: 'success',
    data: {
      image: '/images/avatar1.png',
      name: '小小轩',
      star: '天枰座',
      city: '深圳',
      gender: '男',
      birth: '1994-9-27',
      address: ['440000', '440300'],
      brief: '这是一条个人简介',
      photos: [
        {
          url: 'https://tdesign.gtimg.com/mobile/demos/example4.png',
          name: 'uploaded1.png',
          type: 'image',
        },
        {
          url: 'https://tdesign.gtimg.com/mobile/demos/example6.png',
          name: 'uploaded2.png',
          type: 'image',
        },
      ],
    },
  },
};

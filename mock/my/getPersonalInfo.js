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
      gender: 0,
      birth: '1994-09-27',
      address: ['440000', '440300'],
      brief: '在你身边，为你设计',
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

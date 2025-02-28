// 复制到本地临时路径，方便预览
const getLocalUrl = (path, name) => {
  const fs = wx.getFileSystemManager();
  const tempFileName = `${wx.env.USER_DATA_PATH}/${name}`;
  fs.copyFileSync(path, tempFileName);
  return tempFileName;
};

export default {
  path: '/api/genPersonalInfo',
  data: {
    code: 200,
    message: 'success',
    data: {
      image: '/images/avatar1.png',
      name: '小小轩',
      star: '天枰座',
      gender: 0,
      birth: '1994-09-27',
      address: ['440000', '440300'],
      brief: '在你身边，为你设计',
      photos: [
        {
          url: getLocalUrl('/images/img_td.png', 'uploaded1.png'),
          name: 'uploaded1.png',
          type: 'image',
        },
        {
          url: getLocalUrl('/images/img_td.png', 'uploaded2.png'),
          name: 'uploaded2.png',
          type: 'image',
        },
      ],
    },
  },
};

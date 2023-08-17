var Mock = require('./mock.js');

export function ajax(url, fn, method = 'get', header = {}) {
  // 模拟数据
  var res = Mock.mock({
    status: 0,
    error_code: '',
    error_msg: '',
    'data|1-4': ['AI绘画', '版权素材', '原创', '风格灵动'],
  });
  // 输出结果
  // console.log(JSON.stringify(res, null, 2))
  fn(res);
}

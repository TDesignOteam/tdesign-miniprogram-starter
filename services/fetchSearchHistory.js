import { config } from '~/config/index';
import delay from './delay';
import { getSearchHistoryMock, getSearchPopularMock } from '~/model/search';

/** 获取搜索历史 */
function mockSearchHistory() {
  return delay().then(() => getSearchHistoryMock());
}

/** 获取搜索历史 */
export function getSearchHistory() {
  if (config.useMock) {
    return mockSearchHistory();
  }
  return new Promise((resolve) => {
    resolve('real api');
  });
}

/** 获取搜索热点 */
function mockSearchPopular() {
  return delay().then(() => getSearchPopularMock());
}

/** 获取搜索热点 */
export function getSearchPopular() {
  if (config.useMock) {
    return mockSearchPopular();
  }
  return new Promise((resolve) => {
    resolve('real api');
  });
}

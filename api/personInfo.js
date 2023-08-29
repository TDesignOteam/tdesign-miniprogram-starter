import { config } from '../config/index';
import { genPersonInfo } from '../model/genPersonInfo';

function mockFetchPerson() {
  const { delay } = require('../utils/delay');
  return delay().then(() => ({
    ...genPersonInfo()
  }));
}

export function fetchPersonInfo() {
  if (config.useMock) {
    return mockFetchPerson();
  }
  return new Promise((resolve) => {
    resolve('real api');
  });
}
import config from '../config/index';
import genPersonInfo from '../model/genPersonInfo';
import delay from './delay'

function mockFetchPerson() {
  return delay().then(() => ({
    ...genPersonInfo()
  }));
}

export default function fetchPersonInfo() {
  if (config.useMock) {
    return mockFetchPerson();
  }
  return new Promise((resolve) => {
    resolve('real api');
  });
}
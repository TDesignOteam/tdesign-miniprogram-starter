import {
  request
} from '../mock/request'

export const getHomeCards = () => {
  return request('/home/cards')
}

export const getHomeSwipers = () => {
  return request('/home/swpiers')
}
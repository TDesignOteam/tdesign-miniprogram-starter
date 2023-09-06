import {
  request
} from '../mock/request'

export const getHomeCards = () => request('/home/cards')

export const getHomeSwipers = () => request('/home/swpiers')
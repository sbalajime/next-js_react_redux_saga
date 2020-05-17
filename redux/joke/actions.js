import { GET_JOKE } from '../actions';

export const getjoke = (id) => ({
  type: GET_JOKE.REQUEST,
  payload: id
});
export const getjokeSuccess = (data) => ({
  type: GET_JOKE.SUCCESS,
  payload: data
});

export const getjokeFailed = (data) => ({
  type: GET_JOKE.FAILURE,
  payload: data
});

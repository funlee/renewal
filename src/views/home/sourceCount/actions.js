import { FETCH_STARTED, FETCH_SUCCESS, FETCH_FAILURE } from './actionTypes';
import API from '@/assets/scripts/api';
import axios from 'axios';

export const fetchStarted = () => ({
  type: FETCH_STARTED
});

export const fetchSuccess = (data) => ({
  type: FETCH_SUCCESS,
  data
})

export const fetchFailure = (error) => ({
  type: FETCH_FAILURE,
  error
})

export const fetchSourceCount = (params) => {
  return (dispatch) => {
    dispatch(fetchStarted())
    return axios.get(API.homeSourceCount).then(data => {
      dispatch(fetchSuccess(data));
    })
    .catch(error => dispatch(fetchFailure(error)))
  };
}



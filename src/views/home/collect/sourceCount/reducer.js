import { FETCH_STARTED, FETCH_SUCCESS, FETCH_FAILURE } from './actionTypes';
import * as Status from './status.js';

export default (state = { status: Status.LOADING }, action) => {
  switch (action.type) {
    case FETCH_STARTED: {
      return { status: Status.LOADING };
    }
    case FETCH_SUCCESS: {
      return { ...state, status: Status.SUCCESS, data: action.data };
    }
    case FETCH_FAILURE: {
      return { status: Status.FAILURE };
    }
    default: {
      return state;
    }
  }
}

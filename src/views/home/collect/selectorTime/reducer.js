import { SET_FILTIME, SET_SELFTIME } from './actionsType';
import { TIMES } from './constants';

const initState = { type: SET_FILTIME, value: TIMES[0].id };

export default (state = initState, action) => {
  switch (action.type) {
    case SET_FILTIME: {
      return {
        type: SET_FILTIME,
        value: action.id
      }
    }
    case SET_SELFTIME: {
      return {
        type: SET_SELFTIME,
        value: { ...action.data }
      }
    }
    default: {
      return state;
    }
  }
}

import { SET_FILTIME, SET_SELFTIME } from './actionsType';

export const setFiltime = (id) => ({
  id,
  type: SET_FILTIME
});

export const setSelftime = (data) => ({
  data: { ...data },
  type: SET_SELFTIME
});


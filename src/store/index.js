import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk'
import { reducer as selectorTimeReducer } from '../views/home/collect/selectorTime';
import { reducer as sourceCountReducer } from '../views/home/collect/sourceCount';

const reducer = combineReducers({
  selectorTime: selectorTimeReducer,
  sourceCount: sourceCountReducer,
});

const middlewares = [thunkMiddleware];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const storeEnhancers = composeEnhancers(
  applyMiddleware(...middlewares)
);

export default createStore(reducer, {}, storeEnhancers);

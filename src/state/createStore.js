import { createStore } from 'redux';
import { accountReducer } from './reducers/accountReducer';

export default preloadedState => {
  return createStore(accountReducer, preloadedState);
};

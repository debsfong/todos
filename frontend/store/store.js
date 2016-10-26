import { createStore } from 'redux';
import rootReducer from '../reducers/root_reducer';
import masterMiddleware from '../middleware/master_middleware';

const preloadedState = {};

const configureStore = (state = preloadedState) => (
  createStore(rootReducer, state, masterMiddleware)
);

export default configureStore;

import { combineReducers, legacy_createStore as createStore } from 'redux';
import counterReducer from '../reducers/CounterReducer';

const rootReducer = combineReducers({
  counter: counterReducer,
});

export const store = createStore(rootReducer);

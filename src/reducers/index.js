import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import sessionReducer from './sessions';

const rootReducer = combineReducers({
  session: sessionReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

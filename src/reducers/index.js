import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import propertiesReducer from './properties';
import sessionReducer from './sessions';

const rootReducer = combineReducers({
  session: sessionReducer,
  properties: propertiesReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

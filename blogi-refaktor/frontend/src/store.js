import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import notificationReducer from './reducers/notificationReducer';
import blogReducer from './reducers/blogReducer';
import userReducer from './reducers/userReducer';
import thunk from 'redux-thunk';

const reducers = combineReducers({
  listOfBlogs:blogReducer,
  messages:notificationReducer,
  user:userReducer
});

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

export default store;
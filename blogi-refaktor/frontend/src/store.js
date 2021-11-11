import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import notificationReducer from './reducers/notificationReducer';
import blogReducer from './reducers/blogReducer';
import userReducer from './reducers/userReducer';
import usersReducer from './reducers/usersReducer';
import commentsReducer from './reducers/commentsReducer';
import thunk from 'redux-thunk';

const reducers = combineReducers({
  listOfBlogs:blogReducer,
  messages:notificationReducer,
  user:userReducer,
  userlist:usersReducer,
  comments:commentsReducer
});

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

export default store;
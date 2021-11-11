/*
username
name
token
*/

import loginServices from '../services/userServices';
import blogServices from '../services/blogServices';
import commentServices from '../services/commentServices';
import { setTimedWarning } from './notificationReducer';

const userReducer = (state = '', action) => {

  switch(action.type) {

    case 'SET_USER':

      const user = {
        username:action.username,
        name:action.name,
        token:action.token
      }

      return user;

    case 'LOGOUT':
      return '';

    default:
      return state;

  };

};

export const loginFromStorage = (user) => {
  blogServices.setToken(user.token);
  commentServices.setToken(user.token);
  return{
    type:'SET_USER',
    username:user.username,
    name:user.name,
    token:user.token
  }
};

export const loginUsingReducer = credentials => {
  return async dispatch => {

    try
    {
      const user = await loginServices.login(credentials);
      window.localStorage.setItem('loggedInBlogUser', JSON.stringify(user));

      dispatch({
        type:'SET_USER',
        username:user.username,
        name:user.name,
        token:user.token
      })
      blogServices.setToken(user.token);
      commentServices.setToken(user.token);
    }
    catch(error)
    {
      dispatch(setTimedWarning('Invalid username or password',5));
    }

  };
};

export const logCurrentUserOut = () => {

  window.localStorage.removeItem('loggedInBlogUser');
  blogServices.setToken(null);
  commentServices.setToken(null);

  return {
    type:'LOGOUT'
  }

};

export default userReducer;
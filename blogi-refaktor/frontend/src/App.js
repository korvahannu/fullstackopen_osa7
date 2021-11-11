import './App.css';
import React, { useEffect } from 'react';

import Warning from './components/Warning';
import ListOfBlogs from './components/ListOfBlogs.js';
import Notification from './components/Notification.js';
import LoginPrompt from './components/LoginPrompt';
import LogoutForm from './components/LogoutForm';
import ToggableCreateNewForm from './components/ToggableCreateNewForm';

import { useDispatch, useSelector } from 'react-redux';
import { initializeBlog } from './reducers/blogReducer';
import { loginFromStorage } from './reducers/userReducer';

const App = () => {

  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  useEffect( () => {
    const loggedInBlogUser = window.localStorage.getItem('loggedInBlogUser');

    if(loggedInBlogUser)
    {
      const user = JSON.parse(loggedInBlogUser);
      dispatch(loginFromStorage(user));
    }

    dispatch(initializeBlog());
  }, []);

  return (
    <div id="wrapper">
      <h1>Blogs by Hannu Korvala</h1>

      <Notification />
      <Warning />

      {
        user === ""
          ? <LoginPrompt />
          : [<ToggableCreateNewForm />, <ListOfBlogs Key='list_of_blogs' />, <LogoutForm key='logoutform'/>]
      }

    </div>
  );
};

export default App;

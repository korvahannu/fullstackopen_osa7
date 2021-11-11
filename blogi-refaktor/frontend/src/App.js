import './App.css';
import React, { useEffect } from 'react';

import Warning from './components/Warning';
import ListOfBlogs from './components/ListOfBlogs.js';
import Notification from './components/Notification.js';
import LoginPrompt from './components/LoginPrompt';
import LogoutForm from './components/LogoutForm';
import ToggableCreateNewForm from './components/ToggableCreateNewForm';
import ListOfUsers from './components/ListOfUsers';
import UserDetails from './components/UserDetails';

import { useDispatch, useSelector } from 'react-redux';
import { initializeBlog } from './reducers/blogReducer';
import { initializeUserList } from './reducers/usersReducer';
import { loginFromStorage } from './reducers/userReducer';
import { Routes, Route, Link } from 'react-router-dom';
import { loadComments } from './reducers/commentsReducer';

import SingleBlogDetails from './components/SingleBlogDetails';

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
    dispatch(initializeUserList());
    dispatch(loadComments());
  }, []);

  return (
    <div id="wrapper">
      <LogoutForm key='logoutform' />
      <h1>Blogs by Hannu Korvala</h1>

      <div id="navigation-bar">
        <Link to='/' className='navigation-bar-link'>Blogs</Link>
        <Link to='/users' className='navigation-bar-link'>Users</Link>
      </div>

      <Notification />
      <Warning />

      <LoginPrompt />
  
      <Routes>

        <Route path='/blogs/:id'
          element={user !== "" ? <SingleBlogDetails /> : null}
        />

        <Route path='/users/:id'
          element={user !== "" ? <UserDetails /> : null}
        />

        <Route path='/users'
          element={
            user!==""
            ? <ListOfUsers key='list_of_users' />
            : null
          }
          />

        <Route path='/'
          element={
            user !== ""
          ? [<ToggableCreateNewForm key='form_create_new_blog' />, <ListOfBlogs key='list_of_blogs' />]
          : null
          }
        />
      </Routes>

    </div>
  );
};

export default App;

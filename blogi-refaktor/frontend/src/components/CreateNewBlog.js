import React, { useState } from 'react';

import { addNewBlog } from '../reducers/blogReducer';
import { useDispatch } from 'react-redux';
import { setTimedNotification, setTimedWarning } from '../reducers/notificationReducer';

const CreateNewBlog = ({hideForm}) => {

  const dispatch = useDispatch();

  const [formTitle, setFormTitle] = useState('');
  const [formAuthor, setFormAuthor] = useState('');
  const [formUrl, setFormUrl] = useState('');

  const newBlog = (event) => {
    event.preventDefault();

    const newBlog = {
      title: formTitle,
      author: formAuthor,
      url: formUrl
    };

    try
    {
      dispatch(addNewBlog(newBlog));
      dispatch(setTimedNotification(`A new blog ${newBlog.title} by ${newBlog.author} has been added.`, 5));
      hideForm();
    }
    catch (error)
    {
      dispatch(setTimedWarning('Please input valid information only',5));
    };

    setFormTitle('');
    setFormAuthor('');
    setFormUrl('');
  };

  return(
    <div id="create_new_blog">
      <h2>Create new </h2>
      <form onSubmit={newBlog}>
        <div>
                title
          <input id="createBlogTitle" type="text" name="Title" value={formTitle} onChange={({ target }) => setFormTitle(target.value)} />
        </div>
        <div>
                author
          <input id="createBlogAuthor" type="text" name="Author" value={formAuthor} onChange={({ target }) => setFormAuthor(target.value)} />
        </div>
        <div>
                url
          <input id="createBlogUrl" type="text" name="Url" value={formUrl} onChange={({ target }) => setFormUrl(target.value)} />
        </div>
        <button type="submit" id="button-submitNewBlog">Create</button>
      </form>
    </div>
  );

};

export default CreateNewBlog;
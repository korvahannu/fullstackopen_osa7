import React from 'react';
import { useSelector } from 'react-redux';
import ListOfBlogs_Single from './ListOfBlogs_Single';

const ListOfBlogs = () => {

  const listOfBlogs = useSelector(state => state.listOfBlogs);

  return(
    <div key='drawBlogList'>

      <h3>List of current blogs</h3>

      {listOfBlogs
      .sort((a,b) => b.likes -a.likes)
      .map(
        blog =>
          <ListOfBlogs_Single key={blog.id} blog={blog}  />

      )}
    </div>
  );
};

export default ListOfBlogs;
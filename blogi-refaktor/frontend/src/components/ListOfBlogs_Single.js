import React, { useState } from 'react';
import { useNavigate } from 'react-router';

const ListOfBlogs_Single = ({ blog }) => {

  const navigate = useNavigate();

  const viewDetails = (id) => {
    navigate(`/blogs/${id}`, { replace: false });
  }

  return(
    <div className='blogList-singleBlog'>
      <a href='' onClick={() => viewDetails(blog.id)}><b>{blog.title}</b> <i>by {blog.author}</i> <br/></a>
    </div>
  );
};

export default ListOfBlogs_Single;
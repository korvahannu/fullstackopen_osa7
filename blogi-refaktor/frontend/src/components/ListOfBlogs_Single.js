import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import { deleteBlog, likeBlog } from '../reducers/blogReducer';

const ListOfBlogs_Single = ({ blog }) => {

  const dispatch = useDispatch();

  const [moreInfo, setMoreInfo] = useState(false);

  const toggleMoreInfo = () => {
    setMoreInfo(!moreInfo);
  };

  const divStyle = {
    marginBottom:'16px',
    borderBottom:'1px solid #203F5E',
    borderRadius:'8px'
  };

  const buttonStyle = {
    height:'32px',
    fontSize:'0.8em',
    padding:'0',
    backgroundColor:'#F0F3F6',
    backgroundImage:'none',
    color:'#203F5E',
    margin:'0px'
  };

  const drawMoreInfoButton = () => (
    <button type="text" style={buttonStyle} onClick={toggleMoreInfo} className='viewMoreButton'>View</button>
  );

  const deleteCurrentBlog = () => {

    if(window.confirm(`Do you want to remove ${blog.title} by ${blog.author}`))
    {
      dispatch(deleteBlog(blog));
    }
  };

  return(
    <div style={divStyle} className='singleBlogContainer'>
      <b>{blog.title}</b> by <i>{blog.author}</i> <br/>

      {
        moreInfo === true
          ? MoreInfo({ blog, toggleMoreInfo, deleteCurrentBlog, dispatch })
          : drawMoreInfoButton()
      }
    </div>
  );
};

const MoreInfo = ({ blog, toggleMoreInfo, deleteCurrentBlog, dispatch }) => {

  const buttonStyle = {
    height:'32px',
    fontSize:'0.8em',
    padding:'0',
    backgroundColor:'#F0F3F6',
    backgroundImage:'none',
    color:'#203F5E',
    margin:'0px'
  };

  const likeButtonStyle = {
    backgroundImage:'none',
    backgroundColor:'#F0F3F6',
    width:'8px',
    height:'24px',
    margin:'0px',
    padding:'0px'
  };

  const deleteButtonStyle = {
    margin:'0px',
    padding:'0px',
    backgroundImage:'none',
    backgroundColor:'F0F3F6',
    color:'red',
    width:'5px',
    fontSize:'0.9em',
    marginBottom:'16px'
  };

  const likeCurrentBlog = () => {
    dispatch(likeBlog(blog));
  };

  return(
    <div style={{ marginTop:'16px' }}>
      <b>Url:</b> {blog.url}<br />
      <b>Likes:</b> {blog.likes}<br />
      <b>User:</b> {blog.user.name}

      <button style={likeButtonStyle} onClick={likeCurrentBlog} className='likeButton'>👍</button>

      <br />
      <button style={deleteButtonStyle} onClick={deleteCurrentBlog}>delete blog?</button> <br />
      <button type="text" style={buttonStyle} onClick={toggleMoreInfo}>Hide</button>
    </div>
  );
};

export default ListOfBlogs_Single;
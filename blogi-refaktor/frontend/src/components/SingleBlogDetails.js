import React, {useState, useEffect} from 'react'
import { useParams } from "react-router";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { likeBlog } from '../reducers/blogReducer';
import { loadComments } from '../reducers/commentsReducer';
import commentServices from '../services/commentServices';

const SingleBlogDetails = () => {

  const id = useParams().id;
  const bloglist = useSelector(state => state.listOfBlogs)
  const allComments = useSelector(state => state.comments)
  const dispatch = useDispatch();

  const [formComment, setFormComment] = useState('');

  let blog;
  
  if(bloglist !== null)
    blog = bloglist.find(u => u.id === id);

  if(!blog)
    return (<div><h2>Loading blog info...</h2></div>);

  const submitComment = async (event) => {
    event.preventDefault();

    const newComment = {
      comment:formComment,
      blogId:blog.id
    }

    setFormComment('');
    await commentServices.newComment(newComment);

    dispatch(loadComments());
  };

  return(
    <div>
      <h3 className='generic-h3'>
        {blog.title} by {blog.author}
        <span className='generic-crunch'> added by {blog.user.name}</span>
      </h3>
      <div className='blog-article-open'>
        <a href={blog.url}>Open article</a>
      </div>
      <br />
      <button onClick={() => dispatch(likeBlog(blog))} className='button-like-generic'>{blog.likes} likes 👍</button>
      
      
      <h4>Comments</h4>
      <hr />

      <ul>
        {
          allComments
          .filter(comment => comment.blogId === blog.id)
          .map(comment => <li key={comment.id}>{comment.comment}</li>)
        }
      </ul>

      <form style={{paddingLeft:'64px'}} onSubmit={submitComment}>
        <input type="text" name="newComment" value={formComment} onChange={({ target }) => setFormComment(target.value)} />
        <button type="submit" style={{fontSize:'1em', marginLeft:'32px'}}>Add</button>
      </form>
      
    </div>
  )
};

export default SingleBlogDetails;
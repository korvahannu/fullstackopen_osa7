
/*
  blogien tietojen talletus ja näyttäminen reduxiin

  huom: action.data sisältää kaikki tarvittavat tiedot blogin näyttämiseen
*/

import blogServices from '../services/blogServices.js'

const blogReducer = (state=[], action) => {
  switch(action.type)
  {
    case 'INIT':
      return state = action.blogData;
    
    case 'NEW':
      return state = [...state, action.blogData]

    case 'DELETE':

      return state.filter(blog => blog.id !== action.blogData.id);
    
    case 'LIKE':
      const id = action.blogData.id;
      const blogPost = state.find(blog => blog.id === id);

      blogPost.likes++;
      return state.map(blog =>
        blog.id !== id
        ? blog
        : blogPost
      );

    default:
      return state;
  }
};


export const likeBlog = (targetBlog) => {

  return async dispatch => {
    const blogData = await blogServices.likeBlog(targetBlog);
    dispatch({type:'LIKE', blogData});
  };

};

export const deleteBlog = (blogData) => {

  return async dispatch => {
    await blogServices.deleteBlog(blogData);
    dispatch({type:'DELETE', blogData});
  };
};

export const addNewBlog = (newBlog) => {
  
  return async dispatch => {
    await blogServices.create(newBlog);
    const blogData = await blogServices.getAll();
    dispatch({type:'INIT', blogData});
  };

};

export const initializeBlog = () => {
  
  return async dispatch => {
    const blogData = await blogServices.getAll();
    dispatch({type:'INIT', blogData});
  };
}

export default blogReducer;
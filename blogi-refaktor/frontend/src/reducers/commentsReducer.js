import commentServices from "../services/commentServices";

const commentReducer = (state = [], action) => {

  switch(action.type)
  {
    case 'INIT_COMMENTS':
      return action.comments
    
    default:
      return state;
  }
};

export const loadComments = () => {
  
  return async dispatch => {
    const comments = await commentServices.getAllComments();
    dispatch({type:'INIT_COMMENTS', comments});
  };
}

export default commentReducer;
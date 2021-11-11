import userServices from "../services/userServices";

const userReducer = (state = null, action) => {

  switch(action.type)
  {
    case 'INIT_USERLIST':
      return action.userlist;
    default:
      return state;
  }

};

export const initializeUserList = () => {

  return async dispatch => {

    const userlist = await userServices.getAllUsers();
    dispatch({
      type:'INIT_USERLIST',
      userlist
    })

  };

};

export default userReducer;
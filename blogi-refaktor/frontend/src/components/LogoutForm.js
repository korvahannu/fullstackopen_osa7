import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logCurrentUserOut } from "../reducers/userReducer";

const LogoutForm = () => {

  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  if(user === "")
  {
    return null;
  }

  return(
    <div key='drawLogoutForm'>
      Logged in as <i>{user.username}</i>
      <a onClick={()=>dispatch(logCurrentUserOut())} href='' id='link-logout'>Log out</a>
    </div>
  );
};

export default LogoutForm;
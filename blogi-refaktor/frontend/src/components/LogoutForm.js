import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logCurrentUserOut } from "../reducers/userReducer";

const LogoutForm = () => {

  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  return(
    <div key='drawLogoutForm'>
      Logged in as {user.username}
      <form onSubmit={()=>dispatch(logCurrentUserOut())}>
        <button type="submit">Logout</button>
      </form>
    </div>
  );
};

export default LogoutForm;
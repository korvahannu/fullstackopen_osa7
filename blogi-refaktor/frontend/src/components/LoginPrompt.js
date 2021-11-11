import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { loginUsingReducer } from '../reducers/userReducer';

const LoginPrompt = () => {

  const [formUsername, setFormUsername] = useState('');
  const [formPassword, setFormPassword] = useState('');
  const dispatch = useDispatch();

  const handleLogin = async (event) => {
    event.preventDefault();

    const credentials = {
      username: formUsername,
      password: formPassword
    };

    dispatch(loginUsingReducer(credentials));

    setFormPassword('');
    setFormUsername('');
  };

  return(
    <div id="loginPrompt">
      <h2>Please login to view posts:</h2>
      <form onSubmit={handleLogin}>
        <div>
          username <input id="loginUsername" type="text" name="Username" value={formUsername} onChange={({ target }) => setFormUsername(target.value)}/>
        </div>
        <div>
          password <input id="loginPassword" type="password" name="Password" value={formPassword} onChange={({ target }) => setFormPassword(target.value)}/>
        </div>
        <button type="submit" id="loginSubmit">login</button>
      </form>
    </div>
  );
};

export default LoginPrompt;
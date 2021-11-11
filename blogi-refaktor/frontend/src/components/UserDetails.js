import React from "react";
import { useParams } from "react-router";
import { useSelector } from 'react-redux';

const UserDetails = () => {

  const id = useParams().id;
  const userlist = useSelector(state => state.userlist);
  
  let user;
  
  if(userlist !== null)
    user = userlist.find(u => u.id === id);

  if(!user)
    return (<div><h2>Loading user info...</h2></div>);



  return(
    <div>

      <h2>{user.name}</h2>

      <h3>Added blogs</h3>
      <ul>
      
      {
        user.blogs.length === 0
        ? <li><i>user has not posted anything yet...</i></li>
        : user.blogs.map(blog => <li key={blog.id}>{blog.title}</li>)
      }
      </ul>
    </div>
  )
}

export default UserDetails;
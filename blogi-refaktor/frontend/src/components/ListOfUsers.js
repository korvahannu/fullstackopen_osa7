import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router';

const ListOfUsers = () => {

  const userlist = useSelector(state => state.userlist);
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/users/${id}`, { replace: false });
  }

  return (
    <div>
      <h3>List of users</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Blogs created</th>
          </tr>
        </thead>
        <tbody>
        {
          userlist !== null
          ? userlist.map(u => <tr key={u.id}><th style={{width:'200px'}}><a href='' onClick={() => handleClick(u.id)}>{u.name}</a></th><th>{u.blogs.length}</th></tr>)
          : null
        }
        </tbody>
      </table>
    </div>
  );

};

export default ListOfUsers;
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function UserList() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  // GET all users
  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  // DELETE user
  const deleteUser = async (id) => {
    await fetch(`http://localhost:3000/users/${id}`, {
      method: "DELETE"
    });
    setUsers(users.filter(u => u._id !== id));
  };

  return (
    <div>
      <h2>User List</h2>

      <button onClick={() => navigate("/")}>
        Add New User
      </button>

      <br /><br />

      {users.map(user => (
        <div key={user._id}>
          <b>{user.username}</b>
          <br />

          <button onClick={() => navigate(`/update/${user._id}`)}>
            Update
          </button>

          <button onClick={() => deleteUser(user._id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default UserList;

import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddUser() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const addUser = async () => {
    await fetch("http://localhost:3000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password })
    });
    navigate("/list");
  };

  return (
    <div>
      <h2>Add User</h2>
      <input placeholder="Username" onChange={e => setUsername(e.target.value)} />
      <input placeholder="Password" onChange={e => setPassword(e.target.value)} />
      <button onClick={addUser}>Add</button>
    </div>
  );
}

export default AddUser;

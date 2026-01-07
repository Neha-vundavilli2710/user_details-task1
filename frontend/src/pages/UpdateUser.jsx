import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function UpdateUser() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // GET single user (for edit)
  useEffect(() => {
    fetch(`http://localhost:3000/users/${id}`)
      .then(res => res.json())
      .then(data => {
        setUsername(data.username);
        setPassword(data.password);
      });
  }, [id]);

  // UPDATE user
  const updateUser = async () => {
    await fetch(`http://localhost:3000/users/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password })
    });

    navigate("/list");
  };

  return (
    <div>
      <h2>Update User</h2>

      <input
        value={username}
        onChange={e => setUsername(e.target.value)}
        placeholder="Username"
      />
      <br /><br />

      <input
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder="Password"
      />
      <br /><br />

      <button onClick={updateUser}>
        Update
      </button>

      {/* 🔹 BACK BUTTON */}
      <button onClick={() => navigate("/list")} style={{ marginLeft: "10px" }}>
        🔙 Back to List
      </button>
    </div>
  );
}

export default UpdateUser;

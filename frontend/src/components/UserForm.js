import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserForm() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [users, setUsers] = useState([]);

  // Fetch users when page loads
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const res = await axios.get("http://localhost:5000/api/users");
    setUsers(res.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.post("http://localhost:5000/api/users", {
      name,
      email
    });

    fetchUsers(); // refresh list
    setName("");
    setEmail("");
  };

  return (
    <div>

      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input 
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>

      <h2>Users List</h2>

      {users.map((user) => (
        <div key={user._id}>
          <p>{user.name} - {user.email}</p>
        </div>
      ))}

    </div>
  );
}

export default UserForm;

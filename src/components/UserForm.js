import React, { useState } from "react";
import { createUser, updateUser } from "../services/api";
import { useNavigate } from "react-router-dom"; // Updated

const UserForm = ({ user = {}, isEditMode = false }) => {
  const [name, setName] = useState(user.name || "");
  const [email, setEmail] = useState(user.email || "");
  const [phone, setPhone] = useState(user.phone || "");
  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = { name, email, phone };

    const request = isEditMode
      ? updateUser(user.id, userData)
      : createUser(userData);

    request
      .then(() => navigate("/"))
      .catch(() => alert("Error submitting form"));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{isEditMode ? "Edit User" : "Create User"}</h2>
      <div>
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Phone</label>
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </div>
      <button type="submit">{isEditMode ? "Update" : "Create"}</button>
    </form>
  );
};

export default UserForm;

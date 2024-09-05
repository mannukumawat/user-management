import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchUsers } from "../services/api";
import UserForm from "../components/UserForm";

function UserPage() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUsers()
      .then((response) => {
        const userData = response.data.find((u) => u.id === parseInt(id));
        if (userData) {
          setUser(userData);
        } else {
          setError("User not found");
        }
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch user");
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h2>Edit User</h2>
      <UserForm user={user} isEditMode={true} />
    </div>
  );
}

export default UserPage;

import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles.css";
const UserProfile = () => {
  const [profile, setProfile] = useState(null);
  const URI = import.meta.VITE_BACKEND_URI ;

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("userToken");
      try {
        const response = await axios.get(`${URI}/api/auth/me`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setProfile(response.data);
      } catch (error) {
        console.error("Error fetching profile", error);
      }
    };
    fetchProfile();
  }, []);

  return (
    <div>
      <h1>User Profile</h1>
      {profile ? (
        <div>
          <p>Username: {profile.username}</p>
          <p>Email: {profile.email}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default UserProfile;
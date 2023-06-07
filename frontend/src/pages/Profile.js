import { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";

const Profile = () => {
  const { user } = useAuthContext();

  return (
    <div>
      {user && (
        <div>
          <h1>Hello, "{user.username}" </h1>
          <h1>test, "{user.email}"</h1>
          {user.photo && <img src={user.photo} alt="profile" />}
        </div>
      )}
    </div>
  );
};

export default Profile;

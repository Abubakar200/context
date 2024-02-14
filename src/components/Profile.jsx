import React from "react";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
function Profile() {
  const { user } = useContext(UserContext);

  if (!user) return <h2>Login Please</h2>;
  console.log(user)
  return <h2>Welcome! {user.username}</h2>;
}

export default Profile;

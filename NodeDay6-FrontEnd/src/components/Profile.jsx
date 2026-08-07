import axios from "axios";
import { useEffect, useState } from "react";
import SignUp from "./SignUp";
import SignIN from "./SignIN";

const Profile = () => {
  const [profileData, setProfileData] = useState(null);

  async function fetchProfile() {
    const tokenFromBrowser = localStorage.getItem("token");
    console.log("got token from browser:", tokenFromBrowser);

    const response = await axios.get("http://localhost:8080/me", {
      headers: {
        token: tokenFromBrowser,
      },
    });

    console.log(response.data);
    setProfileData(response.data);
  }

  const Logout = () => {
    localStorage.removeItem("token");
    setProfileData(null);
    window.location.reload();

    {
      !profileData ? (
        <div>
          <SignUp />
          <SignIN />
        </div>
      ) : (
        <div>
          <Profile />
          <Logout />
        </div>
      );
    }
  };

  return (
    <div>
      <h1>Profile Section:</h1>
      <button
        onClick={() => {
          fetchProfile();
        }}
      >
        Fetch Profile
      </button>

      {profileData !== null ? (
        <div>
          <h2>Username: {profileData.data.username}</h2>
          <h3>Email: {profileData.data.email}</h3>
        </div>
      ) : (
        <div> Loading...</div>
      )}

      <button
        onClick={() => {
          Logout();
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Profile;

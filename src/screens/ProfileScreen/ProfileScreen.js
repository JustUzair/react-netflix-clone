import React from "react";
import "./profileScreen.css";
import netflixAvatar from "../../images/netflix avatar.png";
import Navbar from "../../components/Navbar/Navbar";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import { auth } from "../../Firebase";
import { useHistory } from "react-router-dom";
function ProfileScreen() {
  const user = useSelector(selectUser);
  const history = useHistory();
  return (
    <div className="profileScreen">
      <Navbar></Navbar>
      <div className="profileScreen__body">
        <h1>Edit Profile</h1>
        <div className="profileScreen__info">
          <img src={netflixAvatar} alt={"profile avatar"} />
          <div className="profileScreen__details">
            <h2>{user.email}</h2>
            <div className="profileScreen__plans">
              <h3>
                Plans (Current plan : Standard{" "}
                <span style={{ fontStyle: "italic", fontWeight: 400 }}>
                  Free
                </span>{" "}
                )
              </h3>
              <div className="plans">
                <div className="plan">
                  <h3>Standard</h3>
                  <p>Free</p>
                </div>
                <h2>Subscribed</h2>
              </div>
              <button
                type="button"
                className="profileScreen__signOut"
                onClick={() => {
                  auth.signOut();
                }}
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;

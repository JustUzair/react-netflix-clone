import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import netflixAvatar from "../../images/netflix avatar.png";
import netflixLogo from "../../images/netflix nav logo.png";
import "./nav.css";
function Navbar() {
  const history = useHistory();
  const [show, handleShow] = useState(false);
  const transitionNavbar = () => {
    if (window.scrollY > 100) handleShow(true);
    else handleShow(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
    return () => {
      window.removeEventListener("scroll", transitionNavbar);
    };
  }, []);
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__contents">
        <img
          className="nav__logo"
          onClick={() => {
            history.push("/");
          }}
          src={netflixLogo}
          alt={"netflix"}
        />
        <img
          className="nav__avatar"
          onClick={() => {
            history.push("/profile");
          }}
          src={netflixAvatar}
          alt={"Avatar"}
        />
      </div>
    </div>
  );
}

export default Navbar;

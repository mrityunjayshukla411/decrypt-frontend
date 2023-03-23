import React, { useState, useEffect } from "react";
import "./MobileNav2.css";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import axios from "axios";
import { verified } from "../../redux/authSlice";
import Sidebar from "../UserProfile/Sidebar";
import ConsoleHelper from "../consolelogger";


export default function MobileNavbar2() {
  const { isLoggedIn } = useSelector((state) => state.signUp);

  const dispatch = useDispatch();

  useEffect(() => {
    let windowHeight = document.documentElement.scrollHeight-61;
    ConsoleHelper(windowHeight);
    document.querySelector('.sidebar2 .sidebar').style.height = `${windowHeight}px`;
  }, []);

  var jwt
  var [imgsrc,setImgsrc] = useState('https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-portrait-176256935.jpg')
  useEffect(async () => {
    jwt = JSON.parse(localStorage.getItem("jwt"));
    axios.get("https://d3crypt-backend.onrender.com/users/:idy", { params: { id: jwt } })
    .then((res) => {
      console.log(res.data.imgKey);
      if (res && res.data.imgKey) {
        var x = "https://d3crypt-backend.onrender.com/image/" + res.data.imgKey;
        setImgsrc(x)
      }
    });
},[]);

  function handleLogout() {
    localStorage.removeItem("jwt");
    window.location.reload();
  }
  const [visible, setVisible] = useState(false);

  function displayNavbar() {
    document.querySelector(".slidenavbar").classList.toggle("slide");
  }

  function toggleClass() {
    var div = document.getElementById("nav-icon2");
    div.classList.toggle("open");
    // document.querySelector(".slidenavbar").classList.toggle("slide");
    document.querySelector(".sidebar2").classList.toggle("slidein");
  }
  return (
    <>
      <nav className="mobilenavbar">
        {isLoggedIn ? (
          <img
            onMouseOver={() => {
              setVisible(true);
            }}
            className="nav-profile2"
            src={imgsrc}
          />
        ) : (
          <div></div>
        )}
        {/* <vaHamburger className="hamburger" onClick={displayNavbar}></Hamburger> */}

        {/* <a href="#"><DecryptLogo className="decryptlogo"></DecryptLogo></a> */}

        <div id="nav-icon2" onClick={toggleClass}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      <div className="sidebar2">
        <Sidebar></Sidebar>
      </div>

      {visible && (
        <div
          className="hover-div2"
          onMouseOver={() => {
            setVisible(true);
          }}
          onMouseLeave={() => {
            setVisible(false);
          }}
        >
          <a className="hover-item2" href={"/user-profile"}>
            Profile
          </a>
          <a className="hover-item2" onClick={handleLogout}>
            Logout
          </a>
        </div>
      )}
    </>
  );
}

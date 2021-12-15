import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import "./Style/MainPage.css";
import "../Components/Style/bootstrap.css";

import Login from "./Login";
import Post from "./Post";
import SignUp from "./SignUp";
import Navigation from "../Components/Navigation";

export default function MainPage() {
  const [open, setOpen] = useState(true);
  const openChange = () => {
    console.log(open);
    setOpen(!open);
  }

  return (
    <div className="main-page">
      {/* <Navigation /> */}
      <div>
        <FontAwesomeIcon icon={faBars} className="main-hamburger" onClick={openChange} />
        <div className="main-title">Atlantis</div>
        <div className='box'>
          <div className='wave -one'></div>
          <div className='wave -two'></div>
          <div className='wave -three'></div>
        </div>
          <a className="main-to-home" href="/home">To the Atlantis</a>
      </div>
      {open ?
        (
          <></>
        ): (
          <>
            <ul className="main-hamburger-list">
              <FontAwesomeIcon icon={faBars} className="main-hamburger -open" onClick={openChange} />
              <li>
                <a onClick={() => window.location.replace("/home") }>HOME</a>
              </li>
              <li>
                <a onClick={() => window.location.replace("/post") }>POST</a>
              </li>
              <li>
                <a onClick={() => window.location.replace("/like") }>LIKE</a>
              </li>
              <li>
                <a onClick={() => window.location.replace("/mypage") }>MYPAGE</a>
              </li>
            </ul>
          </>
      )}
    </div>
  );
}

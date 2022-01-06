import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faMapSigns, faBacon, faSquareFull, faCircle, faSortDown } from "@fortawesome/free-solid-svg-icons";
import { faFortAwesome } from "@fortawesome/free-brands-svg-icons"

import "./Style/MainPage.css";
import "../Pages/Style/Reset.css"

import Login from "./Login";
import Post from "./Post";
import SignUp from "./SignUp";
import Navigation from "../Components/Navigation";
import Footer from "../Components/Footer";

export default function MainPage() {
  const [isOpen, setOpen] = useState(true);
  const openChange = () => {
    console.log(isOpen);
    setOpen(!isOpen);
  }

  return (
    <div className="main-page">
      {/* <Navigation /> */}
      <div>
        <FontAwesomeIcon icon={faBars} className="main-hamburger" onClick={openChange} />
        <div className="main-title">Atlantis</div>
        <div className='box'>
          <div className='wave -one'></div>
          <FontAwesomeIcon icon={faFortAwesome} className="wave-castle"></FontAwesomeIcon>
          <div className='wave -two'></div>
          <div className='wave -three'></div>
        </div>
        <div className="main-intro">아틀란티스에 도착하신 것을 환영합니다</div>
        <FontAwesomeIcon icon={faSortDown} className="main-second-page"></FontAwesomeIcon>
      </div>
      <div className={isOpen? "main-menu-open":"main-menu-close"}>
        <FontAwesomeIcon icon={faTimes} className="main-hamburger -close" onClick={openChange} />
        <div className="menu-table">
          <div className="menu-table-cell">
            <FontAwesomeIcon icon={faBacon} className="menu-map-sign"></FontAwesomeIcon>
            <div className="menu-items">
              <div>
                <a className="active" onClick={() => window.location.replace("/home") }>HOME</a>
              </div>
              <div>
                <a onClick={() => window.location.replace("/post") }>POST</a>
              </div>
              <div>
                <a onClick={() => window.location.replace("/like") }>LIKE</a>
              </div>
              <div>
                <a onClick={() => window.location.replace("/mypage") }>MYPAGE</a>
              </div>
            </div>
            <FontAwesomeIcon icon={faBacon} className="menu-map-sign"></FontAwesomeIcon>
          </div>
        </div>
        <div className="menu-footer">
          © 2022 CITEA_O. ALL RIGHTS RESERVED.
        </div>
      </div>
      <Footer />
    </div>
  );
}

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
  

  return (
    <div className="main-page">
      {/* <Navigation /> */}
      <div>
        <div className="main-title">Atlantis</div>
        <FontAwesomeIcon icon={faBars} className="main-hamburger" />
        <div className="main-nav">main</div>
      </div>
      <div className='box'>
        <div className='wave -one'></div>
        <div className='wave -two'></div>
        <div className='wave -three'></div>
      </div>
      <a className="main-to-home" href="../">To the Atlantis</a>
    </div>
  );
}

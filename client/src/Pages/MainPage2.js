import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faMapSigns, faBacon, faSquareFull, faCircle, faSortDown } from "@fortawesome/free-solid-svg-icons";
import { faFortAwesome } from "@fortawesome/free-brands-svg-icons"

import "./Style/MainPage.css";
import "../Pages/Style/Reset.css"
import CastleIcon from "./Style/castleIcon2.png";


export default function MainPage() {
  const [isOpen, setOpen] = useState(true);
  const openChange = () => {
    setOpen(!isOpen);
  }

  return (
    <>
      <div className="main-page-second">
        <div>
          <div className="main-title">Atlantis</div>
          <div className='box'>
            <div className='wave -one'></div>
            <img className="wave-castle" src={CastleIcon}></img>
            <div className='wave -two'></div>
            <div className='wave -three'></div>
          </div>
          <div className="main-intro">아틀란티스에 도착하신 것을 환영합니다</div>
          <FontAwesomeIcon icon={faSortDown} className="main-to-down"></FontAwesomeIcon>
        </div>
      </div>
    </>
  );
}
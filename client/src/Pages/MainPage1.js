import React, { useState, useEffect, useRef, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faMapSigns, faBacon, faSquareFull, faCircle, faSortDown } from "@fortawesome/free-solid-svg-icons";
import { faFortAwesome } from "@fortawesome/free-brands-svg-icons"

import "./Style/MainPage.css";
import "../Pages/Style/Reset.css"
import CastleIcon from "./Style/castleIcon2.png";
import { useNavigate } from "react-router-dom";


export default function MainPage() {
  const navigate = useNavigate();
  const [scrollPos, setScrollPos] = useState(0);
  const BackToTopRef = useRef(null);

  const onScroll = useCallback(() => {
    setScrollPos(window.pageYOffset);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="main-page-first" ref={BackToTopRef}>
        <div
            className="toTopBtnWrapper"
            style={{
              opacity: `${scrollPos > 100 ? `1` : `0`}`,
              color: `${
                (scrollPos > 100 && scrollPos < 2530) ||
                (scrollPos > 6680 && scrollPos < 10330) ||
                scrollPos > 11375
                  ? `#fff`
                  : `#000`
              }`,
              transition: "0.3s",
            }}
            onClick={() => {
              if (BackToTopRef.current) {
                BackToTopRef.current.scrollIntoView({
                  behavior: "smooth",
                });
              }
            }}
          >
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
      </div>
    </>
  );
}
import React, { useCallback, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSortDown } from "@fortawesome/free-solid-svg-icons";

import "./Style/MainPage.css";
import "../Pages/Style/Reset.css"
import CastleIcon from "./Style/castleIcon2.png";

import Login from "./Login";
import Post from "./Post";
import SignUp from "./SignUp";
import Navigation from "../Components/Navigation";
import MainPage1 from "./MainPage1";
import MainPage2 from "./MainPage2";

export default function MainPage() {
  const [isOpen, setOpen] = useState(true);
  const openChange = () => {
    setOpen(!isOpen);
  }

  const [isScroll, setIsScroll] = useState(false);

	const onScrollEvent = useCallback(() => {
		if (window.scrollY > 0) {
			setIsScroll(true);
		}
		if (window.pageYOffset === 0) {
			setIsScroll(false);
		}
	}, []);

	useEffect(() => {
		window.scrollTo(0, 0);
		window.addEventListener("mousewheel", onScrollEvent);
		return () => {
			window.removeEventListener("mousewheel", onScrollEvent);
		};
	}, []);

  return (
    <>
      <div className="main-page">
        <div>
          <FontAwesomeIcon icon={faBars} className="main-hamburger" onClick={openChange} />
          {/* <div className="main-title">Atlantis</div>
          <div className='box'>
            <div className='wave -one'></div>
            <img className="wave-castle" src={CastleIcon}></img>
            <div className='wave -two'></div>
            <div className='wave -three'></div>
          </div>
          <div className="main-intro">아틀란티스에 도착하신 것을 환영합니다</div>
          <FontAwesomeIcon icon={faSortDown} className="main-second-page"></FontAwesomeIcon>
        </div> */}
          <MainPage1 />
          <MainPage2 />
        {isOpen ?
          <></> :
          <Navigation />
        }
        </div>
      </div>
    </>
  );
}

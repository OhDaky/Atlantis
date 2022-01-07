import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faMapSigns, faBacon, faSquareFull, faCircle, faSortDown } from "@fortawesome/free-solid-svg-icons";

import "./Style/Navigation.css";
import "../Pages/Style/Reset.css"

export default function Navigation() {
  const history = useNavigate();
	// const dispatch = useDispatch();
	// const userState = useSelector((state: RootReducerType) => state.userReducer);
	const [isLogin, setIsLogin] = useState(false);
	const [isOpen, setOpen] = useState(true);
  const openChange = () => {
    console.log(isOpen);
    setOpen(!isOpen);
  }
	const API_URL = process.env.REACT_APP_API_URL;

	const logInHandler = () => {

  };

	const logoutHandler = async () => {

	};

	const mypageHandler = () => {

	};
	
	useEffect(() => {
		logInHandler();
	}, [isLogin]);

	useEffect(() => {
		openChange();
	}, []);

	return (
		<>
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
		</>
	);
}
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import "./Style/Navigation.css";
import "../Pages/Style/Reset.css"

export default function Navigation() {
  const history = useNavigate();
	// const dispatch = useDispatch();
	// const userState = useSelector((state: RootReducerType) => state.userReducer);
	const [isLogin, setIsLogin] = useState(false);
	const [open, setOpen] = useState(true);
	const API_URL = process.env.REACT_APP_API_URL;

	const logInHandler = () => {

  };

	const logoutHandler = async () => {

	};

	const openChange = () => {
		setOpen(!open);
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
			<nav className="navigation">
				<div className="nav-container">
					<div className="left-nav-bar">
						<img className="nav-logo" src="logo.png" alt="logo" onClick={() => window.location.replace("/home")} />
					</div>
					<ul className="right-nav-bar">
						<li>
							<a onClick={() => window.location.replace("/")}>Main</a>
						</li>
						<li>
							<a onClick={() => window.location.replace("/post")}>Post</a>
            </li>
            <li>
							<a onClick={() => window.location.replace("/like")}>Like</a>
						</li>
						<li>
							<a onClick={() => window.location.replace("/mypage")}>Mypage</a>
						</li>
						{isLogin ? (
							<li>
								<a className="nav-login-btn" onClick={logoutHandler}>
									Logout
								</a>
							</li>
						) : (
							<li>
								<a className="nav-login-btn" onClick={() => window.location.replace("/login")}>
									Login
								</a>
							</li>
						)}
					</ul>
					{open ? (
						<div className="nav-hamburger">
							<button className="nav-close-btn" onClick={openChange}></button>
							<ul className="nav-hamburger-bar">
								<li>
									<a onClick={() => window.location.replace("/")}>Main</a>
								</li>
								<li>
									<a onClick={() => window.location.replace("/post")}>Post</a>
                </li>
                <li>
									<a onClick={() => window.location.replace("/like")}>Like</a>
								</li>
								<li>
                  <a onClick={() => window.location.replace("/mypage")}>Mypage</a>
								</li>
								<li>
									<hr className="nav-hr"></hr>
								</li>
								{isLogin ? (
									<>
										<li>
											<a>
												<img
													className="nav-user-img"
													// src={userState.user.profileImage === null ? "profile-img.png" : userState.user.profileImage}
												></img>
												{/* {userState.user.nickname} */}
											</a>
										</li>
										<li>
											<a className="nav-login-btn" onClick={logoutHandler}>
												Logout
											</a>
										</li>
									</>
								) : (
									<li>
										<a className="nav-login-btn" onClick={() => window.location.replace("/login")}>
											Login
										</a>
									</li>
								)}
							</ul>
						</div>
					) : (
						<button className="nav-hamburger-btn" onClick={openChange}></button>
					)}
				</div>
      </nav>
    </>
  )
}
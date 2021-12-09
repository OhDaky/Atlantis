import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
import { emailIsValid, passwordIsValid } from "../Utils/Validator";

import "./Style/Login.css";
import Navigation from "../Components/Navigation";

export default function Login() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();
  // const dispatch = useDispatch();
  // const userState = useSelector(state => state.user);
  const API_URL = process.env.REACT_APP_API_URL;

  // Login
  const handleLogin = () => {
    if (id === "" && password === "") {
      setErrorMessage("이메일과 비밀번호를 입력해주세요");
      return;
    } else if (id === "") {
      setErrorMessage("이메일을 입력해주세요");
      return;
    } else if (password === "") {
      setErrorMessage("비밀번호를 입력해주세요");
      return;
    }

    // email 과 비밀번호가 올바른 형식이 아닌 경우
  //   if (!emailIsValid(id)) {
  //     setErrorMessage("올바른 이메일 형식이 아닙니다");
  //   }
  //   if (!passwordIsValid(password)) {
  //     setErrorMessage("비밀번호는 숫자와 영문을 포함한 8글자 이상으로 이루어져야 합니다");
  //   }

  //   axios({
  //     method: "POST",
  //     url: `${API_URL}/user/login`,
  //     data: {
  //       email: id,
  //       password: password,
  //     },
  //     withCredentials: true,
  //   })
  //     .then(res => {
  //       setErrorMessage("");
  //       const { userInfo } = res.data.data;
  //       // dispatch(setUserInfo(userInfo));
  //       navigate.push("/main");
  //     })
  //     .catch((err) => {
  //       setErrorMessage("로그인 실패! 이메일과 비밀번호를 다시 확인하세요");

  //   })
  }

  return (
    <div>
      <Navigation />
      <div className="login-container">
        <div className="login-box">
          <div className="login-container-title">Login</div>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="login-input-email">
              <div>email</div>
              <input type="email"></input>
            </div>
            <div className="login-input-password">
              <div>password</div>
              <input type="password"></input>
            </div>
          </form>
        </div>
        <div>
          <button className="login__btn-login"
                  type="submit"
                  onClick={handleLogin}>로그인</button>
        </div>
        <div className="login-user-search">
          <a href="/">ID/PW 찾기</a>
        </div>
        <div className="Kakao-login">
          <a>카카오 로그인</a>
        </div>
        <div className="Naver-login">
          <a>네이버 로그인</a>
        </div>
        <div className="Google-login">
          <a>구글 로그인</a>
        </div>
        <div>sns 계정으로 간편하게 로그인하세요</div>
      </div>
    </div>
  );
}
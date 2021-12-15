import React, { useState, useEffect } from "react";
import axios from "axios";

import "./Style/Navigation.css";
import "./Style/bootstrap.css";

export default function Navigation() {

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/main">Atlantis</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarColor02">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link" href="/post">Post
                  <span className="visually-hidden">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/like">Like</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/mypage">Mypage</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="/post">Post</a>
                  <a className="dropdown-item" href="/like">Like</a>
                  <a className="dropdown-item" href="/mypage">Mypage</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="/logout">nickname 로그아웃</a>
                </div>
              </li>
            </ul>
            <form className="d-flex">
              <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </>
  )
}
import React, { useState, useEffect } from "react";
import axios from "axios";

import "./Style/Navigation.css";
import "./Style/bootstrap.css";

export default function Navigation() {

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Atlantis</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarColor03">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link active">Main
                  <span className="visually-hidden">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Post</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Like</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Mypage</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                <div className="dropdown-menu">
                  <a className="dropdown-item">Action</a>
                  <a className="dropdown-item">Another action</a>
                  <a className="dropdown-item">Something else here</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item">Separated link</a>
                </div>
              </li>
            </ul>
            <form className="d-flex">
              <input className="form-control me-sm-2" type="text" placeholder="Search"></input>
              <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </>
  )
}
import React, { useState, useEffect } from "react";

import "./Style/MainPage.css";
import "../Components/Style/bootstrap.css";

import Login from "./Login";
import Post from "./Post";
import SignUp from "./SignUp";
import Navigation from "../Components/Navigation";

export default function MainPage() {
  

  return (
    <div>
      <Navigation />
      <p>MainPage</p>
    </div>
  );
}

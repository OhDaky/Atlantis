import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Landing from './Pages/Landing';
import MainPage from './Pages/MainPage';
import Mypage from './Pages/Mypage';
import Login from './Pages/Login';
import Like from './Pages/Like';
import SignUp from './Pages/SignUp';
import Post from './Pages/Post';
import Error404 from './Pages/Error404';
import Home from './Pages/Home';

import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/like" element={<Like />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/post" element={<Post />} />
        <Route path="/error" element={<Error404 />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  );
}

export default App;

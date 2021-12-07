import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Landing from './Pages/Landing'
import MainPage from './Pages/MainPage';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Post from './Pages/Post';
import Error404 from './Pages/Error404';

import './App.css';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" component={Landing} />
          <Route path="/main" component={MainPage} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/post" component={Post} />
          <Route path="/error" component={Error404} />
          <Route path="*" component={Error404} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

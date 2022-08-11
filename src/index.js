import ReactDOM from 'react-dom';
import './index.css';
import React, { Component } from 'react';
import './App.css';
import HeaderComponent from "./components/header";
import FooterComponent from "./components/footer";
import LandComponent from './components/pages/land';
import SignUpComponent from './components/pages/signup';
import PlayComponent from './components/pages/play';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import accounts from './components/data/accounts.json';


if (JSON.parse(localStorage.getItem('accounts')) === null)
  localStorage.setItem('accounts', JSON.stringify(accounts));




ReactDOM.render(

  < React.StrictMode >
    <Router className="router">

      <HeaderComponent />

      <Routes>
        <Route path="/" element={<LandComponent />} />
        <Route path="/signup" element={<SignUpComponent />} />
        <Route path="/play" element={<PlayComponent />} />

      </Routes>




      <FooterComponent />
    </Router>
  </React.StrictMode >,
  document.getElementById('root')
);


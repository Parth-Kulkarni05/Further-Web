import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Sigin from '../components/SignInPage/Signin'
import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom';
import './Header.css'
const Header = () => {


    return (

      <div class = "header">

      <div class = "navbar-container">

      <div class = "nav-logo">
          <img src = "/images/Header/header_logo.png" alt=""></img>
      </div>

      <ul class = "nav-links">
              <li>Sign Up</li>
              <li>Sign In</li>
          </ul>
      
  </div>
  
  <div class = "webinfo-container">

      <div class="website-information"> 
          <div class = "text-small">Hi Team, welcome to LAN (Loop Agile Now). We have made this social platform to improve and centralise our communications. We decided to make our own platform to ease flow of communications, keep things documentated and to prevent ethical issues that may have arised by using an external platform.</div>
      </div>


      <div class="placeholder">
        <img src = "/images/Landing_Page/placeholder.jpg" alt=""></img>
      </div>
    
    </div>

    </div>


    );
}

export default Header;
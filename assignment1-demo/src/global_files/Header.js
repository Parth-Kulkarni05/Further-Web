import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom'
import './Header.css'

const Header = () => {

    return (

      <div className = "navbar-container">

      <div className = "nav-logo">
          <Link to = "/"><img src = "/images/Header/header_logo.png" alt=""></img></Link>
      </div>

      <ul className = "nav-links">
              <Link to = "/Signup" className="links"><li>Sign Up</li></Link>
              <Link to = "/Sigin" className="links"><li>Sign In</li></Link>
          </ul>
      
  </div>
  

    );
   
  }


export default Header



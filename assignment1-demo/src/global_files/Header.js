import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom'
import './Header.css'

const Header = () => {


    const [login, setLogin] = useState(localStorage.getItem("Login_Status"))

    function userLoginStatus() {
      if (login === "true") {
        return <h1>You are logged in</h1>
      }
      else if (login === "false") {
        return <h1>You are NOT logged in</h1>
      }
    }

    function toggleSignUpLink() {
      // Makes sure that once the user logs in, they can't Sign Up
      if (login === "true") {
        return 
      }
      else {
        return (
          <div>
            <Link to = "/Signup" className="links"><li>Sign Up</li></Link>
            <Link to = "/Sigin" className="links"><li>Sign In</li></Link>
          </div>
        )
      }
    }


    return (

      <div className = "navbar-container">

        <div className = "nav-logo">
            <Link to = "/"><img src = "/images/Header/header_logo.png" alt=""></img></Link>
        </div>

        <ul className = "nav-links">
          {toggleSignUpLink()}
          <p>Still here </p>
        </ul>
      
      </div>
  

    );
   
  }


export default Header



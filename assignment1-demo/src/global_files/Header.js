import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom'
import './Header.css'

const Header = ({loggedInUser, onLogout}) => {

    // Show account status in the header.

     return (

      <div className = "navbar-container">

      <div className = "nav-logo">
          <Link to = "/"><img src = "/images/Header/header_logo.png" alt=""></img></Link>
      </div>
      
        {loggedInUser ? ( 
      
            <ul className = "nav-links">
                <div>
              <Link to = "/" className="links"><li onClick={() => onLogout()}>Sign out</li></Link>
              <Link to = "/Profile" className="links"><li>Profile Managment</li></Link>
               </div>

              <div>
                {}
              </div>
            </ul>
            
              
        ) :
            <ul className = "nav-links">
                  <div>
                <Link to = "/Signup" className="links"><li>Sign Up</li></Link>
                <Link to = "/LoginPage" className="links"><li>Log In</li></Link>
                 </div>
            </ul>
        }

      </div>
    
     );

}
  
  



export default Header

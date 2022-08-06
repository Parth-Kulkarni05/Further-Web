import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Signin from './Signin';
import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom';


const Header = () => {


    return (

        <div className="header">
          {/* Would contain links to other pages such as: 
            - login page
            - sign-up page
            - sign-in page
            - profile page 
            - (extension; 
              - profile management
              - post)
          */}

          <Link to="" style={{ textDecoration: 'none' }}><h1 className="logo">Logo</h1></Link>

          <ul>
           <Link to="/signin" style={{ textDecoration: 'none' }}><li>sign in</li></Link>
           <li>sign up</li>
           <li>post</li>
           <li>profile page</li>
          </ul>
        
       </div>


    )
}

export default Header;
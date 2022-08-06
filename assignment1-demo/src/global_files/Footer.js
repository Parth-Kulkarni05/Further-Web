import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {

    
    return (

      <div className="footer">
          <div className="header">

            {/* 
            */}

            <ul>
            <Link to="/signin" style={{ textDecoration: 'none' }}><li>sign in</li></Link>
            <li>sign up</li>
            <li>post</li>
            <li>profile page</li>
            </ul>

        </div>
      </div>
      

    )
}

export default Footer;
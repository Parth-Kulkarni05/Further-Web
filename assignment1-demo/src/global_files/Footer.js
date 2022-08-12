import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {

    
    return (
      /* Testing commit changed git settings */

      <div className="footer">
        <div className="student-info">
          <p> Developed by:</p>
          <p> Parth Kulkarni - s3897572</p>
          <p>, Natnael Giazw - s3897250</p>
        </div>

        <div className="lan-logo">
        <Link to = "/"><img src = "/images/Header/header_logo.png" alt=""></img></Link>
        </div>

      </div>    

    )
}

export default Footer;
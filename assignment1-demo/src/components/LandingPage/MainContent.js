import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom';
import './MainContent.css'

const Main = () => {

    return (

        <div className="main-content">

            <div class = "webinfo-container">

      <div class="website-information"> 
          <div class = "text-small">Hi Team, welcome to LAN (Loop Agile Now). 
          We have made this social platform to improve and centralise our communications. 
          We decided to make our own platform to ease flow of communications, keep things documentated 
          and to prevent ethical issues that may have arised by using an external platform.</div>
      </div>


      <div class="placeholder">
        <img src = "/images/Landing_Page/placeholder.jpg" alt=""></img>
      </div>
    
    </div>
        
    <div class = "text-info">What makes LAN better, for us and you?</div>

            <div class = "boxes-container">

            <div class = "boxes-info">

                <img src= "/images/Landing_Page/better_com.jpg" className="logo" alt =""></img>
                <div class = "text">Improved Communication</div>

            </div>

            <div class = "boxes-info">

                <img src = "/images/Landing_Page/better_doc.jpg" className="logo" alt = ""></img>
                <div class = "text">Improved Documentation</div>

            </div>

            <div class = "boxes-info">

                <img src = "/images/Landing_Page/privacy.jpg" alt = ""></img>
                <div class = "text">Improved User/Org Privacy</div>

            </div>

            <div class = "boxes-info">

                <img src = "/images/Landing_Page/better_collab.jpg" alt = ""></img>
                <div class = "text">Improved Collaboration</div>

            </div>
            </div>



            <div class = 'qoute-info'>

            <div class = "qoute">Like a human being, a company has to have an internal communication mechanism... to coordinate its actions</div>
            <div class = "qoute-author">-Bill Gates, Founder of Microsoft</div>

            </div>



            <div class = "call-to-action">

            <div class = "content"> 
                <p id = 'bolde'><b>It's time to join up!</b></p>
                <p> Sign up to the company's new platform product by clicking that button right over there!</p>
            </div>

            <div class = "sign-up-button">
                <Link to = "/Signup"><button id = "sign-up"> Sign up</button></Link>
            </div>

            </div>

    </div>


    )
}

export default Main;
import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom'

const Main = () => {

    return (

        <div className="main-content">

        {/* 
        
        Would contain the following content:
          - Information about the website
          - sign-up button (text for user to sign up)

        */}

        <div className="center-main">

          <div className="info-center-main">

            <div>
              <h3 className="information">Information</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit 
                esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                occaecat cupidatat non proident, sunt in culpa qui officia 
                deserunt mollit anim id est laborum.
              </p>
            </div>
            
            <div className="sign-up">
              <Link to="/signin" style={{ textDecoration: 'none' }}><button><p>Sign Up</p></button></Link>
            </div>

          </div>

          <div className="posts">
            <h1>Posts from the community</h1>

            <div className="some-post">
              <h3>Some post</h3>
              <small>day-month-time</small>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitat Duis aute irure dolor in reprehenderit in voluptate velit 
                esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                occaecat cupidatat non proident, sunt in culpa qui officia 
                deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="some-post">
            <h3>Some post</h3>
            <small>day-month-time</small>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitat Duis aute irure dolor in reprehenderit in voluptate velit 
                esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                occaecat cupidatat non proident, sunt in culpa qui officia 
                deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="some-post">
            <h3>Some post</h3>
            <small>day-month-time</small>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitat Duis aute irure dolor in reprehenderit in voluptate velit 
                esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                occaecat cupidatat non proident, sunt in culpa qui officia 
                deserunt mollit anim id est laborum.
              </p>
            </div>
          
          </div>


        </div>


        </div>

    )
}

export default Main;
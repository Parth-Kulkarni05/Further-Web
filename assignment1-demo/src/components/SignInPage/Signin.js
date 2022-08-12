
import React, { useState, useEffect } from "react";
import './Signin.css'

const Signin = () => {

    
    



    function submit() {


        // localStorage.setItem("first-name", firstname.innerHTML)
        // localStorage.setItem("last-name", lastname.innerHTML)
        // console.log(localStorage)
        
    }


    return (

        
        <div className="signin">
            
            <h1>Sign-in Form</h1>
            
            <div className="form">
                <form>
                    <label for="first-name">First Name</label>
                    <input type='text' id="first-name-text"></input>
                </form>
                
                <form>
                    <label for="last-name">Last Name</label>
                    <input type='text' id="last-name-text"></input>
                </form>
                
                <button onClick={submit} className="submit-button">Submit</button>
            </div>
        </div>
      

    )
}

export default Signin;
import { BrowserRouter, NavLink, Routes, Route, useNavigate } from 'react-router-dom';
import React, { useState, useEffect, Redirect, Navigate  } from "react";

const SignUp = (props) => {

    // HTML form notes

    // If the name attribute is omitted, the 
    // value of the input field will not be sent at all.

    // - Setting variables for submit element, first and last name
    // - Validating user data from input fields
    // - Creating logic to store information from form to html local storage
    // - navigate() hook, to allow redirects


    // Callback - Child to parent


    const [firstname, setfirstname] = useState('')
    const [lastname, setlastname] = useState('')
    const [valid, setValid] = useState(null)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    let navigate = useNavigate();


        // Saves input in state variables
    function firstnameinput(event) {
        setfirstname(event.target.value)
    }

    function lastnameinput(event) {
        setlastname(event.target.value)
    }

    function emailinput(event) {
        setEmail(event.target.value)
    }

    function passwordinput(event) {
        setPassword(event.target.value)
    }

        // Validates input
    function validate() {

        if (firstname && lastname && email && email.includes("@") && password.length >= 8) {
            setValid(true)  
        }
        else {
            setValid(false)
        }   
    }

    function autocorrect() {

        if (valid) {
            return
        }
        else if (valid === false) {
            return (
                <div>Make sure email is correct, password is strong and fields are not empty</div>
            )
        }
    }

    function submit() {
        // console.log(firstname, lastname + '\n Soon to validate')

        validate()
        
        redirect()

    }


    function redirect() {

        if (valid) {
            // Submits data to localstorage (if valid)
            localStorage.setItem(email, JSON.stringify({
                firstname: firstname,
                lastname: lastname,
                email: email,
                password: password
            }))

            // console.log(localStorage)
            localStorage.setItem("Login_Status", "true")
            localStorage.setItem("LoggedIn_User", email)
            props.refresh()     // Refers to toggleRefresh, to allow for refresh in app.js
            navigate("/")
        }
        else {
            localStorage.setItem("Login_Status", "false")
        }
    }


    return (
        
        <div className="signin">
            
            <h1>Sign-Up Form</h1>
            
            {autocorrect()}

            <div className="form">

                <form>
                    <label for="email">Email</label>
                    <input type='text' id="email-text" onChange={emailinput} required pattern=''></input>
                </form>

                <form>
                    <label for="first-name">First Name</label>
                    <input type='text' id="first-name-text" onChange={firstnameinput} required></input>
                </form>
                
                <form>
                    <label for="last-name">Last Name</label>
                    <input type='text' id="last-name-text" onChange={lastnameinput} required></input>
                </form>

                <form>
                    <label for="password">Password</label>
                    <input type='password' id="password-text" onChange={passwordinput} required></input>
                </form>
                
                <button type="submit" onClick={submit} className="submit-button">Submit</button>
            </div>

            
            {/* <button onClick={props.stuff}></button> */}
            {/* {redirect()} */}
            
        </div>
      

    )
}

export default SignUp;
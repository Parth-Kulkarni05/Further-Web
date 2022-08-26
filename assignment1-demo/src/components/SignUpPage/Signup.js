import { BrowserRouter, NavLink, Routes, Route, useNavigate, Link } from 'react-router-dom';
import React, { useState, useEffect, Redirect, Navigate} from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Signup.css'
import profile_pic_default_base64_encoding from './default_pfp';
import {emailError, nameError, passwordError, emailCheck, date_generate} from '../Validation_rules/validation'
/* eslint-disable no-useless-escape */



/* MARKER INSTRUCTIONS / CODE REFERENCES:

1) 
    So this contains To check a password between 6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter
    Sourced regex expression from: https://www.w3resource.com/javascript/form/password-validation.php

2) 
    In order to validate our emails we have used the following regex expression and have got it from the following website:

    regex-expression: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    regex-email sourced from: https://www.w3resource.com/javascript/form/email-validation.php#:~:text=To%20get%20a%20valid%20email,%5D%2B).

3) 
    In order to validate our first name and last name to only contain letters we have used the following regex expression and got it from the following web:
    
    regex-expression: /^[a-zA-Z]+$/
    regex-letter only expression sourced from: https://stackoverflow.com/questions/3073176/javascript-regex-only-english-letters-allowed
    


*/


const SignUp = ({onLogin}) => {

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

    useEffect(() => {
        if (valid){
            successful();
            redirect();
        }
    })


    let navigate = useNavigate();


        // Saves input in state variables
    function firstnameinput(event) {
         setfirstname(event.target.value);
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

    function submit(event) {
        event.preventDefault();
        validate()        
    }



    function successful(){
        if (valid === true){                
            toast.success('Sign-In Sucessful', {
                toastId: 'success1',
            })
    }
    }

        // Validates input
    function validate() {

        /* eslint-disable no-useless-escape */

        if(email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) && firstname.match(/^[a-zA-Z]+$/) 
            && lastname.match(/^[a-zA-Z]+$/) && password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/))
        {
            setValid(true)
            
            console.log("Login set to true")
            
        }
        else {
            setValid(false)
            
        }   
    }

    
    function redirect() {

        if (valid) {
            // Submits data to localstorage (if valid)

            localStorage.setItem(email,JSON.stringify({
                firstname:firstname,
                lastname:lastname,
                email:email,
                password:password,
                profile_pic: profile_pic_default_base64_encoding(),
                date_joined: date_generate(),
                posts: [],
            }))


            // Sets public attribute for all posts created
            if (localStorage.getItem("PublicPosts") === null) {
                localStorage.setItem("PublicPosts", JSON.stringify({
                    posts: []
                }))
            }



            onLogin(email)
            navigate('/Profile')
        }
        else {
            localStorage.setItem("Login_Status", "false")
        }
    }


    return (


        <div className="signup-text">
            
            <h1 className = "siginup-Title">Sign-Up Form</h1>

            <h4> Already have an account with LAN? <Link to = '/LoginPage'>Log in here</Link></h4>
            

            <div className="signup-form">

                <form onSubmit={submit}>

                <div className = "signup-box">
                    <label htmlFor="email">Email Address: </label>
                    <input type='textarea' id="email-text" onChange={emailinput}  placeholder='John82@test.com.au' ></input>
                    {emailError(valid, email)}
                    {emailCheck(email)}

                </div>

                <div className = "signup-box">
                    <label htmlFor="first-name">First Name: </label>
                    <input type='text' id="first-name-text" onChange={firstnameinput}  placeholder='John' maxLength={15}></input>
                    {nameError(valid,firstname)}

                </div>
                
                <div className = "signup-box">
                    <label htmlFor="last-name">Last Name: </label>
                    <input type='text' id="last-name-text" onChange={lastnameinput}  placeholder='Patel'></input>
                    {nameError(valid,lastname)}

                </div>

                <div className = "signup-box">
                    <label htmlFor="password">Password: </label>
                    <input type='password' id="password-text" onChange={passwordinput}  placeholder='Enter a strong password'></input>
                    {passwordError(valid, password)}

                </div>

                <button type="submit" className="submit-button">Sign up</button>

                </form>

                </div>
            
        </div>


    )
}

export default SignUp;

/* eslint-disable no-useless-escape */
import { BrowserRouter, NavLink, Routes, Route, useNavigate, Link } from 'react-router-dom';
import React, { useState, useEffect, Redirect, Navigate} from "react";
import './Login.css';

function Login ({onLogin}){
    
    const [valid, setValid] = useState(null)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    let navigate = useNavigate();


        // Saves input in state variables
    function emailinput(event) {
        setEmail(event.target.value)
    }

    function passwordinput(event) {
        setPassword(event.target.value)
    }

    function Error() {
        if ((valid === false)){
            return (
                <div className='AlertMessage'>Error: Incorrect Email or Password</div>
            )
        } 
        }  

        // Validates input
    function validate() {

        let key_local_storage = null

        for (let i = 0; i < localStorage.length; i++){
            key_local_storage = localStorage.key(i);

            if (key_local_storage.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){

                let json_obj = (localStorage.getItem(key_local_storage))

                console.log(json_obj)

                let json_parsed = JSON.parse(json_obj)    

                console.log(json_parsed)
                
                if (email === key_local_storage && password === json_parsed['password']){
                    key_local_storage = true
                    setValid(true)
                } else{
                    setValid(false)
                }
            }

        }

        }   

    function submit() {
        // console.log(firstname, lastname + '\n Soon to validate')

        validate()
        
        redirect()


    }


    function redirect() {

        if (valid) {
            onLogin(email)
            navigate('/Profile')
        }
        else {
            localStorage.setItem("Login_Status", "false")
        }
    }


    return (

        <div className="login-text">
            
            <h1 className = "login-Title">Log-In Form</h1>

            <h4> Don't have an account with LAN? <Link to = '/Signup'>Sign up here</Link></h4>
            

            <div className="login-form">

                <form className = "login-box">
                    <label htmlFor="email">Email Address: </label>
                    <input type='text' id="email-text" onChange={emailinput} required placeholder='John82@test.com.au'></input>
                    {Error()}
                </form>

                <form className = "login-box">
                    <label htmlFor="password">Password: </label>
                    <input type='password' id="password-text" onChange={passwordinput} required placeholder='Enter a strong password'></input>
                    {Error()}
                </form>
                
                <button type="submit" onClick ={(e) => submit(e)} className="submit-button">Log in</button>
            </div>

            
            {/* <button onClick={props.stuff}></button> */}
            {/* {redirect()} */}
            
        </div>


      

    )
}

export default Login;
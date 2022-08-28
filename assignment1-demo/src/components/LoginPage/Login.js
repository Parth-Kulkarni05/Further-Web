/* eslint-disable no-useless-escape */ // This was used to due es lint giving weird weird with regex expressions.
import {useNavigate, Link } from 'react-router-dom';
import React, { useState, useEffect} from "react";
import './Login.css';
import {error_Login} from '../Validation_rules/validation'


function Login (){
    
    const [valid, setValid] = useState(null)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

    useEffect(() => {
        if (valid){  // Once the Valid is set to True the redirect function is called.
            redirect()
        }
    }) 


        // Saves input in state variables
    function emailinput(event) {
        setEmail(event.target.value)
    }

    function passwordinput(event) {
        setPassword(event.target.value)
    }

    //  Responsible for the visual cue of logging in for the user
    
    function submit(event) {
        event.preventDefault();
        validate()

    }
        

        // Validates input
        // Searches the local storage. linearly, to check if user-entered data exists.
        
    function validate() {

        let key_local_storage = null

        for (let i = 0; i < localStorage.length; i++){
            key_local_storage = localStorage.key(i);

            if (key_local_storage.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){ // Checks whether the key is an email. If it's an email then it continues. 
                                                                                           // Reason it checks if it's a email due to JSON.Parse function work correctly.

                let json_obj = (localStorage.getItem(key_local_storage))
                let json_parsed = JSON.parse(json_obj)    

                    // If the email and password match any given instance in the local storage, then
                    // Valid is set to true
                if (email === key_local_storage && password === json_parsed['password']){
                    key_local_storage = true
                    setValid(true)          
                    console.log("Login Sucessful")
                    break
                }
            }

        }

        if (key_local_storage !== true){
            setValid(false)
        }


    }   


    function redirect() {

            navigate('/MultiAuthLogin', { // Sends the User Email through the navigate function, so then it can be used by the MultiAuthLogin Component
                state: {
                    email
                }
            })
    }


    return (

        <div className="login-text">
            
            <h1 className = "login-Title">Log-In Form</h1>

            <h4> Don't have an account with LAN? <Link to = '/Signup'>Sign up here</Link></h4>
            

            <div className="login-form">

                <form onSubmit={submit}>

                <div className = "login-box">
                    <label htmlFor="email">Email Address: </label>
                    <input type='text' id="email-text" onChange={emailinput}  placeholder='John82@test.com.au'></input>
                    {error_Login(valid)}
                </div>

                <div className = "login-box">
                    <label htmlFor="password">Password: </label>
                    <input type='password' id="password-text" onChange={passwordinput}  placeholder='Enter a strong password'></input>
                    {error_Login(valid)}
                </div>
                
                <button type="submit" className="submit-button">Log in</button>

                </form>

            </div>
            
        </div>


      

    )
}

export default Login;
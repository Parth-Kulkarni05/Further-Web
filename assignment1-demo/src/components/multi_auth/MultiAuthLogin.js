/* This component essentially checks whether the user entered code matches with the code saved in Local Storage, if so then they are continued with Login */

import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MultiAuthLogin = ({onLogin}) => {

    useEffect(() => {
        if (valid){
            success()
            navigate('/MultiAuth')
        }
    })

       
    const[code, setCode] = useState();
    const[valid, setValid] = useState(null);

    const {state} = useLocation();
    const {email} = state; // Gets the email that was sent from the Login.js component.

    let userParsed = JSON.parse(localStorage.getItem(email)); // The reason we got the email was because of this. Technically since the user has not fully signed in
                                                              // we cannot use the LoggedIn Prop, or else it will return null.

    let navigate = useNavigate();

    function success() {                                     // React Toastify Function
        if (valid === true){                
            toast.success('Log-In Sucessful', {
                toastId: 'success1',
            })
        }
    }

    function handleCodeInput(event){
        setCode(event.target.value)

    }

    function handleSubmit(event){
        event.preventDefault()

        if (parseInt(code) === userParsed.code){           // If the user inputted code matches the code in local storage login is completed. 
            onLogin(email)
            setValid(true)

        }

        else{
            setValid(false)
        }
    }

    function checkCodeError(){                          // If the user inputted code is incorrect the following error is displayed.
        if (valid === false){
            return(
                <div className="Alert-Message">You entered the incorrect code.</div>
            )
        }

        }

    return(
        <div className="multi-factor-container">
           <div className="enter-code">
            <h3> Enter your One time Password</h3>
            <form onSubmit={handleSubmit}>
            <input type= 'text' onChange={handleCodeInput} maxLength = {4}></input>
                {checkCodeError()}
            <button type='submit'> Submit</button>
            </form>
           </div>
        
        </div>
    )

}


export default MultiAuthLogin;
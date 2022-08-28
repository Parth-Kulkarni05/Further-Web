/* This component essentially generates a random 4 digit code and that code is saved in Local Storage under the user's key */


import { useNavigate } from "react-router-dom"
import './multi_auth.css'

const MultiAuth = ({loggedInUser}) =>{

    let navigate = useNavigate()

    let random_digit = Math.floor(1000 + Math.random() * 9000)
    
    let user_parsed = localStorage.getItem(loggedInUser)

    user_parsed = JSON.parse(user_parsed)

    user_parsed.code = random_digit

    localStorage.setItem(loggedInUser, JSON.stringify(user_parsed) )


    function redirectToProfile(){
        navigate('/Profile')
    }

    return(
        <div className="multi-factor-container">
            <div className="otp-info">
            <div className="information-about-otp">
                <h3> This is your One Time Password. Remember this as you will be asked for it the next time you Login.</h3>
            <div className="one-time-password">
           <h3>{random_digit}</h3>
           </div>
           </div>
        </div>

        <div className="button-continue-to-website">
        <button className="multi-factor-button" onClick = {redirectToProfile}> Continue to Website</button>
        </div>

        </div>

    )

}


export default MultiAuth;

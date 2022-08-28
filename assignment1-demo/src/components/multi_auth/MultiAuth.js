import { useState } from "react"

const MultiAuth = ({onLogin, loggedInUser}) =>{

    let random_digit = Math.floor(1000 + Math.random() * 9000)
    
    let user_parsed = localStorage.getItem(loggedInUser)

    user_parsed = JSON.parse(user_parsed)

    console.log("hey i am the before one", user_parsed)

    user_parsed.code = random_digit

    console.log(user_parsed)



    console.log("in here")

    return(
        <div>
           <h3>{random_digit}</h3>
        </div>
    )

}


export default MultiAuth;

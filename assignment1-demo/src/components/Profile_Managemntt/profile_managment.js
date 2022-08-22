import { BrowserRouter, NavLink, Routes, Route, useNavigate, Link } from 'react-router-dom';
import React, { useState, useEffect, Redirect, Navigate} from "react";
import './profile_manage.css';



const ProfileManage = ({loggedInUser}) =>{
    
    const userInfo = localStorage.getItem(loggedInUser)
    const userParsed = JSON.parse(userInfo)
    const imageLink = userParsed['profile_pic']

    let navigate = useNavigate();

    const[updatedfirstname, setnewfirstname] = useState(userParsed.firstname)
    const[updatedlastname, setnewlastname] = useState(userParsed.lastname)
    const[updatedemail, setnewemail] = useState(userParsed.email) 
    const[valid, setValid] = useState(null)

    useEffect(() =>{
        if (valid){
            redirect();
        }

    })

    
    function setfirstName(e){
        setnewfirstname(e.target.value);

    }

    function setlastName(e){
        setnewlastname(e.target.value);
    }

    function setemail(e){
        setnewemail(e.target.value);
    }

    function handleSave(e){
        e.preventDefault();
        validate();
    }


    function validate(e){

        /* eslint-disable no-useless-escape */

        if (updatedemail.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) && updatedfirstname.match(/^[a-zA-Z]+$/) 
            && updatedlastname.match(/^[a-zA-Z]+$/))
        {
            setValid(true)
            
            console.log("Login set to true")
            
        }
        else {
            setValid(false)

        }   

    }



    function redirect(){

        if (valid){
            userParsed.firstname = updatedfirstname;
            userParsed.lastname = updatedlastname;
            userParsed.email = updatedemail;

            localStorage.setItem("loggedInUser", updatedemail)


            // Reset all the posts and replies' email of the user to the updated email
            // by iterating through all of them and changing their user (email) attribute

            for (let i = 0; i < userParsed.posts.length; ++i) {
                userParsed.posts[i].user = updatedemail
                for (let j = 0; j < userParsed.posts[i].replies.length; ++j) {
                    userParsed.posts[i].replies[j].user = updatedemail
                    for (let k = 0; k < userParsed.posts[i].replies[j].replies.length; ++k) {
                        userParsed.posts[i].replies[j].replies[k].user = updatedemail
                    }
                }
            }
            localStorage.setItem(updatedemail, JSON.stringify(userParsed))


            navigate('/Profile')

        }

        else{
            console.log("okay expected error")
        }
    }





    return(
        <div className='profile-container-manage'>
            <div className='profile-info-manage'>
                <h1 className='profile-title-manage'>Edit Your Profile</h1>
                <div className='img-logo-manage'>
                    <img className='user-profile-img-manage' src = {`data:image/jpg;base64,${imageLink}`} alt=""></img>
    
                </div>

                <div className='user-container-manage'>

                    <h3> Update Your Details Below and Save Changes: </h3>


                    <div className='form-manage'>

                        <form onSubmit={handleSave}>   

                        <div className= 'user-info-manage'>
                            <label> First Name:</label>
                            <input type = "text" className='input-manage' defaultValue = {userParsed.firstname} onChange = {setfirstName}></input>
                        </div>

                        <div className= 'user-info-manage'>
                            <label> Last Name:</label>
                            <input type = "text" defaultValue = {userParsed.lastname} onChange = {setlastName}></input>
                        </div>

                        <div className='user-info-manage'>
                            <label> Your Email:</label>
                            <input type= "email" defaultValue = {userParsed.email} onChange = {setemail}></input>

                        </div>

                        <div className='cancel-save-buttons'>
                            <button className='delete-account'> Cancel Operation</button>
                            <button type='submit' className='delete-account' > Save Changes</button>
                        </div>

                        </form>
                    
                    </div>

        

                </div>
            
            </div>

    </div>
        

    )

}


export default ProfileManage
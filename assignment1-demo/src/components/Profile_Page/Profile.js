
import { BrowserRouter, NavLink, Routes, Route, useNavigate, Link } from 'react-router-dom';
import React, { useState, useEffect, Redirect, Navigate} from "react";
import './Profile.css';
import pencilIcon from './istockphoto-891869522-612x612.jpg'
import trash from "./istockphoto-1409130581-612x612.webp"

const Profile = ({loggedInUser}) =>{
    
    const userInfo = localStorage.getItem(loggedInUser)
    const userParsed = JSON.parse(userInfo)
    const imageLink = userParsed['profile_pic']

    console.log(userParsed['profile_pic'])


    function delete_account() {
        console.log("Deleted")

        // Must produce a cue and confirmation

    }

    function edit_account() {
        console.log("Edited")

        // Should redirect to page similar to sign up
        // for editing user details.
    }


    return(
        <div className='outer-profile'>
            <div className='profile'>
                <h1>Profile Management</h1>
                <div className='profile-view'>
                    <img className='image' src = {`data:image/jpg;base64,${imageLink}`} alt=""></img>
                    <div className='profile-options'>
                        <div className='user-details'>
                            <p>{userParsed.firstname}</p>
                            <p>{userParsed.lastname}</p>
                            <small>{userParsed.email}</small>
                        </div>

                        <div className='profile-icons'>
                            <button onClick={edit_account}><img className='icon' src={pencilIcon} alt=""></img></button>
                            <p>Edit profile</p>
                        </div>
                        
                        <div className='profile-icons'>
                            <button onClick={delete_account}><img className='icon' src={trash} alt=""></img></button>
                            <p>Delete profile</p>
                        </div>
                        {}
                        
                    </div>
                </div>
                <div>
                    <h3>About me</h3>
                    <br></br>
                    <p>My password {userParsed.password}</p>
                </div>
            </div>
        </div>
    )

}



export default Profile
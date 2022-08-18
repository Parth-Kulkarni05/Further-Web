import { BrowserRouter, NavLink, Routes, Route, useNavigate, Link } from 'react-router-dom';
import React, { useState, useEffect, Redirect, Navigate} from "react";
import './profile_manage.css';



const ProfileManage = ({loggedInUser}) =>{
    
    const userInfo = localStorage.getItem(loggedInUser)
    const userParsed = JSON.parse(userInfo)
    const imageLink = userParsed['profile_pic']

    function handleImageUpload(){
        return null
    }


    return(

        <div className='profile-container'>

        <div className="profile-card">
                
            <div className="profile-pic">

                <img className='manage-pic' src = {`data:image/jpg;base64,${imageLink}`} alt=""></img>

                <button className="upload-img-button" onClick = {() => handleImageUpload()}> Upload Image</button>  
            
            </div>
        
        </div>


        </div>


    )

}


export default ProfileManage
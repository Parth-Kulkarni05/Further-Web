import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import './profile_manage.css';
import { emailError, nameError, emailCheck_ProfileChange } from '../Validation_rules/validation'




const ProfileManage = ({loggedInUser, onLogin}) => {
    
    const userInfo = localStorage.getItem(loggedInUser)
    const userParsed = JSON.parse(userInfo)
    const imageLink = userParsed['profile_pic']
    const[updatedfirstname, setnewfirstname] = useState(userParsed.firstname)
    const[updatedlastname, setnewlastname] = useState(userParsed.lastname)
    const originalemail = userParsed.email
    const[updatedemail, setnewemail] = useState(userParsed.email) 
    const[valid, setValid] = useState(null)
    const navigate = useNavigate();


    useEffect(() =>{
        if (valid) {
            redirect();
        }

    })

    
    function setfirstName(e) {
        setnewfirstname(e.target.value);

    }

    function setlastName(e) {
        setnewlastname(e.target.value);
    }

    function setemail(e) {
        setnewemail(e.target.value);
    }

    function handleSave(e) {
        e.preventDefault();
        validate();

    }

    function cancelChanges() {
        navigate(-1)
    
    }

        // Validates updated information
    function validate() {


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


        // Updates user information and sets it in localstorage, if valid is set to true
    function redirect() {

        if (valid) {

            userParsed.firstname = updatedfirstname;
            userParsed.lastname = updatedlastname;
            userParsed.email = updatedemail;


            localStorage.removeItem(loggedInUser)
            localStorage.setItem(updatedemail, JSON.stringify(userParsed))
            onLogin(updatedemail)

            navigate('/Profile')

        }
        else {
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
                            {nameError(valid, updatedfirstname)}
                        </div>

                        <div className= 'user-info-manage'>
                            <label> Last Name:</label>
                            <input type = "text" defaultValue = {userParsed.lastname} onChange = {setlastName}></input>
                            {nameError(valid, updatedlastname)}
                        </div>

                        <div className='user-info-manage'>
                            <label> Your Email:</label>
                            <input type= "text" defaultValue = {userParsed.email} onChange = {setemail}></input>
                            {emailError(valid, updatedemail)}
                            {emailCheck_ProfileChange(originalemail, updatedemail)}

                        </div>

                        <div className='cancel-save-buttons'>
                            <button className='delete-account' onClick={cancelChanges}> Cancel Operation</button>
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
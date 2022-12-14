import {useNavigate } from 'react-router-dom';
import './Profile.css';


const Profile = ({loggedInUser, onLogout}) =>{

    
    const userInfo = localStorage.getItem(loggedInUser)
    let userParsed = JSON.parse(userInfo)
    const imageLink = userParsed['profile_pic']

    // console.log(userParsed['profile_pic'])

    let navigate = useNavigate()


    function delete_account() {
        let val = window.confirm("Are you sure you want to delete your account? This will remove you from our system and all your created posts/replies")

        if (val){
            localStorage.removeItem(loggedInUser)
            onLogout()
            navigate('/')
            // Need to Delete Account, Posts and Replies at the Same Time
        }

        // Must produce a cue and confirmation

    }

    function edit_account() {
        navigate('/ProfileManage')

        // Should redirect to page similar to sign up
        // for editing user details.
    }


    return(
        <div className='profile-container'>
            <div className='profile-info'>
                <h1 className='profile-title'>Profile Management (Your Profile)</h1>
                <div className='img-logo'>
                    <img className='user-profile-img' src = {`data:image/jpg;base64,${imageLink}`} alt=""></img>
                </div>

                <div className='user-container'>

                <div className= 'user-info'>
                    <p>Full Name: {userParsed.firstname + " " +  userParsed.lastname}</p>
                </div>

                <div className='email-info'>
                    <p>Email: {loggedInUser}</p>
                </div>

                <div className='joined-info'>
                    <p>{userParsed.date_joined}</p>
                </div>

                </div>

                <div className='edit-delete-buttons'>
                    <button className='delete-account' onClick={delete_account}> Delete Account</button>
                    <button className='edit-account' onClick={edit_account}> Edit Account</button>
                </div>
            
            </div>
        
        </div>
    )

}



export default Profile
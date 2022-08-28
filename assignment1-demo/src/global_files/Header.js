import { Link } from 'react-router-dom';
import './Header.css'

const Header = ({loggedInUser, onLogout}) => {

    // Shows links to different web pages depending on the login status
    // of the client viewing the website.

    
     return (

      <div className = "navbar-container">

      <div className = "nav-logo">
          <Link to = "/"><img src = "/images/Header/header_logo.png" alt=""></img></Link>
      </div>
        
        {/* loggedInUser (string: email) dictates the conditional view */}
        
        {loggedInUser ? ( 
      
            <ul className = "nav-links">
              <Link to = "/" className="links"><li onClick={() => onLogout()}>Sign out</li></Link>
              <Link to = "/Profile" className="links"><li>Profile Management</li></Link>
              <Link to = "/create" className="links"><li>Create post</li></Link>
              <Link to = "/ProfilePosts" className="links"><li>My Posts</li></Link>
            </ul>
            
              
        ) :
            <ul className = "nav-links">
                <Link to = "/Signup" className="links"><li>Sign Up</li></Link>
                <Link to = "/LoginPage" className="links"><li>Log In</li></Link> 
            </ul>
        }

      </div>
    
     );

}
  
  



export default Header

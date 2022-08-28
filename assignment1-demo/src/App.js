import Header from "./global_files/Header";
import MainContent from "./components/LandingPage/MainContent"
import Footer from "./global_files/Footer";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from "./components/SignUpPage/signup.js"
import LoginPage from "./components/LoginPage/Login"
import Profile from "./components/Profile_Page/Profile";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";
import ProfileManage from "./components/Profile_Managemntt/profile_managment";
import ProfilePosts from "./components/Posts/ProfilePosts";
import CreatePost from "./components/Posts/CreatePost";
import PostView from "./components/Posts/PostView";
import MultiAuth from "./components/multi_auth/MultiAuth"

function App() {

  // The website distinguishes current logged in users based on their emails, stored in "loggedInUser"
  const [loggedInUser, setLoggedInUser] = useState(localStorage.getItem("loggedInUser"))
  
  const onLogin = (email) => {
    setLoggedInUser(email);
    localStorage.setItem("loggedInUser" , email)
  }

  const onLogout = () => {
    setLoggedInUser(null);
    localStorage.removeItem("loggedInUser")
  }


  return (
      
      <BrowserRouter>

        <ToastContainer position="top-center" theme="colored" autoClose={2000} />

        <Header loggedInUser = {loggedInUser} onLogout = {onLogout} />

        <Routes>
          <Route path="/" element={<MainContent onLogin = {onLogin} loggedInUser = {loggedInUser}/>}></Route>
          <Route path="/SignUp" element={<SignUp onLogin = {onLogin} />}></Route>  
          <Route path="/MultiAuth" element={<MultiAuth onLogin = {onLogin} loggedInUser = {loggedInUser}/>}></Route>         
          <Route path="/LoginPage" element={<LoginPage onLogin = {onLogin} />}></Route>
          <Route path="/Profile" element={<Profile loggedInUser = {loggedInUser} onLogout = {onLogout} />}></Route>
          <Route path="/ProfileManage" element={<ProfileManage loggedInUser = {loggedInUser} onLogin = {onLogin} />}></Route>
          <Route path="/ProfilePosts" element={<ProfilePosts loggedInUser = {loggedInUser}/>}></Route>
          <Route path="/PostView" >
              <Route path=":id" element={<PostView loggedInUser = {loggedInUser}/>}></Route>
          </Route>
          <Route path="/create" element={<CreatePost loggedInUser = {loggedInUser}/>}></Route>
        </Routes>

        <Footer></Footer>
      
      </BrowserRouter>

  );
}

export default App;

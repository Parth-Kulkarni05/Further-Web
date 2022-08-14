import Header from "./global_files/Header";
import MainContent from "./components/LandingPage/MainContent"
import Footer from "./global_files/Footer";
import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom';
import SignUp from "./components/SignUpPage/SignUp"
import LoginPage from "./components/LoginPage/Login"
import Profile from "./components/Profile_Page/Profile";
import { useState } from "react";

function App() {
  const [loggedInUser, setLoggedInUser] = useState(localStorage.getItem("loggedInUser"))
  

  const userInfo = JSON.parse(localStorage.getItem(loggedInUser))

  const onLogin = (email) => {
    setLoggedInUser(email);
    localStorage.setItem("loggedInUser" , email)
  }

  const onLogout = () => {
    setLoggedInUser(null);
    localStorage.removeItem("loggedInUser")
  }

  
  /*

  function toggleRefresh() {    // To refresh app.js for header reload
    setRefreshed(true)
  }

  function refreshPage() {
    if (refreshed) {
      window.location.reload()
      setRefreshed(false)     // set to false to avoid infinite refresh
    }
  }
  
  */

  return (

      
      <BrowserRouter>

        <Header loggedInUser = {loggedInUser} onLogout = {onLogout} />

        <Routes>
          <Route path="/" element={<MainContent/>}></Route>
          <Route path="/SignUp" element={<SignUp onLogin = {onLogin} />}></Route>           
          <Route path="/LoginPage" element={<LoginPage onLogin = {onLogin} />}></Route>
          <Route path="/Profile" element={<Profile loggedInUser = {loggedInUser} />}></Route>

        </Routes>

        <Footer></Footer>
      
      </BrowserRouter>





  );
}

export default App;

import Header from "./global_files/Header";
import MainContent from "./components/LandingPage/MainContent"
import Footer from "./global_files/Footer";
import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom';
import SignUp from "./components/SignUpPage/SignUp"
import SignIn from "./components/SignInPage/Signin"
import { useState } from "react";

function App() {

  const [refreshed, setRefreshed] = useState(null)
  const [loggedInUser, setLoggedInUser] = useState(localStorage.getItem("LoggedIn_User"))   // User's email

  const userInfo = JSON.parse(localStorage.getItem(loggedInUser))
  


  function toggleRefresh() {    // To refresh app.js for header reload
    setRefreshed(true)
  }

  function refreshPage() {
    if (refreshed) {
      window.location.reload()
      setRefreshed(false)     // set to false to avoid infinite refresh
    }
  }


  return (

    <div className="body">
      
      <BrowserRouter>

        <Header></Header> 

        <Routes>
          <Route path="/" element={<MainContent userInfo={userInfo}/>}></Route>
          <Route path="/SignUp" element={<SignUp refresh={toggleRefresh}/>}></Route>   {/* Sign in only renders the maincontent page */}
        </Routes>

        {refreshPage()}

        <Footer></Footer>
      
      </BrowserRouter>

    </div>

  );
}

export default App;

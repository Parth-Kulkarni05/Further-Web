import React, { useState, useEffect } from "react";
import Header from "./global_files/Header";
import MainContent from "./components/LandingPage/MainContent"
import Footer from "./global_files/Footer";
import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom';
import Signup from "./components/SignUpPage/Signup"
import Sigin from "./components/SignInPage/Signin"

function App() {
  return (
    <BrowserRouter>

        <Header />

        <Routes>
          <Route  path = "/" element={<MainContent />} Footer = {null} ></Route>
          <Route  path = "/Signup" element={<Signup />}></Route>
          <Route  path = "/Sigin" element={<Sigin />}></Route>
        </Routes>
  

      <Footer />
    
    </BrowserRouter>


  );
}

export default App;

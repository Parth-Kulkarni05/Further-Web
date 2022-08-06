import React, { useState, useEffect } from "react";
import Header from "./global_files/Header";
import MainContent from "./components/LandingPage/MainContent"
import Footer from "./global_files/Footer";
import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom';
import Signin from "./components/SignInPage/Signin"


function notes() {

  // Functions to support conditional rendering which
  // return specific pages from user-defined components

  // State: bools could be used to guide conditional rendering.
  // onClick jsx-function: used to set bool
  
}

function App() {
  return (
    <BrowserRouter>
      <Header />
     

        <Routes>
          <Route path = "" element={<MainContent />}></Route>
          <Route path = "/Signin" element={<Signin />}></Route>
        </Routes>
  

      <Footer />
    
    </BrowserRouter>


  );
}

export default App;

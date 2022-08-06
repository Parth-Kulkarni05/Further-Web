import React, { useState, useEffect } from "react";
import './App.css';
import Header from "./components/Header";
import MainContent from "./components/MainContent"
import Footer from "./components/Footer";
import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom';
import Signin from "./components/Signin"

function App() {

  function notes() {

    // Functions to support conditional rendering which
    // return specific pages from user-defined components

    // State: bools could be used to guide conditional rendering.
    // onClick jsx-function: used to set bool
    
  }



  return (

    <div className="body">
      
      <BrowserRouter>

        <Header></Header> 

        {/* <MainContent></MainContent> */}


        <Routes>
          <Route path="" element={<MainContent/>}></Route>
          <Route path="/signin" element={<Signin/>}></Route>
        </Routes>

        <Footer></Footer>
      
      </BrowserRouter>

      
    </div>

  );
}

export default App;

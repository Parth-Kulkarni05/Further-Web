import { BrowserRouter, NavLink, Routes, Route, useNavigate, Link } from 'react-router-dom';
import React, { useState, useEffect, Redirect, Navigate} from "react";

function PublicPostView() {

    const [userParsed, setUser] = useState(JSON.parse(localStorage.getItem("PublicPosts")))


    return (
        <div className='public-post-view'>

            

        </div>
    )
}

export default PublicPostView
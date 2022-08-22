import { BrowserRouter, NavLink, Routes, Route, useNavigate, Link } from 'react-router-dom';
import React, { useState, useEffect, Redirect, Navigate} from "react";
import "./CreatePost.css"

function CreatePost(user) {

    // Posts should be created in the post attribute
    // of the users stored JSON object of information.

    const [body, setBody] = useState("")
    const [title, setTitle] = useState("")
    const navigate = useNavigate()

    function bodyinput(event) {
        setBody(event.target.value)
    }

    function titleinput(event) {
        setTitle(event.target.value)
    }

    function submitpost() {

        // Creates a post object and then adds it to posts attribute
        // in local storage.

        const post = {
            title: title,
            user: user.loggedInUser,
            body: body,
            id: Date.now(),
            replies: [],
        }
        

        console.log(user.loggedInUser)

        const userInfo = localStorage.getItem(user.loggedInUser)
        const userParsed = JSON.parse(userInfo)
        userParsed.posts.push(post)

        localStorage.setItem(user.loggedInUser, JSON.stringify(userParsed))     // Updates the user JSON object
        console.log(userParsed.posts)

        
        let publicPosts = JSON.parse(localStorage.getItem("PublicPosts"))
        publicPosts.posts.push(post)
        localStorage.setItem("PublicPosts", JSON.stringify(publicPosts))        // Updates the PublicPosts


        navigate("/ProfilePosts")
        alert("New post created!")

    }


    return (
        <div className='create-post-container'>
            
            <div className='create-post'>
                <h1>Create a post</h1>
            </div>

            <div className='post-form'>
                <form className='post-input'>
                    <label htmlFor='title'></label>
                    <input type='text' placeholder='Enter title' onChange={titleinput}></input>
                </form>

                <form className='post-input'>
                    <label htmlFor='text'></label>
                    {/* <input type="text" id="post-text" placeholder='Write some thoughts'></input> */}
                    <textarea placeholder='write something' onChange={bodyinput}></textarea>
                </form>
            </div>
            
            <div className='post-buttons'>
                <button onClick={submitpost}>Submit</button>
                <button>Upload image</button>
            </div>

        </div>
    )

}


export default CreatePost
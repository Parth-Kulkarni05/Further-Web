import { useNavigate } from 'react-router-dom';
import React, { useState} from "react";
import "./CreatePost.css"

function CreatePost(user) {

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
        

        const userParsed = JSON.parse(localStorage.getItem(user.loggedInUser))    // Extracts users object of information for updating into object
        
        userParsed.posts.push(post)

        localStorage.setItem(user.loggedInUser, JSON.stringify(userParsed))     // Updates the user JSON object


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
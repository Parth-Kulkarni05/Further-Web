import { BrowserRouter, NavLink, Routes, Route, useNavigate, Link, useParams } from 'react-router-dom';
import React, { useState, useEffect, Redirect, Navigate} from "react";
import "./PostView.css"

const PostView = (user) => {

    const idObj = useParams()
    const [post, setPost] = useState("")
    const [postIndex, setPostIndex] = useState("")
    const [found, setFound] = useState(false)
    const [userParsed, setUser] = useState(JSON.parse(localStorage.getItem(user.loggedInUser)))
    const [edit, setEdit] = useState(false)
    const [body, setBody] = useState('')
    const [reply, setReply] = useState('')
    const [refresh, setRefresh] = useState(false)
    let navigate = useNavigate();



    function getPostFromParams() {

        // Searches for the post from the given id of the url
        // using the useParams hook.

        // Should also edit the post in this page


        const userInfo = localStorage.getItem(user.loggedInUser)
        const userParsed = JSON.parse(userInfo)
        // let post = '';

        for (let i=0; i < userParsed.posts.length; ++i) {
            if (userParsed.posts[i].id === parseInt(idObj.id)) {
                setPost(userParsed.posts[i])
                setPostIndex(i)
                setFound(true)
            }
        }

    }

    
    function editPost(event) {

        // Edits the post using the post's id

        console.log(event.target.value)
        setEdit(true)
        
    }

    function bodyinput(event) {
        console.log(event.target.value)
        setBody(event.target.value)
    }

    function replyinput(event) {
        console.log(event.target.value)
        setReply(event.target.value)
    }



    function deletePost(event) {

        // Deletes the post using the post's id

        userParsed.posts.splice(postIndex, 1)
        localStorage.setItem(user.loggedInUser, JSON.stringify(userParsed))
        navigate(-1)
        alert("Post deleted!")

    }


    function submit() {

        // Resubmits the data from the form into html localstorage
        // via stringified json obj.

        userParsed.posts[postIndex].body = body;
        setPost(userParsed.posts[postIndex])
        localStorage.setItem(user.loggedInUser, JSON.stringify(userParsed))
        setEdit(false)

    }

    function submitreply() {

        const replyObj = {
            reply: reply,
            user: user.loggedInUser,
            id: Date.now(),
            date: new Date(),
        }
        userParsed.posts[postIndex].replies.unshift(replyObj)
        localStorage.setItem(user.loggedInUser, JSON.stringify(userParsed))

        setRefresh(true)

    }


    if (found === false) {
        getPostFromParams()
    }


    function refreshPage() {

        if (refresh) {
            window.location.reload()
            setRefresh(false)
        }
        
    }



    return (
        <div className='post-view'>

            {edit === false ? (
            
            <div>
                <h1>{post.title}</h1>
                <br></br>
                <p>{post.body}</p>
                <div className='post-buttons'>
                    <button value={post.id} onClick={deletePost}>Delete post</button>
                    <button value={post.id} onClick={editPost}>Edit post</button>
                </div>
            </div>

            ) : 
            <div>
                <h1>{post.title}</h1>
                <br></br>
                <input type='text' value={body === "" ? (userParsed.posts[postIndex].body) : body} onChange={bodyinput}></input>
                <div className='post-buttons'>
                    <button value={post.id} onClick={deletePost}>Delete post</button>
                    <button value={post.id} onClick={editPost}>Edit post</button>
                    <button onClick={submit}>Submit</button>
                </div>
            </div>
            }

            <div className='comments'>
                <input type='text' onChange={replyinput}></input>
                <button onClick={submitreply} className='add-comment'>Add a comment</button>

                <div className='comments-section'>

                </div>


                {post.replies ? (

                    post.replies.map((reply) => (

                        <div key={reply.id} className='replies'>
                            <small>{reply.user}   ----------- {reply.date}</small>
                            <h3>{reply.reply}</h3>
                        </div>

                    ))

                ) :

                    <div><h1>No comments on this post yet :)</h1></div>
                }

            </div>

            {refreshPage()}
                        
        </div>
    )

}

export default PostView
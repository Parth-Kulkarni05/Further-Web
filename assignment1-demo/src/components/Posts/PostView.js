import { BrowserRouter, NavLink, Routes, Route, useNavigate, Link, useParams } from 'react-router-dom';
import React, { useState, useEffect, Redirect, Navigate} from "react";
import "./PostView.css"
import Comment from './Comment';

const PostView = (user) => {

    const idObj = useParams()
    const [post, setPost] = useState("")
    const [postIndex, setPostIndex] = useState("")
    const [found, setFound] = useState(false)
    const [userParsed, setUser] = useState(JSON.parse(localStorage.getItem(user.loggedInUser)))
    const [edit, setEdit] = useState(false)
    const [replyComment, setReplyCOmment] = useState('')
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
            replies: [],
        }
        userParsed.posts[postIndex].replies.unshift(replyObj)
        localStorage.setItem(user.loggedInUser, JSON.stringify(userParsed))

        setRefresh(true)

    }


    function deletereply(event) {

        // Responsible for inputting a reply to a comment/reply.
        // Searches for reply based on reply id from button input event

        const reply_id = event.target.value

        for (let i = 0; i < post.replies.length; ++i) {
            if (post.replies[i].id === parseInt(reply_id)) {
                setReply(post.replies[i])       // sets the reply of the comment / has two functions
                console.log("success")
            }
        }

        // create reply obj and store in replies list of reply obj
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

            {/* There should be a conditional statement to check if the logged
                in user has created the post, and thus change the view of the 
                post accordingly */}

            <h1>{post.title}</h1>
            <br></br>

            
            {edit === false ? (
            
            <div className='post-upper'>
                <p>{post.body}</p>
                <div className='post-buttons'>
                    <button value={post.id} onClick={deletePost}>Delete post</button>
                    <button value={post.id} onClick={editPost}>Edit post</button>
                </div>
            </div>

            ) : 

            <div className='post-upper'>

                <textarea cols="79" rows="20" value={body === "" ? (userParsed.posts[postIndex].body) : body} onChange={bodyinput}></textarea>
                
                <div className='post-buttons'>
                    <button value={post.id} onClick={deletePost}>Delete post</button>
                    <button onClick={submit}>Submit</button>
                </div>
            </div>

            }


            <div className='comments'>

                <div className='comments-add'>
                    <textarea onChange={replyinput} placeholder="Add a comment to this post"></textarea>
                    <button onClick={submitreply} className='add-comment'>Add a comment</button>
                </div>

                <div className='comment-section'>

                    {post.replies ? (

                        post.replies.map((reply) => (
                            <div key = {reply.id}>
                                <small>{reply.user}</small>

                                <Comment userObj={userParsed} postIndex={postIndex} loggedIn={user.loggedInUser} content={reply}/>
                            </div>
                        ))

                    ) :

                        <div><h1>No comments on this post yet :)</h1></div>
                    }
                </div>

            </div>

            {refreshPage()}
                        
        </div>
    )

}

export default PostView
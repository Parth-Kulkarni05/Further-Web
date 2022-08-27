import {  useNavigate, useParams } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import Comment from './Comment';
import "./PostView.css"

const PostView = (user) => {

    const idObj = useParams()
    const [post, setPost] = useState("")
    const [postIndex, setPostIndex] = useState("")
    const [found, setFound] = useState(false)
    const [userParsed] = useState(JSON.parse(localStorage.getItem(user.loggedInUser)))     // Re-usable
    const [edit, setEdit] = useState(false)
    const [body, setBody] = useState('')
    const [reply, setReply] = useState('')
    const [image, setImage] = useState(null)
    const [invalidimage, setInvalid] = useState(null)
    let navigate = useNavigate();

    function getPostFromParams() {

            // Searches for the post from the given id of the url
            // using the useParams hook.

        const userInfo = localStorage.getItem(user.loggedInUser)
        const userParsed = JSON.parse(userInfo)



        for (let i=0; i < userParsed.posts.length; ++i) {
            if (userParsed.posts[i].id === parseInt(idObj.id)) {
                setPost(userParsed.posts[i])
                setPostIndex(i)
                setFound(true)
            }
        }


    }


    function bodyinput(event) {
        setBody(event.target.value)
    }

    function replyinput(event) {
        setReply(event.target.value)
    }

    function removeSelectedImage(){
        setImage(null)
        post.image = ''

    }

    function deletePost(event) {
            // Deletes the post (using the postsIndex to find
            // which post to delete)
            
        userParsed.posts.splice(postIndex, 1)
        localStorage.setItem(user.loggedInUser, JSON.stringify(userParsed))
        navigate(-1)
        alert("Post deleted!")

    }

    function editing(){

        setEdit(true)

        setImage(post.image)

        console.log(image)
        
    
    };


    function submit() {
            // Submits the data from the form into html localstorage
            // via setting a stringified json obj.

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

        setPost(userParsed.posts[postIndex])
        setReply("")

    }




    if ((found === false)) {
            // Conditional to make sure a post is found to render
        getPostFromParams()
    }

    



    return (

        <div className='post-view'>

            <h1>{post.title}</h1>
            <br></br>


            
            {edit === false ? (

                // Show only delete and edit options

            
            <div className='post-upper'>
                <p className='post-body'>{post.body}</p>
                <div className='post-buttons'>
                    <button value={post.id} onClick={deletePost}>Delete post</button>
                    <button value={post.id} onClick={editing}>Edit post</button>
                </div>


            <div className='image-rendering'>

                    {post.image &&(
                      <img src={post.image} alt = '' className = 'image-rendered-post-view'></img>
                    )}
            </div>
                        
            <div className='comments'>

            <div className='comments-add'>
                <textarea onChange={replyinput} placeholder="Add a comment to this post"></textarea>
                <button onClick={submitreply} className='add-comment'>Add a comment</button>
            </div>

            <div className='comment-section'>

                {post.replies ? (

                    post.replies.map((reply) => (
                        <div key = {reply.id}>
                            <small>{reply.user} {userParsed.firstname}</small>

                            <Comment userObj={userParsed} postIndex={postIndex} loggedIn={user.loggedInUser} content={reply}/>
                        </div>
                    ))

                ) :

                    <div><h1>No comments on this post yet :)</h1></div>
                }
            </div>

            </div>
        
            </div>
 
            ) : 

                // Else, show body in textarea for editing and submit button

            <div>
                <div className='post-upper'>

                    <textarea className='post-upper-textarea' cols="79" rows="20" defaultValue={ userParsed.posts[postIndex].body} onChange={bodyinput}></textarea>
            
                    
                    <div className='post-buttons'>
                        <button onClick={submit}>Submit</button>
                    </div>

                    <div className='image-rendering'>

                    {image &&(    
                        <div className='image-rendering'>

                            <div className='image-preview-container'>
                                    <div className='image-cancel'>
                                        <button onClick={removeSelectedImage} className = 'remove-image-button'> Remove This Image </button>
                                    </div>  
                            
                            </div>

                            <div className='image-rendering'>
                                <img src={image} alt = '' className = 'image-rendered-post-view'></img>

                                </div>
                            
                            </div>

                       )}



                    
                    </div>

                </div>
            </div>

            }

                        
        </div>
    )

}

export default PostView
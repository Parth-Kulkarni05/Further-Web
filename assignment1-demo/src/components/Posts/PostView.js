import {  useNavigate, useParams } from 'react-router-dom';
import React, {useState, useRef } from "react";
import Comment from './Comment';
import "./PostView.css"

const PostView = (user) => {

    const idObj = useParams()
    const [post, setPost] = useState("")
    const [postIndex, setPostIndex] = useState("")
    const [found, setFound] = useState(false)
    const [userParsed, setUserParsed] = useState(JSON.parse(localStorage.getItem(user.loggedInUser)))     // Re-usable
    const [edit, setEdit] = useState(false)
    const [body, setBody] = useState(null)
    const [reply, setReply] = useState('')
    const [image, setImage] = useState('')
    let navigate = useNavigate();
    let ref = useRef();
    let image_ref = useRef()

    

    function getPostFromParams() {

            // Searches for the post from the given id of the url
            // using the useParams hook.

        const userInfo = localStorage.getItem(user.loggedInUser)
        const userParsed = JSON.parse(userInfo)


        for (let i=0; i < userParsed.posts.length; ++i) {
            if (userParsed.posts[i].id === parseInt(idObj.id)) {      // Compares id of post object in localstorage and id stored in URL
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
    };

    function removeSelectedImage(){
        setImage(null)
        userParsed.posts[postIndex].image = false
    
    }

    function handleImage(event){
        setImage(event.target.value)
        console.log(image_ref.current.value)
        post.image = image_ref.current.value
        console.log("yoo", post.image)

    }

    function handleBrokenImage(){
        setImage(null)
    }


    function submit(event) {

            // Submits the data from the form into html localstorage
            // via setting a stringified json obj.


        if ((userParsed.posts[postIndex].body != null) && (ref.current.value.length > 0)){

            userParsed.posts[postIndex].body = ref.current.value;     
            setUserParsed(userParsed)
            setPost(userParsed.posts[postIndex])
            localStorage.setItem(user.loggedInUser, JSON.stringify(userParsed))
            setEdit(false)

        } 
        else{
            window.alert("Post cannot be empty. ")
        }


    }


    function submitreply() {

        // Creates reply object from reply state, adds it to JSON object of
        // user and saves it back to localstorage. reply and post states are
        // reset. 

        const replyObj = {
            reply: reply,
            user: user.loggedInUser,
            id: Date.now(),
            date: new Date(),
            replies: [],
        }


        if (reply.length > 0) {

            userParsed.posts[postIndex].replies.unshift(replyObj)
            localStorage.setItem(user.loggedInUser, JSON.stringify(userParsed))

            setPost(userParsed.posts[postIndex])
            setReply("")
            ref.current.value =  ''
        }
        
        
        else{
            window.alert("You comment cannot be empty.")
        }

    }




    if ((found === false)) {
            // Conditional to make sure a post is found to render
        getPostFromParams()
    }

    



    return (

        <div className='post-view'>

            <h1 className='post-title'>{post.title}</h1>
            <br></br>


            
            {edit === false ? (

                // If edit is false, show only delete and edit options

            
                <div className='post-upper'>
                    <p className='post-body'>{post.body}</p>
                    <div className='post-buttons'>
                        <button value={post.id} onClick={deletePost}>Delete post</button>
                        <button value={post.id} onClick={editing}>Edit post</button>
                    </div>


                    <div className='image-rendering'>

                        {console.log(post.image)}

                            {post.image &&(
                            <img src={post.image} alt = 'No visual to display' className = 'image-rendered-post-view'></img>
                            )}

                    </div>
                            
                    <div className='comments'>

                        <div className='comments-add'>
                            <textarea onChange={replyinput} placeholder="Add a comment to this post" ref = {ref}></textarea>
                            <button onClick={submitreply} className='add-comment'>Add a comment</button>
                        </div>

                        <div className='comment-section'>

                            {post.replies ? (

                                post.replies.map((reply) => (
                                    <div key = {reply.id}>
                                        <hr color='gray' width = {900}></hr>
                                        <br></br>
                                        <small className='user-info-comment'><b>{reply.user} {userParsed.firstname} {userParsed.lastname}</b></small>
                                        <br></br>
                                        <br></br>
                                        <Comment userObj={userParsed} postIndex={postIndex} loggedIn={user.loggedInUser} content={reply}/>
                                            {/* New componenet, Comment, to render the comments to a post with following props */}

                                    </div>
                                ))

                            ) :

                                <div><h1>No comments on this post yet :)</h1></div>

                            }
                            
                        </div>

                    </div>
            
                </div>
    
            ) : 

                // Else if edit is true, show body in textarea for editing, submit button and image.


            <div>
                <div className='post-upper'>

                    <textarea className='post-upper-textarea' cols="79" rows="20" defaultValue={ userParsed.posts[postIndex].body} onChange={bodyinput} ref = {ref}></textarea>
            
                    
                    <div className='post-buttons'>
                        <button onClick={submit}>Submit</button>
                    </div>

                    <div className='image-rendering'>
                    
                        <div className='box-rendering'>

                            {!image && ( 
                                <div className='post-buttons'>
                                    <label>Add Image with Post -- Enter URL: (Can be Local or Image Address Sourced Online)</label>
                                    <input type="text" placeholder='https://...' className = 'image-upload-input' onChange = {handleImage} name ='upload' ref = {image_ref}/>
                                </div>
                            )}

                        </div>


                        {image && (    
                            <div className='image-rendering'>

                                <div className='image-preview-container'>
                                        <div className='image-cancel'>
                                            <button onClick={removeSelectedImage} className = 'remove-image-button'> Remove This Image </button>
                                        </div>  
                                
                                </div>

                                <div className='image-rendering'>
                                    <img src={image} onError = {handleBrokenImage} alt = 'No visual to display' className = 'image-rendered-post-view'></img>

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
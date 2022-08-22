import React, { useState, useEffect, Redirect, Navigate} from "react";
import { BrowserRouter, NavLink, Routes, Route, useNavigate, Link, useParams } from 'react-router-dom';



function PublicPosts() {

    const [publicPosts, setPublic] = useState(JSON.parse(localStorage.getItem("PublicPosts")))

    
  return (
    <div className='post-view'>

            <h1>Forum</h1>

            {
                publicPosts.posts.map((post) =>(
                    <div className='posts-snippet'>
                        <Link key={post.id} to={`/PostView/${post.id}`}><h1>{post.title}</h1></Link>
                        <p>{post.body}</p>
                        
                        {/* <div className='post-buttons'>
                            <button key={post.id} value={post.id} onClick={deletePost}>Delete post</button>
                            <button key={post.id} value={post.id} onClick={editPost}>Edit post</button>
                        </div> */}
                    </div>
                ))
            }

        </div>
  )
}

export default PublicPosts
import { Link } from 'react-router-dom';
import React, { useState } from "react";
import "./ProfilePosts.css"

function ProfilePosts(user) {

    // Should show the posts from a specific user

    const [userParsed] = useState(JSON.parse(localStorage.getItem(user.loggedInUser)))


    return (
        <div className='post-view'>

            {userParsed.posts.length > 0 ? (
                <div><h1>{userParsed.firstname}'s posts</h1></div>
            ):
                <div><h1>No posts to show :)</h1></div>
            }

            {
                userParsed.posts.map((post) =>(
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


export default ProfilePosts
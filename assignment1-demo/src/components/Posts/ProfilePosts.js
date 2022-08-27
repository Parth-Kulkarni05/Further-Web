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
                        <Link key={post.id} to={`/PostView/${post.id}`} className = 'profile-post-links'><h1>Title: {post.title}</h1></Link>
                        <p>Content: {post.body}</p>
                    </div>
                ))
            }

        </div>
    )

}


export default ProfilePosts
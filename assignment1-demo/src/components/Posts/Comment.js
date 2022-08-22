import React, { useState, useEffect, Redirect, Navigate} from "react";
import "./Comment.css"

function Comment(props) {

    const [replying, setReplying] = useState(false)
    const [replyText, setReplyText] = useState('')
    

    function replytextinput(event) {
        setReplyText(event.target.value)
    }


    function submitReply() {

        // Switches the whole JSON post object in local storage
        // with updated information (the threded reply)


        const replyObj = {
            reply: replyText,
            reply_id: Date.now(),
            user : localStorage.getItem("loggedInUser"),    // The author, set to anyone currently logged in
        }

        let userInfo = props.userObj
        let postIndex = props.postIndex
        let postReplies = userInfo.posts[postIndex].replies


        // Search for the index of the reply to add to, from JSON file
        for (let i = 0; i < postReplies.length; ++i) {
            if (parseInt(postReplies[i].id) === parseInt(props.content.id)) {
                
                // Then, add replyObj to its replies array
                userInfo.posts[postIndex].replies[i].replies.unshift(replyObj)
                localStorage.setItem(props.loggedIn, JSON.stringify(userInfo))
            }
        }


        setReplying(false)
        console.log(replyObj)
        window.location.reload()
    }


  return (
    <div>

        <p>{props.content.reply}</p>

        <br></br>
        <button onClick={() => setReplying(true)}>Add reply</button>

        {replying ? (

            <div>
                <input placeholder="Enter reply" onChange={replytextinput}></input>
                <button onClick={submitReply}>Submit</button>
            </div>

        ) :
            <div>{/* Required div tag for ternary */}
                
                {props.content.replies.length > 0 ? (
                    <div className="nested-comments">
                        {props.content.replies.map((reply) => (
                            
                            <div className="comment" key={reply.id}>
                                <small>{reply.user}</small>
                                <p>{reply.reply}</p>
                            </div>
                        ))}
                    </div>
                ) :
                    ""
                }

            </div>
        }
        
    </div>
  )
}

export default Comment
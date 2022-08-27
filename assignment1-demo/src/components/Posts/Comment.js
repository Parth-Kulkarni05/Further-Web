import React, { useEffect, useState} from "react";
import "./Comment.css"

function Comment(props) {

    const [replying, setReplying] = useState(false)
    const [replyText, setReplyText] = useState('')
    const [content, setContent] = useState(props.content)      // Reply

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

        if (replyText.length > 0){
            
            // Search for the index of the reply to add to, from JSON file
            for (let i = 0; i < postReplies.length; ++i) {
                if (parseInt(postReplies[i].id) === parseInt(props.content.id)) {
                    
                    // Then, add replyObj to its replies array
                    userInfo.posts[postIndex].replies[i].replies.unshift(replyObj)
                    localStorage.setItem(props.loggedIn, JSON.stringify(userInfo))

                    setContent(userInfo.posts[postIndex].replies[i])
                }
            }

            setReplyText("")
            setReplying(false)
        // console.log(replyObj)
        // window.location.reload()
       } else{
        window.alert("Replies cannot be empty!")
       }
    
    }


  return (
    <div>

        <p>{props.content.reply}</p>

        <br></br>
        <button onClick={() => setReplying(true)}>Add reply</button>

        {replying ? (

                // Show input for reply to the reply

            <div>
                <input placeholder="Enter reply" onChange={replytextinput}></input>
                <button onClick={submitReply}>Submit</button>
            </div>

        ) :

                // Else, show view of all replies for given reply (from props.content)

            <div>
                
                {content.replies.length > 0 ? (
                    <div className="nested-comments">
                        {content.replies.map((reply) => (
                            
                            <div className="comment" key={reply.id}>
                                <small>{reply.user} {props.userObj.firstname}</small>
                                <p>{reply.reply}</p>
                            </div>
                        ))}
                    </div>
                ) :
                    ''
                }

            </div>
        }
        
    </div>
  )
}

export default Comment
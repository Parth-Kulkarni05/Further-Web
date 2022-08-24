import { useNavigate } from 'react-router-dom';
import React, { useState} from "react";
import "./CreatePost.css"

function CreatePost(user) {

    const [body, setBody] = useState("")
    const [title, setTitle] = useState("")
    const [image, setImage] = useState("")
    const navigate = useNavigate()

    function bodyinput(event) {
        setBody(event.target.value)
    }

    function titleinput(event) {
        setTitle(event.target.value)
    }

    function handleImage(event) {

        const media_options = ['image/gif','image/jpeg','image/png']

        if (event.target.files && event.target.files.length > 0 && media_options.includes(event.target.files[0]['type'])){
            setImage(event.target.files[0])
        }
        
        else if (event.target.files && event.target.files.length > 0){
            event.target.value = ''
            return(
                window.alert("You have not picked an image media file!")

            )
        }

    }

    function removeSelectedImage(){
        setImage(null)

    }




    function submitpost() {

        // Creates a post object and then adds it to posts attribute
        // in local storage.

        if (((body === "") || (title === ""))) {
            alert("Post or Title cannot be empty")
        }
        else if ((body.length > 250)) {
            alert("Post cannot have more than 250 characters")
        }
        else {

            console.log(image)

        
            const post = {
                title: title,
                user: user.loggedInUser,
                body: body,
                id: Date.now(),
                replies: [],
                image: image ? URL.createObjectURL(image): ''
            }

            console.log(post)
            

            let userParsed = JSON.parse(localStorage.getItem(user.loggedInUser))    // Extracts users object of information for updating into object
        
            userParsed.posts.push(post)

            localStorage.setItem(user.loggedInUser, JSON.stringify(userParsed))     // Updates the user JSON object


            navigate("/ProfilePosts")
            alert("New post created!")

        }

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
                <input type="file" accept='' onChange = {handleImage} name ='upload' />
                <button onClick={submitpost} className = 'create-post-submit-button'>Submit</button>
            </div>
            
        

            {image && (

                <div className='image-preview-container'>
                    <div className='image-cancel'>
                        <button onClick={removeSelectedImage} className = 'remove-image-button'> Remove This Image </button>
                    </div>           
                
                    <div className='image-container'>
                        <div className='image-cancel'>

                             <img src={URL.createObjectURL(image)} alt = '' className='preview-resize'></img>
                        </div>
                    </div>
                    
            </div>
            )};   



        </div>
                
    
    
    )

}


export default CreatePost
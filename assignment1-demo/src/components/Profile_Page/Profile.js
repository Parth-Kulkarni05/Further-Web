const Profile = () =>{

    let image_url = localStorage.getItem('parthivskill@gmail.com')

    let json_parsed = JSON.parse(image_url)

    const image_link = json_parsed['profile_pic']

    console.log(json_parsed['profile_pic'])



    return(
        <div>
        <h3>Hey, welcome to the profile customisation page.</h3>
        <img src = {`data:image/jpg;base64,${image_link}`} alt=""></img>
        </div>
        



    )




}



export default Profile
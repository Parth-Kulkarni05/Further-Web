
import { useNavigate } from "react-router-dom";

const MultiAuthLogin = ({onLogin, loggedInUser}) => {

    let userParsed = JSON.parse(localStorage.getItem(loggedInUser))

    let code = userParsed.code

    return(
        <div className="a"></div>
    )

}


export default MultiAuthLogin;
import { useNavigate } from "react-router-dom";

const NavBar = () => {
    
const navigate = useNavigate()
//     function handleLogOut(){
//         setUser(null)
//         navigate("/")
//     }

function navigateAboutUs(){
    navigate("AboutUs")
}

function navigateToHome(){
    navigate("/Home")
}

function navigateToReviews(){
    navigate("Reviews")
}

    return (
        <div className="navbar">
            <div className="navbarbuttons">
            <button onClick={navigateToHome}>Home</button>
           <button onClick={navigateAboutUs}>About us</button>
           <button onClick={navigateToReviews}>Leave a review!</button>
           </div>
        </div>

    )
  };

  export default NavBar;
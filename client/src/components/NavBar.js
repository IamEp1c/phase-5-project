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
            <button id="homeButton" class="button-35" role="button" onClick={navigateToHome}>Home</button>
           <button id="aboutUsButton" class="button-35" role="button" onClick={navigateAboutUs}>About us</button>
           <button id="reviewsButton" class="button-35" role="button" onClick={navigateToReviews}>Reviews</button>
           </div>
        </div>

    )
  };

  export default NavBar;
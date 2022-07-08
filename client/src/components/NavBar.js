import { useNavigate } from "react-router-dom";



function NavBar({user, setUser}) {

    function handleLogOut(){
        setUser(null)
        navigate("/")
    }

const navigate = useNavigate()

    return (
        <div className="navbar">
            <h1>Welcome to Waqas's Fine Coffee</h1>
        </div>

    )
  };

  export default NavBar;
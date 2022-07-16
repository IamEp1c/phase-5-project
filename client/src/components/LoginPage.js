import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "./features/user";


const LoginPage = ({user, setUser}) => {

  console.log("Youve reached LoginPage")


  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: username, password: password }),
    })
      .then((r) => r.json())
      .then((user) => {
          if(user.hasOwnProperty("error")){
            console.log("Incorrect username or password")
          } else {
            dispatch(login(user))
            navigate("/Home");
            
          }
      });
    }



  return (
    <div id="loginForLoginPage">
    <form className="loginpage" onSubmit={handleSubmit}>
    <h1 id="loginTitle">Login Here</h1>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
    </div>
  ) 
}


export default LoginPage; 
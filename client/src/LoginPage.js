import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const LoginPage = ({user, setUser}) => {

    // const navigate = useNavigate()

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
        console.log(user)
        if(user.id){
          setUser(user);
        //   navigate("/Home");
        } 
      });
    }



  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>

  ) 
}


export default LoginPage; 

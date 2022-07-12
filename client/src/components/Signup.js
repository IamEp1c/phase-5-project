import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login } from './features/user'


function Signup() {


    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")


    const [errors, setErrors] = useState([])

    const dispatch = useDispatch();
    const navigate = useNavigate()


    const onSubmit = async (e) => {
        e.preventDefault();
        const user = {
            username: username,
            password: password,
            email: email
        }
        let resp = await fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(user)
        })
        .then(resp => resp)
        if(resp.ok){
            resp.json().then(user => dispatch(login(user)))
            navigate("/home")
        }
    }

  return (
    <div>
        <h1>Signup</h1>
        <div id="insideSignup">
        <form onSubmit={onSubmit}>
            <input
                id='username'
                type="text"
                placeholder="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="text"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <input
                type="text"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit">Signup</button>
        </form>
        </div>



    </div>

  )


}

export default Signup; 
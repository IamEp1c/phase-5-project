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
            navigate("/login")
        }
    }

  return (
<div>
        {/* <h1>Signup</h1> */}

        <form id="signUpForm" onSubmit={onSubmit}>
            <input
                id='username'
                type="text"
                placeholder="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <br />

            <input
                type="password"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <input
                type="text"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <br />
            <button id="signUpButton" type="submit">Signup</button>
            <br />
        </form>
</div>

  )


}

export default Signup; 
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'


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
            navigate("/home")
        }
    }

  return (
    <div>
        <h1>Signup</h1>

        <form onSubmit={onSubmit}>
            <input
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

  )


}

export default Signup; 
// import React from 'react'
// import { useState, useEffect} from 'react';
// import Signup from './Signup';

// function LandingPage() {


//     const [user, setUser] = useState(false)

//     const [coffees, setCoffees] = useState([])
  
  
  
//     useEffect(() => {
//       fetch("/me").then((response) => {
//         if (response.ok) {
//           response.json().then((user) => setUser(user));
//         }
//       });
//       fetch("/cart").then(resp => resp.json())
//       .then(data => {
        
//       })
//     }, []);
  
  
  
//     useEffect(() => {
//         fetch("coffees") // because i have proxy i don't need full https
//         .then(resp => resp.json())
//         .then(data => {
//             setCoffees(data)
//         })
//     }, [])
  
  
//     // const navigate = useNavigate()
  
//     function handleLogOut(){
//       fetch("/logout", {
//         method: "DELETE"
//       })
//       .then(resp => resp.json())
//       setUser(false)
//       // navigate("/")
//   }
  
//   // make a component for reviews [done]
//   // fetch reviews [done]
//   // render reviews in the right place 
  
//   const [reviews, setReviews] = useState([])
  
//   useEffect(() => {
//     fetch("reviews")
//     .then(resp => resp.json())
//     .then(data => {
//       setReviews(data)
//     })
//   }, [])



//   return (
//     <>
//     { user? <button onClick={handleLogOut}>Logout</button> : 
//         <LoginPage user={user} setUser={setUser}/>}
//         <h1>Welcome to Waqas's Cafe</h1>
//         <Signup />
//     </>
//   )
// }

// export default LandingPage

import React from 'react'
import Signup from './Signup'
import LoginPage from '../LoginPage'
import {Link} from 'react-router-dom'

function LandingPage() {
  return (
  <>
    <h1>LandingPage</h1>

    <div>If you are a new, please sign-up with a username, email and password</div>
  
    <Signup />

    
    <div>If you already have an account, please sign-in using the link  below</div>
    <Link to={'/login'}>Click here to log-in</Link>
    {/* this links you to the loginpage because of the route ^  */}

    </>
  )
}

export default LandingPage
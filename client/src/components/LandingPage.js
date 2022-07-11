import React from 'react'
import Signup from './Signup'
import LoginPage from '../LoginPage'
import {Link} from 'react-router-dom'

function LandingPage() {
  return (
  <div className="LandingPage">
    <h1>Welcome to Waqas's Cafe!</h1>

    <div>If you are a new user, please register with a username, email and password</div>
  
    <Signup />

    <br></br>    
    <div>If you already have an account, please sign-in using the link  below</div>
    <br></br>
    <Link to={'/login'}>Click here to log-in</Link>
    {/* this links you to the loginpage because of the route ^  */}

  </div>
  )
}

export default LandingPage
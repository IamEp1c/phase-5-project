import React from 'react'
import Signup from './Signup'
import LoginPage from '../LoginPage'
import {Link} from 'react-router-dom'

function LandingPage() {

  console.log("Youve reached LandingPage")


  return (
  <div className="LandingPage">
    <div className='informationInLandingPageBox'>
      <h1>Welcome to Waqas's Cafe!</h1>

      <div>If you are a new user, please register with a username, email and password</div>

      <h1>Signup</h1>
      <Signup />

      <br></br>    
      <div>If you already have an account, please sign-in using the link  below</div>
      <br></br>
      <Link to={'/login'}>Click here to log-in</Link>
      {/* this links you to the loginpage because of the route ^  */}
    </div>
  </div>
  )
}

export default LandingPage
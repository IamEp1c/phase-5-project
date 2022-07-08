import React from "react";
import { useState, useEffect } from "react";
import {BrowserRouter as Router, Routes, Route, Link, useNavigate} from 'react-router-dom'
import Home from "./Home";
import LoginPage from "./LoginPage";
import Reviews from "./Reviews";
import LandingPage from "./LandingPage";
import ErrorPage from "./ErrorPage";
import { useDispatch } from "react-redux";
import { setCoffees } from "./features/coffee.js"
import { setCart } from "./features/cart";
import { login } from "./features/user";



function App() {
const dispatch = useDispatch()

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => dispatch(login(user)));
      }
    });
    fetch("/cart").then(resp => resp.json())
    .then(data => {
      console.log(data)
      dispatch(setCart (data.cart))
      
    })
  }, []);

  useEffect(() => {
      fetch("/coffees") // because i have proxy i don't need full https
      .then(resp => resp.json())
      .then(data => {
          dispatch(setCoffees (data)) 
      })
  }, [])


//   // const navigate = useNavigate()

//   function handleLogOut(){
//     fetch("/logout", {
//       method: "DELETE"
//     })
//     .then(resp => resp.json())
//     setUser(false)
//     // navigate("/")
// }

// // make a component for reviews [done]
// // fetch reviews [done]
// // render reviews in the right place 

// const [reviews, setReviews] = useState([])

// useEffect(() => {
//   fetch("reviews")
//   .then(resp => resp.json())
//   .then(data => {
//     setReviews(data)
//   })
// }, [])




// const addToCart = (product) => {
//   const exist = cartItems.find(element => element.id === product.id)
//   if(exist){
//     setCartItems(cartItems.map(x => x.id === product.id ? {...exist, qty: exist.qty +1 } : x 
      
      
//       ))
//   } else {
//     setCartItems([...cartItems, {...product, qty: 1}])
//   }
// }
{/* <h2>welcome to Waqas's Cafe</h2>
{/* {renderedCoffees} */}
// { user? <button onClick={handleLogOut}>Logout</button> : 
// <LoginPage user={user} setUser={setUser}/>}
// <Home coffees={coffees} user={user} reviews={reviews} />
// <Reviews reviews={reviews}/> */}

  return (
  <div>
     <Router>
      <Routes>
        <Route exact path={"/"} element={<LandingPage/>} />
        <Route exact path={"/Login"} element={<LoginPage/>} />
        <Route exact path={"/Home"} element={<Home />} />
        <Route exact path={"/Reviews"} element={<Reviews />} />
        <Route exact path={"*"} element={<ErrorPage/>} />
        </Routes>
    </Router>
  </div>
  );
}

export default App;

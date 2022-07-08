import React from "react";
import { useState, useEffect } from "react";
// import {BrowserRouter as Router, Routes, Route, Link, useNavigate} from 'react-router-dom'
import Home from "./Home";
import LoginPage from "../LoginPage";
import Reviews from "./Reviews";


function App() {

  const [user, setUser] = useState(false)

  const [coffees, setCoffees] = useState([])



  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
    fetch("/cart").then(resp => resp.json())
    .then(data => {
      
    })
  }, []);



  useEffect(() => {
      fetch("coffees") // because i have proxy i don't need full https
      .then(resp => resp.json())
      .then(data => {
          setCoffees(data)
      })
  }, [])


  // const navigate = useNavigate()

  function handleLogOut(){
    fetch("/logout", {
      method: "DELETE"
    })
    .then(resp => resp.json())
    setUser(false)
    // navigate("/")
}

// make a component for reviews [done]
// fetch reviews [done]
// render reviews in the right place 

const [reviews, setReviews] = useState([])

useEffect(() => {
  fetch("reviews")
  .then(resp => resp.json())
  .then(data => {
    setReviews(data)
  })
}, [])




// const addToCart = (product) => {
//   const exist = cartItems.find(element => element.id === product.id)
//   if(exist){
//     setCartItems(cartItems.map(x => x.id === product.id ? {...exist, qty: exist.qty +1 } : x 
      
      
//       ))
//   } else {
//     setCartItems([...cartItems, {...product, qty: 1}])
//   }
// }
  

  return (
    <div className="App">
      <h2>welcome to Waqas's Cafe</h2>
        {/* {renderedCoffees} */}
       { user? <button onClick={handleLogOut}>Logout</button> : 
       <LoginPage user={user} setUser={setUser}/>}
       <Home coffees={coffees} user={user} reviews={reviews} />
       {/* <Reviews reviews={reviews}/> */}
    </div>
  );
}

export default App;

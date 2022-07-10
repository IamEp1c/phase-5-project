import {  useEffect, useState } from "react"; 
import CoffeeItem from "./CoffeeItem";
import Cart from "./Cart";
import LoginPage from "./LoginPage";
import Reviews from "./Reviews"
import { setCart } from "./features/cart.js";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "./features/user";
import { useNavigate } from "react-router-dom";
import { setReviews } from "./features/reviews.js"


const Home = () => {
    const dispatch = useDispatch()

const coffees = useSelector(state => state.coffee.value)
const user = useSelector(state => state.user.value)
const cart = useSelector(state => state.cart.value)
const reviews = useSelector(state => state.reviews.value)

// console.log(reviews)

const displayReview = (id) => {
    // console.log(id)
    fetch(`/coffees/${id}/reviews`)
    .then(resp => resp.json())
    .then(data => {
       dispatch(setReviews(data))
    })
}

const renderedCoffees = coffees.map(coffee =>{
        return <CoffeeItem coffee={coffee} key={coffee.id} handleCart={handleCart} displayReview={displayReview}/>
    })




function handleCart(coffee){
    dispatch(setCart([...cart, coffee]))
    
}

const formattedCart = {}
cart.forEach(item => {
    if(formattedCart[item.id]){
        formattedCart[item.id].quantity += 1
    } else {
        formattedCart[item.id] = {...item, quantity: 1}
    }
})

const formattedCartv2 = Object.values(formattedCart)


useEffect(() => {
    fetch("/cart", {
        method: "PATCH", 
        headers: {
            "content-type" : "application/json"
        },
        body: JSON.stringify({
            cart: cart
        })
    })
}, [cart])


useEffect(() => {
    fetch("/cart").then(resp => resp.json())
    .then(data => {
        console.log(data.cart)
        setCart(data.cart)
    })
  }, []);

const navigate = useNavigate()

// this navigate below is a component
    if(!user){
        return <Navigate replace to='/'/>
    }

const handleLogout = () => {
    fetch("/logout", {
        method: "DELETE"
    })
    .then(resp => resp.json())
    dispatch(logout())
    navigate("/")
}



    return (
        <>
        <h1>Welcome to Waqas's Cafe!</h1>
        { user? <button id="logoutbutton" onClick={handleLogout}>Logout</button> : <Navigate replace to='/Login'/>}
        <div className="renderedcoffees">
        {renderedCoffees}

        {reviews.length > 0 ? <Reviews reviews={reviews}/> : null }
        
        <Cart cart={formattedCartv2} setCart={setCart}/>
        </div>
        </>
    )
}

export default Home;
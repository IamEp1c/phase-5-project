import {  useEffect, useState } from "react"; 
import CoffeeItem from "./CoffeeItem";
import Cart from "./Cart";
import { setCart } from "./features/cart";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const Home = () => {

const coffees = useSelector(state => state.coffee.value)
const user = useSelector(state => state.user.value)
const cart = useSelector(state => state.cart.value)

const renderedCoffees = coffees.map(coffee =>{
        return <CoffeeItem coffee={coffee} key={coffee.id} handleCart={handleCart}/>
    })

const dispatch = useDispatch()


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



    if(!user){
        return <Navigate replace to='/'/>
    }




    return (
        <div className="renderedcoffees">
           {renderedCoffees}
           {/* {cartItems.length === 0 && <div>Cart Is Empty</div>} */}
           <Cart cart={formattedCartv2} setCart={setCart}/>
        </div>
    
    )
}

export default Home;
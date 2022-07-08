import {  useEffect, useState } from "react"; 
import CoffeeItem from "./CoffeeItem";
import Cart from "./Cart";

const Home = ({coffees, user}) => {

const renderedCoffees = coffees.map(coffee =>{
        return <CoffeeItem coffee={coffee} key={coffee.id} handleCart={handleCart}/>
    })


const [cart, setCart] = useState([])



function handleCart(coffee){
    setCart([...cart, coffee])
    
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

console.log("look here")
console.log(formattedCartv2)

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
        return <></>
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
import { useState } from "react"
import CartItem from "./CartItem"

const Cart = ({cart, setCart}) => {
    console.log(cart)


    const [isShown, setIsShown] = useState(false)


    function handleDelete(id){
        console.log(id)
        const filteredCarts = cart.filter(item => item.id !== id)
        setCart(filteredCarts)

    }

    const renderCart = cart.map(cartItem => {
        return <CartItem cartItem={cartItem} handleDelete={handleDelete}/>
    })
    return (
        <div className="cart">
            <button onClick={() => setIsShown(!isShown)}>Cart Items</button>
            {
                isShown ? renderCart : ""
            }
        </div>
    )
}

export default Cart; 
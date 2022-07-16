import { useState } from "react"
import CartItem from "./CartItem"
// when importing a function to a component , you put curly brackets on functions 
import { deleteItemFromCart } from "./features/cart.js"
import { useDispatch } from "react-redux";

const Cart = ({cart, setCart}) => {

    console.log("You've reached cart")

    const dispatch = useDispatch()

    const [isShown, setIsShown] = useState(false)


    function handleDelete(id){
        dispatch(deleteItemFromCart(id))
    }

    const renderCart = cart.map(cartItem => {
        return <CartItem cartItem={cartItem} handleDelete={handleDelete} key={cartItem.id}/>
    })
    return (
        <div className="cart">
            <button className="button-35" onClick={() => setIsShown(!isShown)}>Cart Items</button>
            {
                isShown ? renderCart : ""
            }
        </div>
    )
}

export default Cart; 
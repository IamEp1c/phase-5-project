import { useState } from "react"


const CartItem = ({cartItem, handleDelete}) => {

const {name, price, image, id, quantity} = cartItem


    return (
        <div className="CartItems">
            <img src={image} />
            <h3>{name}</h3>
            <p>${price}</p>
            <p>quantity: {quantity}</p>
            <button onClick={() => handleDelete(id)}>Delete</button>
        </div>
    )
}

export default CartItem; 
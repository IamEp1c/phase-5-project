import { useState } from "react"
const CoffeeItem = ({coffee, handleCart, displayReview}) => {

const {name, description, image, id, price} = coffee

// const [cart, setCart] = useState([])
// // console.log(coffee)

// function handleCart(coffee){
//     setCart([...cart, coffee])
//     console.log(coffee)
// }

    return (
        <div className="coffeecontainer">
            <img className="coffeeImage" src={image}/>
            <h1 className="pTagForDescription">{name}</h1>
            <div>
            <p className="pTagForDescription">{description}</p>
            <p>${price}</p>
            <button onClick={() => handleCart(coffee)}>Add To Cart</button>
            </div>
        </div>
        
        
    )

}

export default CoffeeItem;
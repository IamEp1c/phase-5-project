import React from "react";
import {  useEffect, useState } from "react"; 


const Home = ({coffee}) => {

const {name, image, description} = coffee

//     const [coffees, setCoffees] = useState([])

    
//     useEffect(() => {
//         fetch("coffees") // because i have proxy i don't need full https
//         .then(resp => resp.json())
//         .then(data => {
//             console.log(data)
//             setCoffees(data)
//         })
//     }, [])


// const renderedCoffees = coffees.map(coffee => {
//     return coffee.name
// })


    return (
        <div>
            <h1>{name}</h1>
            {/* <img src={image}/> */}
            <p>{description}</p>
        </div>
    
    )
}

export default Home;
import {  useEffect, useState } from "react"; 
import CoffeeItem from "./CoffeeItem";
import Cart from "./Cart";
import LoginPage from "./LoginPage";
import Reviews from "./Reviews"
import { setCart } from "./features/cart.js";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "./features/user";
import { useNavigate } from "react-router-dom";
import { setReviews } from "./features/reviews.js"
import NavBar from "./NavBar";



const Home = () => {


const user = useSelector(state => state.user.value)


console.log("Youve reached home")


// this navigate below is a component
    if(!user){
        return <Navigate replace to='/'/>
    }



    return (
    <div id="renderHome">
        <>
        <h1 className="title">Welcome to Waqas's Cafe!</h1>
        <NavBar />
        <Outlet />
        </>
    </div>
    )
}

export default Home;
import React from "react";
import { useState, useEffect } from "react";
import {BrowserRouter as Router, Routes, Route, Link, useNavigate} from 'react-router-dom'
import Home from "./Home";
import LoginPage from "./LoginPage";
import Reviews from "./Reviews";
import LandingPage from "./LandingPage";
import ErrorPage from "./ErrorPage";
import AboutUs from "./AboutUs";
import Shopping from "./Shopping";
import { useDispatch } from "react-redux";
import { setCoffees } from "./features/coffee.js"
import { setCart } from "./features/cart";
import { login } from "./features/user";





function App() {
const dispatch = useDispatch()

// const navigate = useNavigate()

  useEffect(() => {
    // auto login
    // fetch("/me").then((response) => {
    //   if (response.ok) {
    //    response.json().then((user) => {
    //     dispatch(login(user))
    //     navigate("/home")
    //   })
    //   };
    // });

    fetch("/cart").then(resp => resp.json())
    .then(data => {
      dispatch(setCart (data.cart))
      
    })
  }, []);

  useEffect(() => {
      fetch("/coffees") // because i have proxy i don't need full https
      .then(resp => resp.json())
      .then(data => {
          dispatch(setCoffees (data)) 
      })
  }, [])



  return (
  <div>
     <Router>
      <Routes>
        <Route exact path={"/"} element={<LandingPage/>} />
        <Route exact path={"/Login"} element={<LoginPage/>} />
        <Route exact path={"/Home"} element={<Home />} >
          <Route exact index element={<Shopping />} />
          <Route exact path={"Reviews"} element={<Reviews />} />
          <Route exact path={"AboutUs"} element={<AboutUs />} />
          <Route exact path={"Reviews"} element={<Reviews />} />
        </Route>

        <Route exact path={"*"} element={<ErrorPage/>} />
        </Routes>
    </Router>
  </div>
  );
}

export default App;

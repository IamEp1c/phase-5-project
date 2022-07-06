import React from "react";
import { useState, useEffect } from "react";
// import {BrowserRouter as Router, Routes, Route, Link, useNavigate} from 'react-router-dom'
import Home from "./components/Home";
import LoginPage from "./LoginPage";

function App() {

  const [user, setUser] = useState(null)


  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);


  const [coffees, setCoffees] = useState([])

  useEffect(() => {
      fetch("coffees") // because i have proxy i don't need full https
      .then(resp => resp.json())
      .then(data => {
          console.log(data)
          setCoffees(data)
      })
  }, [])







const renderedCoffees = coffees.map(coffee => {
  return <Home coffee={coffee} key={coffee.id}/>
})

  return (
    <div className="App">
      <h2>Welcome to my page brah</h2>
        {renderedCoffees}
        <LoginPage user={user} setUser={setUser}/>
    </div>
  );
}

export default App;

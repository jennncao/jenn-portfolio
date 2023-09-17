import "./heroimg.css";

import React from 'react'
import city from "../assets/city.jpg";
import { Link } from "react-router-dom";

const Heroimg = () => {
  return (
    <div className = "hero"> 
        <div className = "mask"> 
            <img className = "intro-img" src = {city} alt = "city" />
        </div>
        <div className = "content">
            <p> Nice to meet you, I'm </p>
            <h1> Jennifer Cao </h1>
            <div>
                <Link to = "/projects" className = "btn"> Projects </Link>
                <Link to = "/about" className = "btn-light"> About </Link>
            </div>
        </div>
    </div>
  )
}

export default Heroimg;
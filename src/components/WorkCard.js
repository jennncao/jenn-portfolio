import "./wordcard.css";

import React from 'react';
import proj1 from "../assets/mqdefault.jpg";
import { NavLink } from "react-router-dom";

const WorkCard = (props) => {
  return (
    <div className = "project-card">
                <img src = { props.imgsrc } alt = "img" />
                <h2 className = "project-title"> 
                    <NavLink to = "url.com">
                        { props.title } 
                    </NavLink>
                </h2>
                <div className = "proj-details">
                    <p>{ props.text }</p>
                    <div className = "proj-btns">
                        <NavLink to = { props.view }> View </NavLink>
                    </div>
                    <div className = "proj-btns">
                        <NavLink to = { props.source }> Source </NavLink>
                    </div>
                </div>
            </div>
  )
}

export default WorkCard
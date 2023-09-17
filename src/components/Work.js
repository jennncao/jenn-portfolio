import "./wordcard.css";
import WorkCard from "./WorkCard";
import WordCardData from "./WordCardData";

import React from 'react';
import proj1 from "../assets/mqdefault.jpg";
import { NavLink } from "react-router-dom";

const Work = () => {
  return (
    <div className = "work-container">
        <div className = "project-container">
            { WordCardData.map((val, index) => {
                return (
                    <WorkCard
                    key = { index }
                    imgsrc = { val.imgsrc }
                    title = { val.title }
                    text = { val.text }
                    view = { val.view }
                    source = { val.source }
                    />
                )
            })}
        </div>
    </div>
  )
}

export default Work
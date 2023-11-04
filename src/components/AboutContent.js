import "./about.css";

import React from 'react'
import { Link } from "react-router-dom";

const AboutContent = () => {
  return (
    <div className = "about">
        <h1>
            Who Am I?
        </h1>
        <p>
            Hello, nice to meet you! My name is Jennifer Cao and I am currently a senior at the University of Pittsburgh studying Computer 
            Science + Digital Narrative and Interactive Design (DNID). I have mostly focused on back-end development, though my affinty towards
            design does draw me towards front-end development as well. As someone who does particularly love narrative-based video games,
            I have also dabbled in game design, particularly on the storytelling side though I am currently working on a game as a capstone project.
            I am originally from New Jersey in the New York Metropolitan Area. Outside of computer science related areas, I enjoy art, music, 
            travelling, and good food (a live-to-eat type of person, if you will). {
                
            }
        </p>
        {/*
        <Link to = "/contact">
            <button className = "about-btn">
                Contact
            </button>
        </Link>
        */}
    </div>
  )
}

export default AboutContent
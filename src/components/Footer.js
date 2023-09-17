import "./footer.css";

import React from 'react'
import { FaHome, FaPhone, FaMailBulk, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className = "footer">
        <div className = "footer-container">
            <div className = "left">
                <div className = "phone">
                    <h4>
                    <FaPhone size = {20} style = {{color: "#fce8d2", marginRight: "2rem"}}/>
                    201-509-9263
                    </h4>
                </div>
                <div className = "email">
                    <h4>
                    <FaMailBulk size = {20} style = {{color: "#fce8d2", marginRight: "2rem"}}/>
                    jenniferqcao@gmail.com
                    </h4>
                </div>
                <div className = "social">
                    <a href = "https://www.linkedin.com/in/jennifer-cao-0325jc/">
                        <FaLinkedin size = {20} style = {{color: "#fce8d2", marginRight: "2rem"}}/>
                    </a>
                    <a href = "https://github.com/jennncao">
                        <FaGithub size = {20} style = {{color: "#fce8d2", marginRight: "2rem"}}/>  
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
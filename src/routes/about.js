import React from 'react'

import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import Heroimg2 from "../components/Heroimg2";
import AboutContent from "../components/AboutContent";

const About = () => {
  return (
    <div>
      <Navbar />
      <Heroimg2 heading = "About Me"/>
      <AboutContent />
      <Footer />
    </div>
  )
}

export default About
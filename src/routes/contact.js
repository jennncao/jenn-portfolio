import React from 'react'

import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import Heroimg2 from "../components/Heroimg2";
import Form from "../components/Form";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <Heroimg2 heading = "Contact"/>
      <Form />
      <Footer />      
    </div>
  )
}

export default Contact
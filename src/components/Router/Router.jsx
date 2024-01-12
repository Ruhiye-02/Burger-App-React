import React from 'react'
import { Routes, Route } from "react-router"

import Home from "../Home"
import Menu from "../Menu"
import About from "../About"
import Contact from "../Contact"

const Router = () => {
  return (

    <div>
<Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/menu" element={<Menu/>}  />
    <Route path="/about" element={<About/>} />
    <Route path="/contact" element={<Contact/>} />
</Routes>

    </div>


  )
}

export default Router
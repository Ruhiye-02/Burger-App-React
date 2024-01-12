import React from 'react'
import { Link, NavLink } from 'react-router-dom'   
import Arxafon from "../assets/images/banneryeni.jpg"    //yonlendirme edeciyikse bu linki import etmeliyik 
import "../styles/Home.css"
const Home = () => {
  return (
    <div className='mainPage' style={{backgroundImage:`url(${Arxafon})`}}>
      <div className='order'>
        <Link to="/menu">
          <button>Sifariş Ver </button>
        </Link>
      </div>
    </div>
  )
}

export default Home
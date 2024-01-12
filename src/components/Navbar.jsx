import React from 'react'
import BurgerLogo from '../assets/images/burgerlogo.png'
import { Link, NavLink } from 'react-router-dom'
import "../styles/Navbar.css"

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='main'>
                <img src={BurgerLogo} alt="" />
                <div className='mainLink'>
                    <Link to={"/"}>Əsas Səhifə</Link >
                    <Link to={"/menu"}>Menu</Link >               {/*burda yazdigimiz dirnaqlar arasindaki menu flan routerdeki path ile eyni olmalidir  */}
                    <Link to={"/about"}>Haqqimizda</Link >
                    <Link to={"/contact"}>Əlaqə</Link >
                </div>
            </div>
        </div>
    )
}

export default Navbar
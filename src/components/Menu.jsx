import React from 'react'
import "../styles/Menu.css"
import { Data } from '../Data/data'                           //datani burda istifade edeceyik deye import edirik 
 import MenuItem from './MenuItem'
const Menu = () => {
  return (
    <div className='menu'>
      <h1 className='menuTitle'>Burgerlərimiz</h1>
      <div className='menuList'>
        { Data.map((menuItem,key)=>{
          return (
            <MenuItem
            key={key}
            image = {menuItem.image}
            name = {menuItem.name}
            content={menuItem.content}
            price = {menuItem.price}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Menu
import React from 'react'
import "../styles/Contact.css"
import Arxafon from "../assets/images/banner.png"
const Contact = () => {
  return (
    <div className='contact'>
      <div className='leftSide'
        style={{ backgroundImage: `url(${Arxafon})` }}
      ></div>
      <div className='rightSide'>
        <h1>Bizimlə Əlaqə Saxlayin</h1>
        <form>
          <label >Ad Soyad</label>
          <input type="text" name='name' placeholder='Adınızı və soyadınızı daxil edin' />

          <label >Email</label>
          <input type="text" name='email' placeholder='Emailinizi daxil edin' />

          <label >Mesajınız</label>
          <textarea name="message" rows="6" placeholder='Mesajınızı yazın'>
          </textarea >
          <button>Göndər</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
import React from 'react'
import "../styles/About.css"
import Arxafon from "../assets/images/banneryeni.jpg"

const About = () => {
  return (
    <div className='about' >
      <div className='aboutTop' style={{ backgroundImage: `url(${Arxafon})` }}> </div>
      <div className='aboutBottom'>
        <h1>Haqqımızda</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique sed provident vel! Totam, quam quaerat. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque vitae, consequatur in quibusdam error iusto autem neque possimus fuga inventore ex non laboriosam veritatis aliquam, adipisci nihil exercitationem sed. Vero? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae omnis exercitationem fugiat atque facilis ipsa, doloribus ut enim adipisci odio ipsam. In nam nobis pariatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit nisi cupiditate facere in repellat quam quia deleniti sed.
        </p>
      </div>
    </div>
  )
}

export default About
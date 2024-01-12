import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';     //material ui-dan import edirsen verilen adi harda istifade elemek isteyirsense component kimi cagirirsan.
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import "../styles/Footer.css"
const Footer = () => {
    return (
        <div className='footer'>
            <div className='socialMedia'>
                <FacebookIcon />
                <InstagramIcon/>
                <TwitterIcon/>
            </div>
            <p>Bütn haqlar qorunur | Burger</p>
        </div>
    )
}

export default Footer
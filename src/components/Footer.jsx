import React from 'react'
import { Link } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import '../styles/Footer.css'
function Footer(){

    return(
        <div className="footer">
            <div className="socialMedia">
                <Link to='/' target='_blank'><InstagramIcon /></Link>
                <Link to='/' target='_blank'><FacebookIcon /></Link>
                <Link to='/' target='_blank'><LinkedInIcon /></Link>
                <Link to='/' target='_blank'><TwitterIcon /></Link>
            </div>
            <p style={{marginBottom:0}}>&copy; 2023 techPizzeria.com</p>
        </div>
    )
}
export default Footer
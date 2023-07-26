import React from 'react'
import { Link } from 'react-router-dom'
import BannerImage from '../assets/pizza.jpeg'
import '../styles/Home.css'
export function Home(){
    return(
        <div className="home"  style={{backgroundImage: `url(${BannerImage})`}}>
            <div className="headerContainer">
                <h1>Pizzeria</h1>
                <p>Pizza to Fit any Taste</p>
                <Link to='/menu'><button>Order Now</button></Link>
            </div>
        </div>
    )
}
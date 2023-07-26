import React from 'react'
import '../styles/About.css'
import MultiplePizza from '../assets/multiplePizzas.jpeg'
export function About(){
    return(
        <div className="about">
            <div className="aboutTop" style={{backgroundImage: `url(${MultiplePizza})` }}>
            </div>
            <div className="aboutBottom">
                <h1>Pizzeria</h1>
                <h2>WHO WE ARE.</h2>
                <p>
                    There’s nothing cookie-cutter about Pizza Hut. Not our pizzas. Not our people. And definitely not the way we live life. Around here, we don’t settle for anything less than food we’re proud to serve. And we don’t just clock in. Not when we can also become our best, make friends, and have fun while we’re at it. We’re the pizza company that lives life unboxed.
                    We’re not for people who want to blend in: pushing boundaries is part of our heritage. We have more than 16,000 restaurants and 350,000 team members in more than 100 countries. Whether it’s the original Stuffed Crust or putting a pizza in outer space, we never stop driving ourselves to deliver hot pizzas, fast every time – anywhere you want to enjoy it.</p>

                    <h2>WHAT WE’RE ABOUT.</h2>
                    <p>At Pizza Hut, we don’t just make pizza. We make people happy. Pizza Hut was built on the belief that pizza night should be special, and we carry that belief into everything we do. With more than 60 years of experience under our belts, we understand how to best serve our customers through tried and true service principles: We create food we’re proud to serve and deliver it fast, with a smile.</p>
            </div>
        </div>
    )
}
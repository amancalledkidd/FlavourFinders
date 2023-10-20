import React from 'react'
import { Link } from 'react-router-dom'
import "./home.css"
import "../generator/Generator"


import Navbar from '../Navbar';


function Home(){
    return (
        <>
            <div className = "first-button">
                <Navbar/>
                <h1 className = "main-title">Flavor Finders</h1>
                <h4 className = "slogan">Season the Day!</h4>
                <button className = "popular-recipes">Don't know where to start? Click here for popular recipes!</button>
            <div className = "second-button">
                <Link to="/generator">
                    <button className = "generate-recipes">Click here to generate recipes!</button>
                </Link>
            </div>
            </div>
        </>
    )
}
export default Home;
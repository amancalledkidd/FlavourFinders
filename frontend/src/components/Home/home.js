import React from 'react'
import { Link } from 'react-router-dom'
import "./home.css"
import "../generator/Generator"
import "../popular_recipes/PopularRecipes"



function Home(){
    return (
        <>
            {/* <Navbar currentPage="home" />  */}
            <h1 className = "main-title">Flavor Finders</h1>
            <h4 className = "slogan">Season the Day!</h4>
            <div className = "first-button">
                <Link to="/popular_recipes">
                    <button className = "popular-recipes">Don't know where to start? Click here for popular recipes!</button>
                </Link>
            </div>
            <div className = "second-button">
                <Link to="/generator">
                    <button className ="generate-recipes">Click here to generate recipes!</button>
                </Link>
            </div>
        </>
    )
}
export default Home;
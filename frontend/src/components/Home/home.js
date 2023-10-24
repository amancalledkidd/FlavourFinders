import React from 'react'
import { Link } from 'react-router-dom'
import "./home.css"
import "../generator/Generator"
import "../popular_recipes/PopularRecipes"
import logo from '../images/logo.png'
import Navbar from '../navbar/Navbar';


function Home(){
    return (
        <>
        <div className= "navbar">
            <Navbar/>
        </div>
            <div className = "border">
                <img className="logo" src={logo} alt="Robot chef" />
                <h2 className = "slogan">Season the Day!</h2>
            </div>
            <div className="intro_text">
                <p><strong>Introducing FlavorFinder: Your Culinary Inspiration, Powered by AI</strong>
                <br />FlavorFinder is your key to culinary creativity. 
                <br />Join us on a journey where AI redefines your relationship with food, one delectable idea at a time.</p>
            </div>
            <div className = "container">
                    <Link to="/generator">
                        <button className = "generate-recipes"><p className="recipe_text"><strong>Click here to generate recipes!</strong></p></button>
                    </Link>
                    <Link to="/popular_recipes">
                        <button className = "popular-recipes"><p className="recipe_text"><strong>Click here for popular recipes!</strong></p></button>
                    </Link>
            </div>
        </>
    )
}
export default Home;
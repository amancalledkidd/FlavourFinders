import React from 'react'
import { Link } from 'react-router-dom'
import "./home.css"
import "../generator/Generator"



function Home(){
    return (
        <>
            {/* <Navbar currentPage="home" />  */}
            <div className = "border">
                <h2 className = "slogan">Season the Day!</h2>
                <Link to="/generator">
                <button className = "generate-recipes"><p className="recipe_text">Click here to generate recipes!</p></button>
                </Link>
                <div className = "second-button">
                
                <Link to="/popular">
                    <button className = "popular-recipes"><p className="recipe_text">Don't know where to start?<br />Click here for popular recipes!</p></button>
                    </Link>
            </div>
            </div>
        </>
    )
}
export default Home;
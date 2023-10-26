import React, { useState } from "react";
import Recipe from "../recipe/recipe";
import "./recipeView.css"
import Navbar from "../navbar/Navbar";

const RecipeView = ({ navigate }) => {
    const [currentRecipe, setCurrentRecipe] = useState(window.localStorage.getItem("currentRecipe"))

    const resetCurrentRecipe = () => {
        window.localStorage.setItem("currentRecipe", "")
        navigate('/my_recipes')
    }

    return (
        <>
        <Navbar/>
        <Recipe recipe={currentRecipe}/>
        <br/>
        <div className="back-to-recipes-container">
            <button className="back-to-recipes-button" onClick={resetCurrentRecipe}>Go back to my recipes</button>
        </div>
        </>
    )
}

export default RecipeView
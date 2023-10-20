import React, { useState } from "react";
import Recipe from "../recipe/recipe";

const RecipeView = ({ navigate }) => {
    const [currentRecipe, setCurrentRecipe] = useState(window.localStorage.getItem("currentRecipe"))

    const resetCurrentRecipe = () => {
        window.localStorage.setItem("currentRecipe", "")
        navigate('/my_recipes')
    }

    return (
        <>
        <Recipe recipe={currentRecipe}/>
        <br/>
        <button onClick={resetCurrentRecipe}>Go back to my recipes</button>
        </>
    )
}

export default RecipeView
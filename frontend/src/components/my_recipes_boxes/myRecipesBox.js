import React from "react";
import "./myRecipesBox.css"

const MyRecipeBox = ({ recipe, handleDeleteRecipeSubmit }) => {
    function splitRecipeBox(recipeText) {
        let sections = recipeText.split("*");
        let recipeObj = {
            title: sections[1].slice(7),
            time: sections[3].slice(6),
            serves: sections[4].slice(7),
        };
        
        return recipeObj;
    }
    let recipeObj = splitRecipeBox(recipe.content);


    const handleDeleteEvent = () => {
        handleDeleteRecipeSubmit(recipe)
    }

    const handleChangeCurrentRecipe = () => {
        window.localStorage.setItem("currentRecipe", recipe.content)
    }

    return (
        <>
        <div className="recipe-box-container">
            <a className="recipe-link" href="/my_recipes/recipe_view" onClick={handleChangeCurrentRecipe}>
            <div className="recipe">
                <h1 className="recipe-title">{recipeObj.title}</h1>
                <p><span className="recipe-sub-head">Cooking Time: </span><span>{recipeObj.time}</span></p>
                <p><span className="recipe-sub-head">Serves: </span><span>{recipeObj.serves}</span></p>
            </div>
            </a>
            <div className="recipe-delete-container">
                <button className="recipe-delete-button" onClick={handleDeleteEvent}>Delete Recipe</button>
            </div>
        </div>

        
        </>
    )
}

//display title, cooking time and serving portions

export default MyRecipeBox;
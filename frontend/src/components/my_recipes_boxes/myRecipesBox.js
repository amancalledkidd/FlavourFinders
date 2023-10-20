import React from "react";

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
            <a href="/my_recipes/recipe_view" onClick={handleChangeCurrentRecipe}>
            <div className="recipe">
                <h1 className="recipe-title">{recipeObj.title}</h1>
                <p className="recipe-time">Cooking Time: {recipeObj.time}</p>
                <p className="recipe-serves">Serves: {recipeObj.serves}</p>
            </div>
            </a>
        </div>

        <div>
            <button onClick={handleDeleteEvent}>Delete Recipe</button>
        </div>
        </>
    )
}

//display title, cooking time and serving portions

export default MyRecipeBox;
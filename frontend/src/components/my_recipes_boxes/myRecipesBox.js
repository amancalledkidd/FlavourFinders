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

    return (
        <>
        <div className="recipe-box-container">
            <h1 className="recipe-box-title">{recipeObj.title}</h1>
            <p className="recipe-box-time">Cooking Time: {recipeObj.time}</p>
            <p className="recipe-box-serves">Serves: {recipeObj.serves}</p>
            <button onClick={handleDeleteEvent}>Delete Recipe</button>
        </div>
        </>
    )
}

//display title, cooking time and serving portions

export default MyRecipeBox;
import './recipe.css'
import React from 'react';

const Recipe = ({ recipe }) => {

    function splitRecipe(recipeText) {
        let sections = recipeText.split("*");
        let recipeObj = {
            title: sections[1].slice(7),
            intro: sections[2].slice(7),
            time: sections[3].slice(6),
            serves: sections[4].slice(7),
            calories: sections[5].slice(10),
            ingredients: sections[6].split("\n").slice(1),
            instructions: sections[7].split("\n").slice(1)
        };
        
        return recipeObj;
    }
    let recipeObj = splitRecipe(recipe);


    return (
        <div className="recipe-container">
            <div className='recipe-header'>
                <h1 className="recipe-title">{recipeObj.title}</h1>
                <p className="recipe-description">{recipeObj.intro}</p>
                <p className="recipe-time">
                    <span className='small-title'>Time: </span>
                    <span>{recipeObj.time}</span>
                </p>
                <p className="recipe-serves">
                    <span className='small-title'>Serves: </span> 
                    <span>{recipeObj.serves}</span>
                </p>
                <p className="recipe-calories">
                    <span className='small-title'>Calories: </span> 
                    <span>{recipeObj.calories}</span>
                </p>
            </div>
            <div className="recipe-ingredients">
                <p className='ingredients-title'>Ingredients: </p>
                {recipeObj.ingredients.map((ingredient, i) => (
                    <p key={i}>{ingredient}</p>
                ))}
            </div>
            <div className="recipe-instructions">
                <p className='instructions-title'>Instructions: </p>
                {recipeObj.instructions.map((instructions, i) => (
                    <p key={i}>{instructions}</p>
                ))}
            </div>
        </div>
    )
    }

    export default Recipe;
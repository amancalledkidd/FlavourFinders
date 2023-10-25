import React, { useState } from "react";
import "./generator.css";
import Navbar from "../navbar/Navbar";
import logo  from "../assets/FlavourFinderLogo.png"
import Recipe from "../recipe/recipe";
import Loader from "../loader/Loader";


const Generator = ({ navigate }) => {
    const [token, setToken] = useState(window.localStorage.getItem("token"))
    const [mealType, setMealType] = useState("")
    const [cuisine, setCuisine] = useState("")
    const [cookingTime, setCookingTime] = useState("")
    const [dietaryReq, setDietaryReq] = useState("")
    const [ingredients, setIngredients] = useState("")
    const [generatorRecipe, setGeneratorRecipe] = useState("")
    const [loading, setLoading] = useState(false)
    const [showSaveButton, setShowSaveButton] = useState(true)
    

    const handleMealTypeChange = (event) => {
        setMealType(event.target.value)
    }

    const handleCuisineChange = (event) => {
        setCuisine(event.target.value)
    }

    const handleCookingTimeChange = (event) => {
        setCookingTime(event.target.value)
    }

    const handleReqChange = (event) => {
        setDietaryReq(event.target.value)
    }

    const handleIngredientsChange = (event) => {
        setIngredients(event.target.value)
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        setShowSaveButton(true)
        setLoading(true)
        // change fetch url to new one 
        fetch('/generator', {
            method: "POST",
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({ prompt: `Can you suggest ${cuisine} ${mealType} dish that takes ${cookingTime}. It needs to be ${dietaryReq} and include ${ingredients}` })
        })
        .then(response => response.json())
        .then(data => {
            console.log(data.message)
            setGeneratorRecipe(data.message)
            setMealType('')
            setCookingTime('')
            setCuisine('')
            setIngredients('')
            setDietaryReq('')
            setLoading(false)
        })
    }

    const handleSaveRecipeSubmit = (e) => {
        e.preventDefault()
        //fetch to backend to save the recipe with user ID attached
        fetch('/recipes', {
            method: "POST",
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ content: generatorRecipe })
        })
        .then(response => response.json())
        .then(data => {
            console.log("Recipe has been successfully saved")
            console.log(data.token)
            console.log(data.message)
            setShowSaveButton(false)
        })
    }

    const handleNewRecipe = (e) => {
        e.preventDefault()
        setGeneratorRecipe('')
    }

    return (
        <>
        <Navbar/>
        <div className="generator-logo-container">
            <img src={logo} className="generator-logo" alt="logo"/> 
        </div>
        

        { (!loading && !generatorRecipe ) &&
        
        <div className="generator">
            <h1 className="generator-page-title"> Recipe Generator </h1>
            <form onSubmit={handleFormSubmit}>
                
                <h3 className="generator-field-title">Meal type</h3>
                <div className="dropdown">
                    <select className="dropdown" id="mealType" type="mealType" value={mealType} onChange={handleMealTypeChange}>
                        <option value="Breakfast">Breakfast</option>
                        <option value="Lunch">Lunch</option>
                        <option value="Dinner">Dinner</option>
                        <option value="Dessert">Dessert</option>
                    </select>
                </div>
                <br/>
                <br/>
                <h3 className="generator-field-title">Cuisine</h3>
                <div className="dropdown">
                    <select className="dropdown" id="cuisine" type="cuisine" value={cuisine} onChange={handleCuisineChange}>
                        <option value="Any">Any</option>
                        <option value="Chinese">Chinese</option>
                        <option value="Indian">Indian</option>
                        <option value="Italian">Italian</option>
                        <option value="Japanese">Japanese</option>
                        <option value="Mexican">Mexican</option>
                        <option value="Thai">Indian</option>
                        <option value="Greek">Greek</option>
                        <option value="French">French</option>
                        <option value="Spanish">Spanish</option>
                        <option value="Korean">Korean</option>
                        <option value="Mediterranean">Mediterannean</option>
                        <option value="Caribbean">Caribbean</option>
                        <option value="Turkish">Turkish</option>
                        <option value="Argentinean">Argentinean</option>
                        <option value="Indonesian">Indonesian</option>
                    </select>
                </div>
                <br/>
                <br/>
                <h3 className="generator-field-title">Cooking Time</h3>
                <div className="dropdown">
                    <select id="cookingTime" type="cookingTime" value={cookingTime} onChange={handleCookingTimeChange}>
                        <option value="Up to 30 minutes">15-30 minutes</option>
                        <option value="30-45 minutes">30-45 minutes</option>
                        <option value="60+ minutes">Over 1 hour</option>
                    </select>
                </div>
                <br/>
                <br/>
                <h3 className="generator-field-title">Dietary Requirements</h3>
                <div className="input">
                    <textarea placeholder="Please enter your dietary requirements" id="dietaryReq" type="dietaryReq" value={dietaryReq} onChange={handleReqChange} />
                </div>
                <br/>
                <br/>
                <h3 className="generator-field-title">Ingredients</h3>
                <div className="input">
                    <textarea placeholder="Please enter preferred ingredients" id="ingredients" type="ingredients" value={ingredients} onChange={handleIngredientsChange} />
                </div>
                <br/>
                <br/>
                <div className="generator-button-container">
                    <input id="submit "type="submit" value="Generate Recipe" />
                </div>
            </form>
        </div>
        }

        { loading && 
            <Loader />
        }

        { generatorRecipe && 
            <>
            <Recipe recipe={generatorRecipe} navigate={navigate} setShowSaveButton={setShowSaveButton}/>
            <div className="recipe-button-container">
                { showSaveButton &&
                <button id="recipe-button-save" className="recipe-button" onClick={handleSaveRecipeSubmit}>Save Recipe</button>
                }
                <button className="recipe-button" onClick={handleNewRecipe} >Generate New Recipe</button>
            </div>
            </>
        }
        </>
    )
}

export default Generator;

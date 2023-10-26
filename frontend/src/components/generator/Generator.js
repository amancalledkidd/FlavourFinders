import React, { useState } from "react";
import "./generator.css";
import Navbar from "../navbar/Navbar";
import logo  from "../assets/FlavourFinderLogo.png"
import Recipe from "../recipe/recipe";
import Loader from "../loader/Loader";


const Generator = ({ navigate }) => {
    const [token, setToken] = useState(window.localStorage.getItem("token"))
    const [mealType, setMealType] = useState("Breakfast")
    const [cuisine, setCuisine] = useState("Any")
    const [cookingTime, setCookingTime] = useState("")
    const [dietaryReq, setDietaryReq] = useState("")
    const [ingredients, setIngredients] = useState("")
    const [unitMeasurement, setUnitMeasurement] = useState("")
    const [generatorRecipe, setGeneratorRecipe] = useState("")
    const [loading, setLoading] = useState(false)
    const [showSaveButton, setShowSaveButton] = useState(true)
    

    const isRadioChecked = (value) => {
        return unitMeasurement === value
    }
    

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

    const handleUnitChange = (event) => {
        setUnitMeasurement(event.target.value)
        console.log(unitMeasurement)
    }

    const handleFormSubmit = (e) => {
        console.log(unitMeasurement)
        e.preventDefault()
        setShowSaveButton(true)
        setLoading(true)
        fetch('/generator', {
            method: "POST",
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({ prompt: `Can you suggest ${cuisine} ${mealType} dish that takes ${cookingTime}. It needs to be ${dietaryReq} and include ${ingredients}. Can you use the ${unitMeasurement} system` })
        })
        .then(response => response.json())
        .then(data => {
            console.log(data.message)
            setGeneratorRecipe(data.message)
            setMealType('Breakfast')
            setCookingTime('')
            setCuisine('Any')
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
            setToken(data.token)
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
            <form className="form-container" onSubmit={handleFormSubmit}>
                
                <h3 className="generator-field-title">Meal type</h3>
                <div className="select-dropdown">
                    <select className="select-box" id="mealType" type="mealType" value={mealType} onChange={handleMealTypeChange}>
                        <option value="Breakfast">Breakfast</option>
                        <option value="Lunch">Lunch</option>
                        <option value="Dinner">Dinner</option>
                        <option value="Dessert">Dessert</option>
                    </select>
                </div>
                
                <br/>
                <br/>
                <h3 className="generator-field-title">Cuisine</h3>
                <div className="select-dropdown">
                    <select id="cuisine" type="cuisine" value={cuisine} onChange={handleCuisineChange}>
                        <option value="Any">Any</option>
                        <option value="Chinese">Chinese</option>
                        <option value="Indian">Indian</option>
                        <option value="Philippine">Philippine</option>
                        <option value="Italian">Italian</option>
                        <option value="Japanese">Japanese</option>
                        <option value="Mexican">Mexican</option>
                        <option value="Ghanaian">Ghanaian</option>
                        <option value="Thai">Indian</option>
                        <option value="Libian">Libian</option>
                        <option value="Greek">Greek</option>
                        <option value="Vietnamese">Vietnamese</option>
                        <option value="Lebanese">Lebanese</option>
                        <option value="American">American</option>
                        <option value="British">British</option>
                        <option value="Spanish">Spanish</option>
                        <option value="Moroccan">Moroccan</option>
                        <option value="Turkish">Turkish</option>
                        <option value="French">French</option>
                        <option value="Libian">Mexican</option>
                        <option value="Spanish">Spanish</option>
                        <option value="Korean">Korean</option>
                        <option value="Mediterranean">Mediterannean</option>
                        <option value="Martian">Martian</option>
                        <option value="Caribbean">Caribbean</option>
                        <option value="Turkish">Turkish</option>
                        <option value="Argentinean">Argentinean</option>
                        <option value="Indonesian">Indonesian</option>
                        <option value="Brazilian">Brazilian</option>
                        <option value="Portuguese">Portuguese</option>
                        <option value="Cuban">Cuban</option>
                        <option value="Ethiopian">Ethiopian</option>
                        <option value="Nigerian">Nigerian</option>
                        <option value="Polish">Polish</option>
                        <option value="Russian">Russian</option>
                        <option value="Swedish">Swedish</option>
                        <option value="German">German</option>
                        <option value="Irish">Irish</option>
                        <option value="Austrian">Austrian</option>
                        <option value="Belgian">Belgian</option>
                        <option value="Danish">Danish</option>
                        <option value="Dutch">Dutch</option>
                        <option value="Finnish">Finnish</option>
                    </select>
                </div>
                <br/>
                <br/>
                <h3 className="generator-field-title">Cooking Time</h3>
                <div className="select-dropdown">
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
                    <textarea placeholder="Please enter your dietary requirements e.g Vegan, Nut-Free" id="dietaryReq" type="dietaryReq" value={dietaryReq} onChange={handleReqChange} />
                </div>
                <br/>
                <br/>
                <h3 className="generator-field-title">Ingredients</h3>
                <div className="input">
                    <textarea placeholder="Please enter preferred ingredients e.g Eggs, Rice, Apples etc" id="ingredients" type="ingredients" value={ingredients} onChange={handleIngredientsChange} />
                </div>
                <br/>
                <br/>
                <h3 className="generator-field-title">Measurement</h3>
                <div class="radio-main-container">
                    <div class="radio-buttons">
                        <label class="custom-radio">
                        <input type="radio" name="radio" checked={isRadioChecked("Metric")} value="Metric" onChange={handleUnitChange}/>
                        <div class="radio-btn">
                            <i class="box-dot"></i>
                            <div class="button-name">
                            <h3>Metric</h3>
                            </div>
                        </div>
                        </label>
                        <label class="custom-radio">
                        <input type="radio" name="radio" checked={isRadioChecked("Imperial")} value="Imperial" onChange={handleUnitChange} />
                        <span class="radio-btn">
                            <i class="box-dot"></i>
                            <div class="button-name">
                            <h3>Imperial</h3>
                            </div>
                        </span>
                        </label>
                    </div>
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

                { (showSaveButton && token) &&
                <button id="recipe-button-save" className="recipe-button" onClick={handleSaveRecipeSubmit}>Save Recipe</button>
                }

                <button className="recipe-button" onClick={handleNewRecipe} >Generate New Recipe</button>
                
            </div>
            { !token && 
                <p className="join-us-text">For extra features, please sign in or create an account!</p>
            }
            </>
        }
        </>
    )
}

export default Generator;

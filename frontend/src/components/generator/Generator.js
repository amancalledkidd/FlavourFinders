import React, { useState } from "react";
import Recipe from "../recipe/recipe";

const Generator = ({ navigate }) => {
    const [formInput, setformInput] = useState("")
    const [generatorRecipe, setGeneratorRecipe] = useState("")

    const handleFormChange = (event) => {
        setformInput(event.target.value)
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        // change fetch url to new one 
        fetch('/generator', {
            method: "POST",
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({ prompt: formInput })
        })
        .then(response => response.json())
        .then(data => {
            console.log(data.message)
            setGeneratorRecipe(data.message)
            setformInput('')
        })
    }


    return (
        <>
        <h1> Logo </h1>

        <form onSubmit={handleFormSubmit}>
            <h2> Recipe Generator </h2>
            <input placeholder="Please enter the ingredients you would like to use to generate the recipe" id="ingredients" type="ingredients" value={formInput} onChange={handleFormChange} />
            <br/>
            <input id="submit "type="submit" value="Generate Recipe" />
        </form>

        { generatorRecipe && 
            <Recipe recipe={generatorRecipe}/>
        }
        </>
    )
}

export default Generator;
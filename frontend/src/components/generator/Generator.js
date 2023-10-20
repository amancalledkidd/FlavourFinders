import React, { useState } from "react";
import Navbar from "../Navbar";

const Generator = () => {
    const [formInput, setformInput] = useState("")

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
        .then(response => {
            console.log(response)
            setformInput('')
        })
    }


    return (
        <>
        <Navbar/>
        <h1> Logo </h1>

        <form onSubmit={handleFormSubmit}>
            <h2> Recipe Generator </h2>
            <input placeholder="Please enter the ingredients you would like to use to generate the recipe" id="ingredients" type="ingredients" value={formInput} onChange={handleFormChange} />
            <br/>
            <input id="submit "type="submit" value="Generate Recipe" />
        </form>
        </>
    )
}

export default Generator;
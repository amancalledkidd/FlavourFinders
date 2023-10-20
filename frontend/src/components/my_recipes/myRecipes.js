import React, { useEffect, useState } from "react";
import MyRecipeBox from "../my_recipes_boxes/myRecipesBox";

const MyRecipes = () => {
    const [recipeList, setRecipeList] = useState([]);
    const [token, setToken] = useState(window.localStorage.getItem("token"))

    useEffect(() => {
        if(token) {
            fetchRecipes()
        }
    }, [])

    const fetchRecipes = () => {
        if(token) {
            fetch("/recipes", {
            headers: {
            'Authorization': `Bearer ${token}`
            }
        })
            .then(response => response.json())
            .then(async data => {
                window.localStorage.setItem("token", data.token)
                setToken(window.localStorage.getItem("token"))
                setRecipeList(data.recipes)
            })
        }
    }

    const handleDeleteRecipeSubmit = (recipeObject) => {
        fetch('/recipes', {
            method: "DELETE",
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ recipe: recipeObject })
        })
        .then(response => response.json())
        .then(data => {
            fetchRecipes()
            console.log("Recipe has been successfully deleted")
            console.log(data.token)
            console.log(data.message)
            setToken(data.token)
        })
    }

    return (
        <>
        {recipeList.map(
            (recipe) => ( <MyRecipeBox recipe={ recipe } key={ recipe._id } handleDeleteRecipeSubmit={handleDeleteRecipeSubmit}/> )
        )}

        <a href="/generator">Recipe Generator</a>
        </>
    )

}

export default MyRecipes;
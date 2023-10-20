import './recipe.css'

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
            <h1 className="recipe-title">{recipeObj.title}</h1>
            <p className="recipe-description">{recipeObj.intro}</p>
            <p className="recipe-time">Time: {recipeObj.time}</p>
            <p className="recipe-serves">Serves: {recipeObj.serves}</p>
            <p className="recipe-calories">Calories: {recipeObj.calories}</p>
            <div className="recipe-ingredients">Ingredients:
                {recipeObj.ingredients.map((ingredient, i) => (
                    <p key={i}>{ingredient}</p>
                ))}
            </div>
            <div className="recipe-instructions">Instructions:
                {recipeObj.instructions.map((instructions, i) => (
                    <p key={i}>{instructions}</p>
                ))}
            </div>
        </div>
    )
    }

    export default Recipe;
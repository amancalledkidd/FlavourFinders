import './recipe.css'

const Recipe = ({ title, intro, time, serves, ingredients, instructions }) => {

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
    let testRecipeText = "*Title: Vegan Roasted Potato Recipe\n\n*Intro: This Vegan Roasted Potato recipe is a delightful and flavorful dish that is suitable for vegans and everyone who enjoys potatoes. It features crispy roasted potatoes seasoned with herbs and spices for a satisfying and hearty side dish or main course.\n\n*Time: 40 minutes\n\n*Serves: 4\n\n*Calories: 200 per serving\n\n*Ingredients:\n- 2 lbs baby potatoes, halved\n- 2 tbsp olive oil\n- 2 cloves garlic, minced\n- 1 tsp dried rosemary\n- 1 tsp dried thyme\n- Salt and black pepper, to taste\n- Fresh parsley, for garnish\n\n*Instructions:\n1. Preheat the oven to 425°F (220°C).\n2. In a large bowl, combine the halved baby potatoes, olive oil, minced garlic, dried rosemary, dried thyme, salt, and black pepper. Toss everything together until the potatoes are evenly coated.\n3. Transfer the seasoned potatoes to a baking sheet or roasting pan, spreading them out in a single layer.\n4. Roast the potatoes in the preheated oven for about 30-35 minutes, or until they are golden and crispy, flipping them halfway through cooking.\n5. Once the potatoes are roasted to perfection, remove them from the oven and let them cool for a few minutes.\n6. Sprinkle the roasted potatoes with fresh parsley for garnish and extra flavor.\n7. Serve the vegan roasted potatoes as a side dish or a main course alongside your favorite vegan dipping sauce or salad. Enjoy!"
    let testRecipeObj = splitRecipe(testRecipeText);

    return (
        <div className="recipe-container">
            <h1 className="recipe-title">{testRecipeObj.title}</h1>
            <p className="recipe-description">{testRecipeObj.intro}</p>
            <p className="recipe-time">Time: {testRecipeObj.time}</p>
            <p className="recipe-serves">Serves: {testRecipeObj.serves}</p>
            <p className="recipe-calories">Calories: {testRecipeObj.calories}</p>
            <div className="recipe-ingredients">Ingredients:
                {testRecipeObj.ingredients.map((ingredient, i) => (
                    <p key={i}>{ingredient}</p>
                ))}
            </div>
            <div className="recipe-instructions">Instructions:
                {testRecipeObj.instructions.map((instructions, i) => (
                    <p key={i}>{instructions}</p>
                ))}
            </div>
        </div>
    )
    }

    export default Recipe;
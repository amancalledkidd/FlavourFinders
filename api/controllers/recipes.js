const TokenGenerator = require("../lib/token_generator")
const Recipe = require("../models/recipe")

const RecipesControllers = {
    Search: (req, res) => {
        Recipe.find({ user_id: req.user_id })
        .then(recipes => {
            const token = TokenGenerator.jsonwebtoken(req.user_id)
            res.status(201).json({ recipes: recipes, token: token })
        })
    },
    Create: (req, res) => {
        console.log("routed correctly")
        const recipe = new Recipe({
            user_id: req.user_id,
            content: req.body.content
        })
        recipe.save((err) => {
            if(err) {
                throw err
            }

            const token = TokenGenerator.jsonwebtoken(req.user_id)
            res.status(201).json({ message: "Recipe saved on the database", token: token })
        })
    },
    Delete: (req, res) => {
        console.log('Delete routed correctly')
        const filter = req.body.recipe._id
        console.log(filter)
        Recipe.deleteOne({_id: filter})
        .then(recipe => {
            const token = TokenGenerator.jsonwebtoken(req.user_id)
            res.status(201).json({ message: 'Recipe deleted from database', token: token })
        })
    }
}

module.exports = RecipesControllers
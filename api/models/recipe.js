const { ObjectID } = require("mongodb")
const mongoose = require("mongoose")

const RecipeSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    content: String
})

const Recipe = mongoose.model("Recipe", RecipeSchema);

module.exports = Recipe;
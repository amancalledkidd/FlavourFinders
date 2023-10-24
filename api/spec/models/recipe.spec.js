const mongoose = require('mongoose');

require('../mongodb_helper');
const Recipe = require('../../models/recipe');
const { ObjectId } = require('mongodb');

describe("Recipe model", () => {
    beforeEach((done) => {
        mongoose.connection.collections.recipes.drop(() => {
            done();
        });
    });

    it("It has content as fake AI response", () => {
        const recipe = new Recipe({
            user_id: ObjectId('6537dbf7dea6a7aad4830ae5'),
            content: 'This is test content'
        });

        expect(recipe.content).toEqual('This is test content');
    });

    it("It has user id", () => {
        const recipe = new Recipe({
            user_id: ObjectId('6537dbf7dea6a7aad4830ae5'),
            content: 'This is test content'
        });

        expect(recipe.user_id).toEqual(ObjectId('6537dbf7dea6a7aad4830ae5'));
    });

    it("It can list all recipes", (done) => {
        Recipe.find((err, recipes) => {
            expect(err).toBeNull();
            expect(recipes).toEqual([]);
            done();
        });
    });

    it("It can save a recipe", (done) => {
        const recipe = new Recipe({
            user_id: ObjectId('6537dbf7dea6a7aad4830ae5'),
            content: 'This is test content' 
        });

        recipe.save((err) => {
            expect(err).toBeNull();

            Recipe.find((err, recipes) => {
                expect(err).toBeNull();
                expect(recipes[0]).toMatchObject({
                    user_id: ObjectId('6537dbf7dea6a7aad4830ae5'),
                    content: 'This is test content' 
                });
                done();
            })
        });
    });
})
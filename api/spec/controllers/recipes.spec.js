const app = require('../../app');
const request = require('supertest');
require('../mongodb_helper');
const Recipe = require('../../models/recipe');
const { ObjectId } = require('mongodb');
const JWT = require('jsonwebtoken');
const User = require('../../models/user');
const secret = process.env.JWT_SECRET;

describe("/recipes", () => {
    beforeAll(async () => {
        const user = new User({ name: 'Test user', email: 'test@email.com', password: '12345'});
        await user.save();

        token = JWT.sign({
            user_id: user.id,
            iat: Math.floor(Date.now()/1000) - (5 * 60),
            exp: Math.floor(Date.now()/1000) + (10 * 60)
        }, secret)
    });

    beforeEach(async () => {
        await Recipe.deleteMany({});
    })

    afterAll(async () => {
        await Recipe.deleteMany({});
        await User.deleteMany({});
    })

    describe("POST, when a user ID and recipe content is provided", () => {
        test('Response code is 201', async() => {
            let response = await request(app)
            .post('/recipes')
            .set('Authorization', `Bearer ${token}`)
            .send({
                user_id: ObjectId('6537dbf7dea6a7aad4830ae5'),
                content: "This is test content"
            });
            expect(response.statusCode).toBe(201);
        });

        test('New recipe is saved', async() => {
            await request(app)
            .post('/recipes')
            .set('Authorization', `Bearer ${token}`)
            .send({
                user_id: ObjectId('6537dbf7dea6a7aad4830ae5'),
                content: "This is test content"
            }); 
            let recipes = await Recipe.find();
            expect(recipes.length).toEqual(1)
        });
    })

    describe("DELETE, when an recipe object ID is provided", () => {
        test('Response code is 201', async() => {
            let recipe = new Recipe({
                user_id: ObjectId('6537dbf7dea6a7aad4830ae5'),
                content: "This is test content"
            });
            recipe.save()
            let response = await request(app)
            .delete('/recipes')
            .set('Authorization', `Bearer ${token}`)
            .send({
                recipe: recipe
            });
            expect(response.statusCode).toBe(201)
        });

        test('Recipe is deleted', async() => {
            let recipe = new Recipe({
                user_id: ObjectId('6537dbf7dea6a7aad4830ae5'),
                content: "This is test content"
            });
            recipe.save()
            let recipes = await Recipe.find();
            expect(recipes.length).toEqual(0)
        });
    });

    describe("GET, recipes are fetched from database", () => {
        test('Response code is 200', async() => {
            let recipe = new Recipe({
                user_id: ObjectId('6537dbf7dea6a7aad4830ae5'),
                content: "This is test content"
            });
            recipe.save()
            let response = await request(app)
            .get('/recipes')
            .set('Authorization', `Bearer ${token}`)
            expect(response.statusCode).toBe(200)
        });
    })
})

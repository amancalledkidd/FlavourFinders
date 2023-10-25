const app = require('../../app');
const request = require('supertest');
require('../mongodb_helper');
const { ObjectId } = require('mongodb');
const GeneratorController = require('../../controllers/generator')
require('jest-fetch-mock').enableMocks()

//We need to mock the api call to OpenAI, test for when there is no fake api key attached when sending
//to /generator route and when there is one

describe("Generator Controller Mocking API Calls", () => {
    it('Sends a message and gets a response', () => {

        const message = {
            body: {
            prompt: "Test prompt from frontend"
        }}

        const mockResponse = {
            status: function(code) {
                expect(code).toEqual(200)
                return this
            },
            send: function(messageObject) {
                expect(messageObject.message).toEqual("*Title: Vegan Indian Chana Masala")
            }
        }

        fetch.mockResponseOnce(JSON.stringify({
            "choices": [
            {
                "finish_reason": "stop",
                "index": 0,
                "message": {
                    "content": "*Title: Vegan Indian Chana Masala",
                    "role": "assistant"
                }
            }
            ],
            "created": 1677664795,
            "id": "chatcmpl-7QyqpwdfhqwajicIEznoc6Q47XAyW",
            "model": "gpt-3.5-turbo-0613",
            "object": "chat.completion",
            "usage": {
                "completion_tokens": 17,
                "prompt_tokens": 57,
                "total_tokens": 74
            }
        }
        ))

        return GeneratorController.Create(message, mockResponse)
    }) 
})

// body: JSON.stringify({
//     "model": "gpt-3.5-turbo",
//     "messages": [{
//         "role": "system",
//         "content": "You are a cooking website. When you respond can you format the layout *Title,  *Intro, *Time, *Serves,  *Calories  *Ingredients, *Instructions (Please keep the '*' characters before each section when responding). \n\n"
//         },   
//         { "role": "user", "content": `${req.body.prompt}`}
//         ],
//     "temperature": 0.83,
//     "max_tokens": 750,
//     "top_p": 1,
//     "frequency_penalty": 0,
//     "presence_penalty": 0
// })
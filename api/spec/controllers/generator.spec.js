const app = require('../../app');
const request = require('supertest');
require('../mongodb_helper');
const { ObjectId } = require('mongodb');

//We need to mock the api call to OpenAI, test for when there is no fake api key attached when sending
//to /generator route and when there is one


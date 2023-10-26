# FlavourFinder
Welcome to our group's repo! 👋
This a final group project created during Makers Bootcamp.


# 📌 What is FlavourFinder?
Introducing FlavourFinder: Your Culinary Inspiration, Powered by AI

Tired of the same old recipes and culinary routines? Enter FlavourFinder, your passport to a world of exciting and delicious food ideas, all crafted with the help of AI innovation. Say goodbye to mealtime monotony and let our AI-driven web app infuse your kitchen with fresh flavors and inspiration. From quick weeknight meals to gourmet delights, FlavorFinder is your key to culinary creativity. Join us on a journey where AI redefines your relationship with food, one delectable idea at a time. 


## 🤝 Our Team
* 👨‍💻 **[Alex Wilson](https://github.com/APWilson97)**
* 👩‍💻 **[Janna Limpin](https://github.com/dr3amcoder)**
* 👩‍💻 **[Judith Baidoo](https://github.com/Judithbaidoo)**
* 👨‍💻 **[Khalifa Fadel](https://github.com/kmf0208)**
* 👨‍💻 **[Kumani Kidd](https://github.com/amancalledkidd)**
* 👩‍💻 **[Lily Burton](https://github.com/LilyBurton)**


## 🚀 Tech stack
Frontend:
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)

Backend
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)


## 📝 Tools used for planning
🗃 Documentation
https://github.com/amancalledkidd/FlavourFinders/blob/main/DOCUMENTATION.md

🎨 Miro: Tool used to create a blueprint for our project
https://miro.com/app/board/uXjVNaVz6L4=/

🎫 Trello: Tool used to manage our tickets
https://trello.com/b/HSR93dPz/tickets


## 🌟 Quickstart

### Step 1: Install Node.js

1. Install Node Version Manager (NVM)
   ```
   brew install nvm
   ```
   Then follow the instructions to update your `~/.bash_profile`.
2. Open a new terminal
3. Install the latest version of [Node.js](https://nodejs.org/en/), currently `18.1.0`.
   ```
   nvm install 18
   ```

### Step 2: Set up your project

1. Fork this repository
2. Rename your fork to `FlavourFinders-<team name>`
3. Clone your fork to your local machine
4. Install Node.js dependencies for both the `frontend` and `api` directories.
   ```
   ; cd api
   ; npm install
   ; npm dotenv
   ; cd ../frontend
   ; npm install
   ; npm install bootstrap
   ```
In addition, you will need to create a ".env" file in your api directory.
This file will serve as your secure container for your API Key.
Side Note: You will need to create your own API Key via `https://openai.com/` so that you can use this project.

Your ".env" file should look like the below:
   ```
   ; const env = {
   ;   OPEN_API_KEY = 'paste your API Key here'
   ; }
   ```
   ❗️ Note ❗️
   > You might get warning messages about the installed dependencies at this point. You can ignore them, as long as the installation process doesn't fail. 

5. Install an ESLint plugin for your editor. For example: [`linter-eslint`](https://github.com/AtomLinter/linter-eslint) for Atom.
6. Install MongoDB
   ```
   brew tap mongodb/brew
   brew install mongodb-community@5.0
   ```
   ❗️ Note ❗️
   If you see a message that says `If you need to have mongodb-community@5.0 first in your PATH, run:`, follow the instruction. Restart your terminal after this.
7. Start MongoDB
   ```
   brew services start mongodb-community@5.0
   ```

### Step 3: How to run the server and use the app (as a human)

1. Open a terminal, navigate to your `api` directory and start your server by using the below code:

   ```
   ; cd api
   ; JWT_SECRET=FlavourFinder npm start
   ```

   ❗️ Note ❗️
   The below is an environment variable used for the JWT secret.
   "JWT_SECRET=FlavourFinder npm start"
   
2. Open another terminal, navigate to your `frontend` directory and start your frontend application by using the below code:

  ```
  ; cd frontend
  ; npm start
  ```

You should now be automatically re-directed to your web browser that will display the homepage of our webapp:
`http://localhost:3000/`

In the homepage, the user can navigate the website without the need to sign-in or sign-up.
However, should the user wishes to save a recipe, they will need to create an account to do so.
Using the navbar at the top of the page, the user can click either the:
* sign up button `http://localhost:3000/signup` or
* login button `http://localhost:3000/login`


### How to run automated tests

The automated tests run by sending actual HTTP requests to the API. Therefore, before anything, you'll need to start the backend server in test mode (so that it connects to the test DB).

**Note the use of an environment variable for the JWT secret**

```bash
# Make sure you're in the api directory
; cd api

; JWT_SECRET=FlavourFinder npm run start:test
```

You should leave this running in a terminal.

Then, you can either run tests for the backend or the frontend following the steps below. 

#### Running tests for the backend

Run the tests in a new terminal session:

```bash
# Make sure you're in the api directory
; cd api

; JWT_SECRET=FlavourFinder npm run test
```

## MongoDB Connection Errors?

Some people occasionally experience MongoDB connection errors when running the tests or trying to use the application. Here are some tips which might help resolve such issues.

- Check that MongoDB is installed using `mongo --version`
- Check that it's running using `brew services list`

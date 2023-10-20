import './App.css';
import LoginForm from '../auth/LoginForm'
import SignUpForm from '../user/SignUpForm'
import Generator from '../generator/Generator'
import PopularRecipes from '../popular_recipes/PopularRecipes'
import Home from '../Home/home';
import React, { useState } from 'react';
import Feed from '../feed/Feed'
import {
  useNavigate,
  Routes,
  Route,
} from "react-router-dom";
import MyRecipes from '../my_recipes/myRecipes';
import RecipeView from '../recipe_view/recipeView';


const App = () => {
    return (
        <Routes>
          <Route path='/recipe'  element={<Feed navigate={ useNavigate() }/>}/>
          <Route path='/login'  element={<LoginForm  navigate={ useNavigate() }/>}/>
          <Route path='/signup' element={<SignUpForm navigate={ useNavigate() }/>}/>
          <Route path='/generator' element={<Generator navigate={ useNavigate() }/>}/>
          <Route path='/popular_recipes' element={<PopularRecipes navigate={ useNavigate() }/>}/>
          <Route path='/my_recipes' element={<MyRecipes navigate={ useNavigate() }/>}/>
          <Route path='/my_recipes/recipe_view' element={<RecipeView navigate={ useNavigate() }/>}/>
          <Route path='/' element={<Home navigate={ useNavigate() }/>}/>
        </Routes>
    );
}

export default App;

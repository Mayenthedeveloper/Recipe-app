import { Children, useEffect } from "react";
import { createContext } from "vm";
import React, { useState, useEffect, createContext } from "react";

export const RecipesContext = createContext();

export const RecipeState = ({ children }) => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [firstRecipe, setFirstRecipe] = useState(0);
  const [lastRecipe, setLastRecipe] = useState(9);
  const [hidden, setHidden] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const APP_ID = "67543065";
  const APP_KEY = "4b0cf533bc41e0745def7ff916b2fd2b";
  const FIRST_REQ = `https://cors-anywhere.herokuapp.com/https://api.edaman.com/search?q=pizza&&app_id=${APP_ID}&app_key=${APP_KEY}&from=0$to=9`;
  const URL = `https://cors-anywhere.herokuapp.com/https://api.edaman.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}&from=${firstRecipe}&to=${lastRecipe}`;

  return (
    <RecipesContext.Provider value={{}}>{children}</RecipesContext.Provider>
  );
};

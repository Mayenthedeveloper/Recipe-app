import { Children, useEffect } from "react";
import { createContext } from "vm";
import React, { useState, useEffect, createContext } from "react";

export const RecipesContext = createContext();

export const RecipeState = ({ children }) => {
  return <RecipesContext.Provider>{children}</RecipesContext.Provider>;
};

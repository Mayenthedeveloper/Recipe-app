import React, { useContext } from "react";
import { RecipesContext } from "../context/RecipesContext";
import { Link } from "react-router-dom";

const Recipes = () => {
  const { recipes, error, loading } = useContext(RecipesContext);
  return (
    <div>
      <>
        {error && <h1>Error...</h1>}
        {recipes &&
          !error &&
          loading &&
          recipes.map((recipe, index) => (
            <div key={index} className="recipe">
              <a
                href={recipe.recipe.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div
                  style={{
                    background: `url(${recipe.recipe.image}) no-repeat center/cover`,
                  }}
                  className="recipesBg"
                ></div>
              </a>
              <div className="recipeInfo">
                <p>{recipe.recipe.label}</p>
                <p>{Math.floor(recipe.recipe.calories)} calories</p>
                <Link to="/">View More</Link>
              </div>
            </div>
          ))}
      </>
    </div>
  );
};

export default Recipes;

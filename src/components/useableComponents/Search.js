import { useContext } from "react";
import React, { useContext } from "react";
import { RecipesContext } from "../../context/RecipesContext";

function Search() {
  return (
    <form>
      <div className="formContainer">
        <input type="text" />
        <label>Recipe/Ingredient</label>
      </div>
    </form>
  );
}

export default Search;

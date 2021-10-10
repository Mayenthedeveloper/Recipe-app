import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/useableComponents/Nav";
import React from "react";
import { RecipesState } from "./context/RecipesContext";
import Hero from "./components/useableComponents/Hero";

function App() {
  return (
    <RecipesState>
      <Router>
        <Nav />
        <Route exact path="/" component={Hero} />
      </Router>
    </RecipesState>
  );
}

export default App;

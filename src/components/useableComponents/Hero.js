import { useContext } from "react";
// import React, { useContext } from "react";
import { RecipesContext } from "../../context/RecipesContext";
import Container from "./Container";
import Loader from "./Loader";

export default function Hero() {
  return (
    <section className="hero">
      <Container></Container>
    </section>
  );
}

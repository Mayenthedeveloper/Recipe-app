import { useContext } from "react";
import { RecipesContext } from "../../context/RecipesContext";
import Container from "./Container";
import Loader from "./Loader";
import Search from "./Search";
import Recipes from "../Recipes";

export default function Hero() {
  const { loading } = useContext(RecipesContext);
  return (
    <section className="hero">
      <Container>
        <Search />
      </Container>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Container>
            <Recipes />
          </Container>
        </>
      )}
    </section>
  );
}

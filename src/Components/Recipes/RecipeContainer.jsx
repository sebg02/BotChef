import { useState } from "react";
import { generateRecipeHF } from "../../../ai";
import { Recipe } from "./Recipe";

export const RecipeContainer = ({
  listOfIngredients,
  deleteAllIngredients,
}) => {
  const [recipe, setRecipe] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const cleanIngAndRecipe = () => {
    setRecipe("");
    deleteAllIngredients();
    setError("");
  };

  const handleRecipe = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await generateRecipeHF(listOfIngredients);
      setRecipe(response);
    } catch (err) {
      setError(err.message || "Error desconocido, intenta nuevamente.");
    } finally {
      setLoading(false);
    }
  };

  if (listOfIngredients.length > 0 && listOfIngredients.length <= 2) {
    return (
      <p className="alert alert-info text-center">
        Agrega por lo menos 3 ingredientes para generar una receta
      </p>
    );
  }
  if (listOfIngredients.length >= 3) {
    return (
      <>
        {recipe ? (
          <button
            className="btn btn-outline-dark mt-3 mb-3"
            onClick={cleanIngAndRecipe}
          >
            Nueva receta
          </button>
        ) : (
          <form onSubmit={handleRecipe} className="mt-3 mb-3">
            <button className="btn btn-primary mt-5">
              {loading ? "Cargando..." : "Crear Receta"}
            </button>
          </form>
        )}
        {error && <p>Error: {error}</p>}
        {recipe && <Recipe recipe={recipe}></Recipe>}
      </>
    );
  }

  return null;
};

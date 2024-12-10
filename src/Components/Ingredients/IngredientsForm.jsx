import { useState } from "react";

export const IngredientsForm = ({ onAddIngredient }) => {
  const sendIngredient = (formData) => {
    const ingredientInput = formData.get("ingredientInput");
    if (ingredientInput.trim() !== "") {
      let ingredient = ingredientInput.trim();
      ingredient = ingredient.toLowerCase();
      ingredient = ingredient[0].toUpperCase() + ingredient.slice(1);
      onAddIngredient(ingredient);
    }
  };

  return (
    <>
      <form action={sendIngredient} className="form-inline mt-5">
        <label htmlFor="ingredientInput" className="mr-2">
          Introduce un ingrediente:
        </label>
        <div className="input-group mt-2">
          <input
            type="text"
            name="ingredientInput"
            placeholder="Ej. Arroz"
            className="form-control mr-2"
          />
          <button className="btn btn-dark">
            Agregar <i class="bi bi-plus-circle"></i>
          </button>
        </div>
      </form>
    </>
  );
};

import { useState } from "react";

export const IngredientsForm = ({ onAddIngredient }) => {
  const [ingredientInput, setIngredientInput] = useState("");

  const handleIngInput = (e) => {
    setIngredientInput(e.target.value);
  };

  const sendIngredient = (e) => {
    e.preventDefault();

    if (ingredientInput.trim() !== "") {
      let ingredient = ingredientInput.trim();
      ingredient = ingredient.toLowerCase();
      ingredient = ingredient[0].toUpperCase() + ingredient.slice(1);
      onAddIngredient(ingredient);
      setIngredientInput("");
    }
  };

  return (
    <>
      <form action="" className="form-inline">
        <label htmlFor="ingredientInput" className="mr-2">
          Introduce un ingrediente:
        </label>
        <div className="input-group">
          <input
            value={ingredientInput}
            onChange={handleIngInput}
            type="text"
            id="ingredientInput"
            placeholder="Ej. Arroz"
            className="form-control mr-2"
          />
          <button onClick={sendIngredient} className="btn btn-dark">
            Agregar <i class="bi bi-plus-circle"></i>
          </button>
        </div>
      </form>
    </>
  );
};

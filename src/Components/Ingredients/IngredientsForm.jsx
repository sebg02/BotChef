// import { useState } from "react";

// export const IngredientsForm = ({ onAddIngredient }) => {
//   const sendIngredient = (e, formData) => {
//     e.preventDefault();
//     const ingredientInput = formData.get("ingredientInput");
//     if (ingredientInput.trim() !== "") {
//       let ingredient = ingredientInput.trim();
//       ingredient = ingredient.toLowerCase();
//       ingredient = ingredient[0].toUpperCase() + ingredient.slice(1);
//       onAddIngredient(ingredient);
//     }
//   };

//   return (
//     <>
//       <form onSubmit={sendIngredient} className="form-inline mt-5">
//         <label htmlFor="ingredientInput" className="mr-2">
//           Introduce un ingrediente:
//         </label>
//         <div className="input-group mt-2">
//           <input
//             type="text"
//             name="ingredientInput"
//             placeholder="Ej. Arroz"
//             className="form-control mr-2"
//           />
//           <button className="btn btn-dark">
//             Agregar <i class="bi bi-plus-circle"></i>
//           </button>
//         </div>
//       </form>
//     </>
//   );
// };

import { useState } from "react";

export const IngredientsForm = ({ onAddIngredient }) => {
  const [ingredientInput, setIngredientInput] = useState("");

  const sendIngredient = (e) => {
    e.preventDefault();
    if (ingredientInput.trim() !== "") {
      let ingredient = ingredientInput.trim();
      ingredient = ingredient.toLowerCase();
      ingredient = ingredient[0].toUpperCase() + ingredient.slice(1);
      onAddIngredient(ingredient);
      setIngredientInput(""); // Limpiar el campo después de agregar el ingrediente
    }
  };

  return (
    <>
      <form onSubmit={sendIngredient} className="form-inline mt-5">
        <label htmlFor="ingredientInput" className="mr-2">
          Introduce un ingrediente:
        </label>
        <div className="input-group mt-2">
          <input
            type="text"
            id="ingredientInput"
            name="ingredientInput"
            value={ingredientInput}
            onChange={(e) => setIngredientInput(e.target.value)} // Controlar el valor del input
            placeholder="Ej. Arroz"
            className="form-control mr-2"
          />
          <button type="submit" className="btn btn-dark">
            Agregar <i className="bi bi-plus-circle"></i>
          </button>
        </div>
      </form>
    </>
  );
};

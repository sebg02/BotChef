import { useState } from "react";
import { IngredientsForm } from "./IngredientsForm";
import { IngredientsList } from "./IngredientsList";

export const IngredientsContainer = () => {
  const [ingredients, setIngredients] = useState([]);

  const addIngredient = (ingredient) => {
    setIngredients([...ingredients, ingredient]);
  };

  const onAddIngredient = (val) => {
    addIngredient(val);
  };

  const deleteIngredient = (ingredient) => {
    let newList = ingredients.filter((ing) => ing !== ingredient);
    setIngredients(newList);
    console.log(ingredient);
  };

  const onDeleteIngredient = (val) => {
    deleteIngredient(val);
  };

  return (
    <>
      <IngredientsForm onAddIngredient={onAddIngredient}></IngredientsForm>
      <IngredientsList
        ingredients={ingredients}
        onDeleteIngredient={onDeleteIngredient}
      ></IngredientsList>
    </>
  );
};

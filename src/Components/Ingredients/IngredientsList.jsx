import { IngredientItem } from "./IngredientItem";

export const IngredientsList = ({ ingredients, onDeleteIngredient }) => {
  if (ingredients.length > 0)
    return (
      <>
        <h2 className="mt-3">Lista de ingredientes </h2>
        <ul className="mt-2">
          {ingredients.map((item) => {
            return (
              <IngredientItem
                key={item}
                item={item}
                onDeleteIngredient={onDeleteIngredient}
              />
            );
          })}
        </ul>
      </>
    );
};

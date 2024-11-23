import { IngredientItem } from "./IngredientItem";

export const IngredientsList = ({ ingredients, onDeleteIngredient }) => {
  console.log(ingredients);

  return (
    <>
      {ingredients && (
        <ul className="mt-3">
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
      )}
    </>
  );
};

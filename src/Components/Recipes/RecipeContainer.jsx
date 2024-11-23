export const RecipeContainer = ({ listOfIngredients }) => {
  return (
    <>
      <button>Crear Receta</button>
      <div>
        <p>Si hay elementos en la lista de ingredientes, permitir cambio</p>
        <p>Si hay menos de 3 elementos mostrar mensaje de alerta</p>
        <p>si hay al menos 3 elementos mostrar mensaje de carga </p>
      </div>
    </>
  );
};

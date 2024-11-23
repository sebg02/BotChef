export const IngredientItem = ({ item, onDeleteIngredient }) => {
  return (
    <>
      <li>
        <div className="d-flex align-items-center mb-3">
          <span className="">{item}</span>
          <button
            onClick={() => onDeleteIngredient(item)}
            className="btn btn-secondary btn-sm mx-3"
          >
            <i class="bi bi-trash"></i>
          </button>
        </div>
      </li>
    </>
  );
};

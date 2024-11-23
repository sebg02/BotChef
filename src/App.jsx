import { Header } from "./Components/Header";
import { IngredientsContainer } from "./Components/Ingredients/IngredientsContainer";
import { Main } from "./Components/Main";
import { RecipeContainer } from "./Components/Recipes/RecipeContainer";

function App() {
  return (
    <>
      <div className="container">
        <Header></Header>
        <IngredientsContainer></IngredientsContainer>
        <RecipeContainer></RecipeContainer>
      </div>
    </>
  );
}

{
  /* <Main></Main> */
}
export default App;

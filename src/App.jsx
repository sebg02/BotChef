import { Header } from "./Components/Header";
import { IngredientsContainer } from "./Components/Ingredients/IngredientsContainer";
import { Footer } from "./Components/Footer";

function App() {
  return (
    <>
      <div className="container d-flex flex-column min-vh-100">
        <main className="flex-grow-1">
          <Header></Header>
          <IngredientsContainer></IngredientsContainer>
        </main>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;

import Header from "./components/Header/Header";
import ListMenu from "./components/Menu/ListMenu";
import PizzalandSlogan from "./components/PizzalandSlogan/PizzalandSlogan";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <PizzalandSlogan />
        <ListMenu />
      </main>
    </>
  );
}

export default App;

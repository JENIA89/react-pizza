import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import { Header } from "./components";
import { Home, Cart } from "./pages";

function App() {
  const [pizzas, setPizzas] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/db.json")
      .then((response) => response.json())
      .then((json) => setPizzas(json.pizzas));
  }, [pizzas.toString()]);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route exact path="/" render={() => <Home items={pizzas} />} />
        <Route path="/cart" component={Cart} />
      </div>
    </div>
  );
}

export default App;

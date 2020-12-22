import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import { Header } from "./components";
import { Home, Cart } from "./pages";

function App() {
  const [pizzas, setPizzas] = useState([]);
  useEffect(() => {
    Axios("http://localhost:3001/db.json").then(({ data }) =>
      setPizzas(data.pizzas)
    );
  }, []);

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

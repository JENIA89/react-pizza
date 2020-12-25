import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route } from "react-router-dom";
import { Header } from "./components";
import { Home, Cart } from "./pages";
import { setPizzas } from "./redux/actions/pizzas";
import { setAsyncPizzas } from "./redux/actions/pizzas";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setAsyncPizzas());
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route exact path="/" component={Home} />
        <Route exact path="/cart" component={Cart} />
      </div>
    </div>
  );
}

export default App;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import { Header } from "./components";
import { Home, Cart } from "./pages";
import { setPizzas } from "./redux/actions/pizzas";

// function App() {
//   const [pizzas, setPizzas] = useState([]);
//   useEffect(() => {
//     Axios("http://localhost:3000/db.json").then(({ data }) =>
//       setPizzas(data.pizzas)
//     );
//   }, []);

//   return
// }

class App extends React.Component {
  componentDidMount() {
    axios
      .get("http://localhost:3000/db.json")
      .then(({ data }) => this.props.setPizzas(data.pizzas));
  }
  render() {
    console.log(this.props.items);

    return (
      <div className="wrapper">
        <Header />
        <div className="content">
          <Route
            exact
            path="/"
            render={() => <Home items={this.props.items} />}
          />
          <Route exact path="/cart" component={Cart} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    items: state.pizzas.items,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setPizzas: (items) => dispatch(setPizzas(items)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

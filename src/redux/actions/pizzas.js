import axios from "axios";

export const setAsyncPizzas = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:3001/pizzas")
      .then(({ data }) => dispatch(setPizzas(data)));
  };
};

export const setPizzas = (items) => ({
  type: "SET_PIZZAS",
  payload: items,
});

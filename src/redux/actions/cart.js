import { ADD_PIZZA_CART, CLEAR_CART, REMOVE_CART_ITEM } from "./actionTypes";

export const addPizza = (pizzaObj) => ({
  type: ADD_PIZZA_CART,
  payload: pizzaObj,
});

export const clearCart = () => ({
  type: CLEAR_CART,
});

export const removeCartItem = (id) => ({
  type: REMOVE_CART_ITEM,
  payload: id,
});

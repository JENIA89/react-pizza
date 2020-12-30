import React, { useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Categories,
  SortPopup,
  PizzaBlock,
  PizzaLoadingBlock,
} from "../components";
import { addPizza } from "../redux/actions/cart";
import { setCategory, setSortBy } from "../redux/actions/filters";
import { setAsyncPizzas } from "../redux/actions/pizzas";

const categoryName = [
  "Мясные",
  "Вегетарианская",
  "Гриль",
  "Острые",
  "Закрытые",
];

const sortItems = [
  { name: "популярности", type: "popular", order: "desc" },
  { name: "цене", type: "price", order: "desc" },
  { name: "алфавиту", type: "name", order: "asc" },
];

const Home = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.pizzas.items);
  const cartItems = useSelector(({ cart }) => cart.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  const { category, sortBy } = useSelector(({ filters }) => filters);

  useEffect(() => {
    dispatch(setAsyncPizzas(sortBy, category));
  }, [category, sortBy, dispatch]);

  const onSelectCategory = useCallback(
    (index) => {
      dispatch(setCategory(index));
    },
    [dispatch]
  );

  const onSelectSortType = useCallback(
    (type) => {
      dispatch(setSortBy(type));
    },
    [dispatch]
  );

  const addPizzaToCart = (obj) => {
    dispatch(addPizza(obj));
  };
  return (
    <div className="container">
      <div className="content__top">
        <Categories
          activeCategory={category}
          onClickCategory={onSelectCategory}
          items={categoryName}
        />
        <SortPopup
          items={sortItems}
          activeSortItem={sortBy.type}
          onClickSortItem={onSelectSortType}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded
          ? items.map((obj) => (
              <PizzaBlock
                addPizzaToCart={addPizzaToCart}
                addedCountPizzas={
                  cartItems[obj.id] && cartItems[obj.id].items.length
                }
                key={obj.id}
                {...obj}
              />
            ))
          : Array(10)
              .fill(0)
              .map((item, index) => (
                <PizzaLoadingBlock key={`${item}_${index}`} />
              ))}
      </div>
    </div>
  );
};

export default Home;

import React from "react";
import PropTypes from "prop-types";

const Categories = React.memo(
  ({ activeCategory, items = [], onClickCategory }) => {
    const rendeItems = () =>
      items.map((item, index) => (
        <li
          onClick={() => onClickCategory(index)}
          className={activeCategory === index ? "active" : ""}
          key={`${item}_${index}`}
        >
          {item}
        </li>
      ));

    return (
      <div className="categories">
        <ul>
          <li
            className={activeCategory === null ? "active" : ""}
            onClick={() => onClickCategory(null)}
          >
            Все
          </li>
          {rendeItems()}
        </ul>
      </div>
    );
  }
);

Categories.propTypes = {
  activeCategory: PropTypes.number,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClickCategory: PropTypes.func,
};
export default Categories;

import React from "react";
import ContentLoader from "react-content-loader";

const PizzaLoadingBlock = () => {
  return (
    <ContentLoader
      className="pizza-block"
      speed={2}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <circle cx="143" cy="134" r="118" />
      <rect x="1" y="274" rx="6" ry="6" width="280" height="26" />
      <rect x="1" y="314" rx="6" ry="6" width="280" height="84" />
      <rect x="2" y="413" rx="6" ry="6" width="91" height="31" />
      <rect x="138" y="408" rx="23" ry="23" width="139" height="40" />
    </ContentLoader>
  );
};
export default PizzaLoadingBlock;

import React from "react";

import Aux from "../../../hoc/Aux1";

const OrderSummary = (props) => {
  const ingredientsSummary = Object.keys(props.ingredients).map((igkey) => {
    return (
      <li key={igkey}>
        <span style={{ textTransform: "capitalize" }}>{igkey}</span>:{" "}
        {props.ingredients[igkey]}
      </li>
    );
  });
  return (
    <Aux>
      <h3>Your Order Summary</h3>
      <p>A Delicious burger with the following ingredients</p>
      <ul>{ingredientsSummary}</ul>
    </Aux>
  );
};

export default OrderSummary;

import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Aux from "../../../hoc/Auxille";

class OrderSummary extends PureComponent {
  render() {
    const { ingredients } = this.props;

    const ingredientSummary = Object.keys(ingredients).map((ig, idx) => {
      return (
        <li key={ig}>
          <span style={{ textTransform: "capitalize" }}>{ig}</span>:{" "}
          {ingredients[ig]}
        </li>
      );
    });

    return (
      <Aux>
        <h3>Your Order</h3>
        <p>A delicious burger with the following ingredients: </p>

        <ul>{ingredientSummary}</ul>

        <p>Continue to checkout</p>
      </Aux>
    );
  }
}

OrderSummary.propTypes = {
  ingredients: PropTypes.object
};

export default OrderSummary;

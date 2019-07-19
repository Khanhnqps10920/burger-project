import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Aux from "../../../hoc/Auxille";
import Button from "../../UI/Button/Button";

class OrderSummary extends PureComponent {
  render() {
    const { ingredients, purchaseCancle, purchaseContinue, price } = this.props;

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
        <p><strong>Total Price: {price}</strong></p>
        <p>Continue to checkout</p>
        <Button btnType="Danger" clicked={purchaseCancle}>CANCLE</Button>
        <Button btnType="Success" clicked={purchaseContinue}>CONTINUES</Button>
      </Aux>
    );
  }
}

OrderSummary.propTypes = {
  ingredients: PropTypes.object
};

export default OrderSummary;

import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Aux from "../../hoc/Auxille";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.6
};

class BurgerBuilder extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      ingredients: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0
      },
      listIngredient: [],
      total: 0,
      purchaseable: false
    };
  }

  updatePurchase = () => {
    this.setState(prevState => {
      const ingredients = { ...prevState.ingredients };
      const sum = Object.keys(ingredients)
        .map(ig => {
          return ingredients[ig];
        })
        .reduce((prev, cur) => {
          return prev + cur;
        }, 0);

      console.log(sum);

      return { purchaseable: sum > 0 };
    });
  };

  handleAddIngredient = type => {
    this.setState(prevState => {
      const ingredients = { ...prevState.ingredients };
      ingredients[type]++;

      // const listIngredient = [...prevState.listIngredient];

      // let igIdx = listIngredient.findIndex(t => {
      //   return t === type;
      // });

      // console.log(igIdx);

      // if (igIdx >= 0) {
      //   listIngredient[igIdx] = {
      //     ...listIngredient[igIdx],
      //     quantity: listIngredient[igIdx].quantity++
      //   };
      // } else {
      //   listIngredient[igIdx] = {
      //     type: type,
      //     quantity: 1
      //   };
      //   listIngredient.push(listIngredient[igIdx]);
      // }

      // console.log(listIngredient);

      let total = prevState.total;
      const priceAddition = INGREDIENT_PRICES[type];
      total = total + priceAddition;
      return { ingredients, total };
    });

    this.updatePurchase();
  };

  handleRemoveIngredient = type => {
    this.setState(prevState => {
      const ingredients = { ...prevState.ingredients };

      if (ingredients[type] <= 0) {
        return;
      } else {
        ingredients[type]--;
      }

      // const listIngredient = [...prevState.listIngredient];

      // let igIdx = listIngredient.findIndex(t => {
      //   return t === type;
      // });

      // if (igIdx >= 0) {
      //   listIngredient[igIdx] = {
      //     ...listIngredient[igIdx],
      //     quantity: listIngredient[igIdx].quantity - 1
      //   };
      // }

      let total = prevState.total;
      const priceAddition = INGREDIENT_PRICES[type];
      total = total - priceAddition;
      return { ingredients, total };
    });

    this.updatePurchase();
  };

  render() {
    const { ingredients, total, purchaseable } = this.state;

    const disableInfo = {
      ...ingredients
    };
    // {salad:true,meat:false ...}
    for (const key in disableInfo) {
      disableInfo[key] = disableInfo[key] <= 0;
    }
    console.log(disableInfo);
    return (
      <Aux>
        <Burger ingredients={ingredients} />
        <BuildControls
          ingredientAdded={this.handleAddIngredient}
          ingredientRemoved={this.handleRemoveIngredient}
          disabled={disableInfo}
          price={total}
          purchaseable={purchaseable}
        />

        <Modal>
          <OrderSummary ingredients={ingredients} />
        </Modal>
      </Aux>
    );
  }
}

BurgerBuilder.propTypes = {};

export default BurgerBuilder;

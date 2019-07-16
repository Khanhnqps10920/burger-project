import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import "./Burger.css";
import BurgerIngredient from "./BurgerIngredient/BurgetIngredient";

class Burger extends PureComponent {
  render() {
    const { ingredients } = this.props;
    // const transformedIngredient = Object.keys(ingredients).map(ig => {
    //   return [...Array(ingredients[ig])]
    //     .map((_, i) => {
    //       console.log(i)
    //       return <BurgerIngredient key={ig + i} type={ig} />
    //     });
    // });

    let transformedIngredient = Object.keys(ingredients)
      .map(ig => {
        return [...Array(ingredients[ig])].map((_, idx) => {
          return <BurgerIngredient key={ig + idx} type={ig} />;
        });
      })
      .reduce((prev, cur) => {
        return prev.concat(cur);
      }, []);
    if (transformedIngredient.length === 0) {
      transformedIngredient = <p>Please start adding ingredients</p>;
    }

    return (
      <div className="Burger">
        <BurgerIngredient type="bread-top" />
        {transformedIngredient}
        <BurgerIngredient type="bread-bottom" />
      </div>
    );
  }
}

Burger.propTypes = {
  ingredients: PropTypes.object
};

Burger.defaultProps = {
  ingredients: {}
};

export default Burger;

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Aux from '../../hoc/Auxille';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      ingredients: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0
      }
    }

  }

  handleBaconClick = () => {
    this.setState(prevState => {
      const ingredients = { ...prevState.ingredients };
      ingredients.bacon++;
      console.log(ingredients.bacon);
      return {
        ingredients
      }
    });
  }

  handleCheeseClick = () => {
    this.setState(prevState => {

      const ingredients = { ...prevState.ingredients };
      console.log(ingredients);
      ingredients.cheese++;
      return {
        ingredients
      }
    })
  }

  handleMealClick = () => {
    this.setState(prevState => {
      const ingredients = { ...prevState.ingredients };
      ingredients.meat++;
      return {
        ingredients
      }
    });
  }

  handleSaladClick = () => {
    this.setState(prevState => {
      const ingredients = { ...prevState.ingredients };
      ingredients.salad++;
      return {
        ingredients
      }
    });
  }

  render() {

    const { ingredients } = this.state;

    return (
      <Aux>
        <Burger ingredients={ingredients} />
        <div>Build controls</div>
        <button
          onClick={this.handleSaladClick}>
          salad </button>
        <button
          onClick={this.handleCheeseClick}>
          cheese </button>
        <button
          onClick={this.handleBaconClick}>
          bacon </button>
        <button
          onClick={this.handleMealClick}>
          meal </button>

      </Aux>
    );
  }
}

BurgerBuilder.propTypes = {

};

export default BurgerBuilder;
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './Burger.css';
import BurgetIngredient from './BurgerIngredient/BurgetIngredient';

class Burger extends PureComponent {
  render() {
    return (
      <div className="Burger">
        <BurgetIngredient type="bread-top" />
        <BurgetIngredient type="cheese" />
        <BurgetIngredient type="meat" />
        <BurgetIngredient type="bread-bottom" />
      </div>
    );
  }
}

Burger.propTypes = {

};

export default Burger;
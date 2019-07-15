import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Aux from '../../hoc/Auxille';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends PureComponent {
  render() {
    return (
      <Aux>
        <Burger />
        <div>Build controls</div>
      </Aux>
    );
  }
}

BurgerBuilder.propTypes = {

};

export default BurgerBuilder;
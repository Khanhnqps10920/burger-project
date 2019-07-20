import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './NavigationItems.scss';
import NavigationItem from './NavigationItem/NavigationItem';

class NavigationItems extends PureComponent {
  render() {
    return (
      <ul className="NavigationItems">
        <NavigationItem />
      </ul>
    );
  }
}

NavigationItems.propTypes = {

};

export default NavigationItems;
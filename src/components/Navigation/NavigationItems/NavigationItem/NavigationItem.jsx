import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './NavigationItem.scss';

class NavigationItem extends PureComponent {
  render() {
    return (
      <li className="NavigationItem"><a href="/">{this.props.children}</a></li>
    );
  }
}

NavigationItem.propTypes = {

};

export default NavigationItem;
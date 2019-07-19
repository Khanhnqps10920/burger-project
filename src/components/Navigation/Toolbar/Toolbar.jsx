import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './Toolbar.css';
import Logo from '../../Logo/Logo';

class Toolbar extends PureComponent {
  render() {
    return (
      <header className="Toolbar">
        <div>MENU</div>
        <Logo />
        <nav>
          ...
        </nav>
      </header>
    );
  }
}

Toolbar.propTypes = {

};

export default Toolbar;
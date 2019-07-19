import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import "./BackDrop.css";

const propTypes = {};

class BackDrop extends PureComponent {
  render() {
    const { show, clicked } = this.props;

    return show ? <div className="Backdrop" onClick={clicked} /> : null;
  }
}

BackDrop.propTypes = propTypes;

export default BackDrop;

import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import "./BackDrop.css";

const propTypes = {};

class BackDrop extends PureComponent {
  render() {
    const { show } = this.props;

    return show ? <div className="Backdrop" /> : null;
  }
}

BackDrop.propTypes = propTypes;

export default BackDrop;

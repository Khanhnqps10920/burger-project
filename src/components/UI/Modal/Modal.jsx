import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import "./Modal.css";

const propTypes = {};

class Modal extends PureComponent {
  render() {
    const { children } = this.props;
    return <div className="Modal">{children}</div>;
  }
}

Modal.propTypes = propTypes;

export default Modal;

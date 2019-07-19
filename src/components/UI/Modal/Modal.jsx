import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import "./Modal.css";
import Aux from "../../../hoc/Auxille";
import BackDrop from "../BackDrop/BackDrop";

const propTypes = {};

class Modal extends PureComponent {
  render() {
    const { children, show, modalClosed } = this.props;
    return (
      <Aux>
        <BackDrop show={show} clicked={modalClosed} />
        <div
          className="Modal"
          style={{
            transform: show ? "translateY(0)" : "translateY(-100vh)",
            opacity: show ? "1" : "0"
          }}
        >
          {children}
        </div>
      </Aux>
    );
  }
}

Modal.propTypes = propTypes;

export default Modal;

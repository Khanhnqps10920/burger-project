import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import "./BuildControl.css";

class BuildControl extends PureComponent {
  render() {
    const { label, added, removed, disabled } = this.props;
    return (
      <div className="BuildControl">
        <div className="Label">{label}</div>
        <button className="Less" onClick={removed} disabled={disabled}>
          Less
        </button>
        <button className="More" onClick={added}>
          More
        </button>
      </div>
    );
  }
}

BuildControl.propTypes = {
  label: PropTypes.string.isRequired,
  added: PropTypes.func.isRequired,
  removed: PropTypes.func.isRequired,
  disabled: PropTypes.bool
};

BuildControl.defaultProps = {
  disabled: true
};

export default BuildControl;

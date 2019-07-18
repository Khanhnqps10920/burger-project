import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import "./BuildControls.css";
import BuildControl from "./BuildControl/BuildControl";

class BuildControls extends PureComponent {
  render() {
    const controls = [
      { label: "Salad", type: "salad" },
      { label: "Bacon", type: "bacon" },
      { label: "Cheese", type: "cheese" },
      { label: "Meat", type: "meat" }
    ];
    const {
      ingredientAdded,
      ingredientRemoved,
      disabled,
      price,
      purchaseable,
      ordered
    } = this.props;
    return (
      <div className="BuildControls">
        <p>
          Current Price: <strong>{price.toFixed(2)}</strong> $
        </p>
        {controls.map(ctr => {
          return (
            <BuildControl
              label={ctr.label}
              key={ctr.label}
              added={() => ingredientAdded(ctr.type)}
              removed={() => ingredientRemoved(ctr.type)}
              disabled={disabled[ctr.type]}
            />
          );
        })}
        <button
          disabled={!purchaseable}
          onClick={ordered}
          className="OrderButton"
        >
          ORDER NOW
        </button>
      </div>
    );
  }
}

BuildControls.propTypes = {
  ingredientAdded: PropTypes.func,
  ingredientRemoved: PropTypes.func,
  disabled: PropTypes.object,
  price: PropTypes.number
};

BuildControl.defaultProps = {
  ingredientAdded: null,
  ingredientRemoved: null,
  disabled: null,
  price: 0
};

export default BuildControls;

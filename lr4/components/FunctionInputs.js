import React from "react";
import { useSelector } from "react-redux";

import Formula from "./Formula";

const FunctionInputs = ({
  A,
  B,
  C,
  Color,
  index,
  onChangeA,
  onChangeB,
  onChangeC,
  onChangeColor,
  onRemove,
}) => {
  const localization = useSelector(({ localization }) => localization);

  const DisabledRemove = index === 0;

  return (
    <div className="function">
      {localization.function}
      <Formula A={A} B={B} C={C} index={index + 1} />
      <div className="function-content">
        <div>
          <div>
            <div className="function__label">A:</div>
            <input
              className="function__input"
              type="number"
              placeholder="0"
              step="1"
              value={A}
              onChange={onChangeA}
            />
          </div>
          <div>
            <div className="function__label">B:</div>
            <input
              className="function__input"
              type="number"
              placeholder="0"
              step="1"
              value={B}
              onChange={onChangeB}
            />
          </div>
          <div>
            <div className="function__label">C:</div>
            <input
              className="function__input"
              type="number"
              placeholder="0"
              step="1"
              value={C}
              onChange={onChangeC}
            />
          </div>
          <div>
            {localization.chartColor}{" "}
            <input
              type="color"
              placeholder="#000000"
              value={Color}
              onChange={onChangeColor}
            />
          </div>
        </div>
        <div>
          <button
            className="function__remove-button"
            onClick={onRemove}
            disabled={DisabledRemove}
          >
            {localization.remove}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FunctionInputs;

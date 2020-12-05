import React from "react";

import Formula from './Formula'

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
  const DisabledRemove = index === 0;

  return (
    <div className="function-inputs">
      Функция:
      <Formula A={A} B={B} C={C} index={index + 1} />
      <div className="function-inputs-content">
        <div>
          <div>
            <div className="function-inputs__label">A:</div>
            <input
              className="function-inputs__input"
              type="number"
              placeholder="0"
              step="1"
              value={A}
              onChange={onChangeA}
            />
          </div>
          <div>
            <div className="function-inputs__label">B:</div>
            <input
              className="function-inputs__input"
              type="number"
              placeholder="0"
              step="1"
              value={B}
              onChange={onChangeB}
            />
          </div>
          <div>
            <div className="function-inputs__label">C:</div>
            <input
              className="function-inputs__input"
              type="number"
              placeholder="0"
              step="1"
              value={C}
              onChange={onChangeC}
            />
          </div>
          <div>
            Цвет графика:{" "}
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
            className="function-inputs__remove-button"
            onClick={onRemove}
            disabled={DisabledRemove}
          >
            Удалить
          </button>
        </div>
      </div>
    </div>
  );
};

export default FunctionInputs;

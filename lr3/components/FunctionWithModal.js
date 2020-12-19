import React from "react";

import Formula from "./Formula";

const FunctionWithModal = ({ A, B, C, index, openModal }) => {
  return (
    <div className="function">
      Функция:
      <div>
        <div className="function-content">
          <div>
            <Formula A={A} B={B} C={C} index={index + 1} />
          </div>
          <div>
            {" "}
            <button onClick={openModal}>Редактировать</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FunctionWithModal;

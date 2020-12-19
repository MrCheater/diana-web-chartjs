import React from "react";
import { useSelector } from "react-redux";

import Formula from "./Formula";

const FunctionWithModal = ({ A, B, C, index, openModal }) => {
  const localization = useSelector(({ localization }) => localization);

  return (
    <div className="function">
      {localization.function}
      <div>
        <div className="function-content">
          <div>
            <Formula A={A} B={B} C={C} index={index + 1} />
          </div>
          <div>
            {" "}
            <button onClick={openModal}>{localization.edit}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FunctionWithModal;

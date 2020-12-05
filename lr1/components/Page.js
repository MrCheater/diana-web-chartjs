import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import Formula from "./Formula";
import FunctionInputs from "./FunctionInputs";
import * as actions from "../redux/actions";

const Page = () => {
  const dispatch = useDispatch();
  const formulas = useSelector(({ formulas }) => formulas);

  const addFunction = useCallback(
    (...args) => dispatch(actions.addFunction(...args)),
    [dispatch]
  );
  const addRandomFunction = useCallback(
    (...args) => dispatch(actions.addRandomFunction(...args)),
    [dispatch]
  );
  const removeFunction = useCallback(
    (...args) => dispatch(actions.removeFunction(...args)),
    [dispatch]
  );

  return (
    <>
      <div>
        <div className="variant">Вариант №8</div>
        <Formula A="A" B="B" C="C" index="" />
      </div>
      <div>
        <div className="description">
          Введите значения A, B, C.
          <br />
          Динамически добавляйте и удаляйте графики для функций с различными
          параметрами. <br />
          Задавайте цвет графика.
        </div>
        <div>
          {formulas.map(({ index, A, B, C, Color }, key) => (
            <FunctionInputs
              key={key}
              index={index}
              A={A}
              B={B}
              C={C}
              Color={Color}
              onChangeA={() => {}}
              onChangeB={() => {}}
              onChangeC={() => {}}
              onChangeColor={() => {}}
              onRemove={removeFunction.bind(null, index)}
            />
          ))}
        </div>
        <button onClick={addFunction}>Добавить график</button>{" "}
        <button onClick={addRandomFunction}>Добавить случайный график</button>
      </div>
    </>
  );
};

export default Page;

import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import Chart from "./Chart";
import Formula from "./Formula";
import FunctionInputs from "./FunctionInputs";
import Slider from "./Slider";
import * as actions from "../redux/actions";

const Page = () => {
  const dispatch = useDispatch();
  const formulas = useSelector(({ formulas }) => formulas);
  const scaleX = useSelector(({ scaleX }) => scaleX);
  const scaleY = useSelector(({ scaleY }) => scaleY);

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
  const updateA = useCallback((...args) => dispatch(actions.updateA(...args)), [
    dispatch,
  ]);
  const updateB = useCallback((...args) => dispatch(actions.updateB(...args)), [
    dispatch,
  ]);
  const updateC = useCallback((...args) => dispatch(actions.updateC(...args)), [
    dispatch,
  ]);
  const updateColor = useCallback(
    (...args) => dispatch(actions.updateColor(...args)),
    [dispatch]
  );
  const updateScaleX = useCallback(
    (...args) => dispatch(actions.updateScaleX(...args)),
    [dispatch]
  );
  const updateScaleY = useCallback(
    (...args) => dispatch(actions.updateScaleY(...args)),
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
        <div className="formulas-and-chart">
          <div className="formulas-and-chart__left">
            <div className="controls">
              <button onClick={addFunction}>Добавить график</button>{" "}
              <button onClick={addRandomFunction}>
                Добавить случайный график
              </button>
              <Slider
                name="scaleX"
                text="X Scale"
                value={scaleX}
                onChange={updateScaleX}
              />
              <Slider
                name="scaleY"
                text="Y Scale"
                value={scaleY}
                onChange={updateScaleY}
              />
            </div>
            {formulas.map(({ index, A, B, C, Color }, key) => (
              <FunctionInputs
                key={key}
                index={index}
                A={A}
                B={B}
                C={C}
                Color={Color}
                onChangeA={updateA.bind(null, index)}
                onChangeB={updateB.bind(null, index)}
                onChangeC={updateC.bind(null, index)}
                onChangeColor={updateColor.bind(null, index)}
                onRemove={removeFunction.bind(null, index)}
              />
            ))}
          </div>
          <div className="formulas-and-chart__right">
            <Chart formulas={formulas} scaleX={scaleX} scaleY={scaleY} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;

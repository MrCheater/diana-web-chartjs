import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import Modal from "react-modal";

import Chart from "./Chart";
import Formula from "./Formula";
import FunctionInputs from "./FunctionInputs";
import Function from "./FunctionWithModal";
import Slider from "./Slider";
import * as actions from "../redux/actions";

const IndexPage = () => {
  const localization = useSelector(({ localization }) => localization);

  const dispatch = useDispatch();
  const formulas = useSelector(({ formulas }) => formulas);
  const scaleX = useSelector(({ scaleX }) => scaleX);
  const scaleY = useSelector(({ scaleY }) => scaleY);
  const modalIsOpen = useSelector(({ modalIsOpen }) => modalIsOpen);

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

  const openModal = useCallback(
    (...args) => dispatch(actions.openModal(...args)),
    [dispatch]
  );
  const closeModalAndCancel = useCallback(
    (...args) => dispatch(actions.closeModalAndCancel(...args)),
    [dispatch]
  );
  const closeModalAndSave = useCallback(
    (...args) => dispatch(actions.closeModalAndSave(...args)),
    [dispatch]
  );

  return (
    <>
      <div>
        <div className="variant">{localization.variant}</div>
        <Formula A="A" B="B" C="C" index="" />
      </div>
      <div>
        <div className="description" onClick={openModal}>
          {localization.description.split('\n').map(
            (text,index)=> (
              <div key={index}>
                {text}
              </div>
            )
          )}
        </div>
        <Modal
          isOpen={modalIsOpen}
          contentLabel="onRequestClose Example"
          onRequestClose={closeModalAndCancel}
          className="modal"
          overlayClassName="overlay"
        >
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
          <div className="controls">
            <button onClick={closeModalAndCancel}>{localization.cancel}</button>{" "}
            <button onClick={closeModalAndSave}>{localization.save}</button>
          </div>
        </Modal>
        <div className="formulas-and-chart">
          <div className="formulas-and-chart__left">
            <div className="controls">
              <button onClick={addFunction}>{localization.addChart}</button>{" "}
              <button onClick={addRandomFunction}>
                {localization.addRandomChart}
              </button>
              <Slider
                name="scaleX"
                text={localization.scaleX}
                value={scaleX}
                onChange={updateScaleX}
              />
              <Slider
                name="scaleY"
                text={localization.scaleY}
                value={scaleY}
                onChange={updateScaleY}
              />
            </div>
            {formulas.map(({ index, A, B, C, Color }, key) => (
              <Function
                key={key}
                index={index}
                A={A}
                B={B}
                C={C}
                openModal={openModal}
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

export default IndexPage;

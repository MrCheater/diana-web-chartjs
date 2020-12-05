import ActionTypes from "./actionTypes";
import getRandomInputs from "../utils/getRandomInputs";

export const addFunction = () => ({
  type: ActionTypes.ADD_FUNCTION,
  payload: {
    A: 1,
    B: 1,
    C: 1,
    Color: "#000000",
  },
});

export const addRandomFunction = () => ({
  type: ActionTypes.ADD_FUNCTION,
  payload: getRandomInputs(),
});

export const removeFunction = (index) => ({
  type: ActionTypes.REMOVE_FUNCTION,
  payload: {
    index,
  },
});

export const updateA = (index, value) => ({
  type: ActionTypes.UPDATE_A,
  payload: {
    index,
    value,
  },
});

export const updateB = (index, value) => ({
  type: ActionTypes.UPDATE_B,
  payload: {
    index,
    value,
  },
});

export const updateC = (index, value) => ({
  type: ActionTypes.UPDATE_C,
  payload: {
    index,
    value,
  },
});

export const updateColor = (index, value) => ({
  type: ActionTypes.UPDATE_COLOR,
  payload: {
    index,
    value,
  },
});

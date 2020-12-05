import ActionTypes from "./actionTypes";
import getRandomInputs from "../utils/getRandomInputs";

export const initialState = {
  formulas: [
    {
      ...getRandomInputs(),
      index: 0,
    },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_FUNCTION: {
      const { A, B, C, Color } = action.payload;
      const index = state.formulas.length;

      return {
        ...state,
        formulas: [
          ...state.formulas,
          {
            A,
            B,
            C,
            Color,
            index,
          },
        ],
      };
    }
    case ActionTypes.REMOVE_FUNCTION: {
      const { index } = action.payload;

      return {
        ...state,
        formulas: state.formulas.filter((formula) => formula.index !== index),
      };
    }
    default:
      return state;
  }
};

export default reducer;

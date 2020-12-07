import ActionTypes from "./actionTypes";
import getRandomInputs from "../utils/getRandomInputs";

export const initialState = {
  formulas: [
    {
      ...getRandomInputs(),
      index: 0,
    },
  ],
  scaleX: 1,
  scaleY: 1,
  modalIsOpen: false,
  prevFormulas: []
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
    case ActionTypes.UPDATE_A: {
      const { index, value } = action.payload;
      const nextFormulas = state.formulas.map((formula) =>
        formula.index === index ? { ...formula, A: value } : formula
      );

      return {
        ...state,
        formulas: nextFormulas,
      };
    }
    case ActionTypes.UPDATE_B: {
      const { index, value } = action.payload;

      return {
        ...state,
        formulas: state.formulas.map((formula) =>
          formula.index === index ? { ...formula, B: value } : formula
        ),
      };
    }
    case ActionTypes.UPDATE_C: {
      const { index, value } = action.payload;

      return {
        ...state,
        formulas: state.formulas.map((formula) =>
          formula.index === index ? { ...formula, C: value } : formula
        ),
      };
    }
    case ActionTypes.UPDATE_COLOR: {
      const { index, value } = action.payload;
      return {
        ...state,
        formulas: state.formulas.map((formula) =>
          formula.index === index ? { ...formula, Color: value } : formula
        ),
      };
    }
    case ActionTypes.UPDATE_SCALE_X: {
      const { value } = action.payload;
      return {
        ...state,
        scaleX: value,
      };
    }
    case ActionTypes.UPDATE_SCALE_Y: {
      const { value } = action.payload;
      return {
        ...state,
        scaleY: value,
      };
    }
    case ActionTypes.OPEN_MODAL: {
      return {
        ...state,
        modalIsOpen: true,
        prevFormulas: state.formulas
      }
    }
    case ActionTypes.CLOSE_MODAL_AND_CANCEL: {
      return {
        ...state,
        modalIsOpen: false,
        formulas: state.prevFormulas,
        prevFormulas: []
      }
    }
    case ActionTypes.CLOSE_MODAL_AND_SAVE: {
      return {
        ...state,
        modalIsOpen: false,
        prevFormulas: []
      }
    }
    default:
      return state;
  }
};

export default reducer;

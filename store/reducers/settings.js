import { SET_DARKMODE } from '../actions/settings';

const initialState = {
  darkMode: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DARKMODE:
      return {
        ...state,
        darkMode: action.value,
      };
    default:
      return state;
  }
};

export default reducer;

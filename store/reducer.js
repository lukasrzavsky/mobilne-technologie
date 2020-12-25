import {
  FETCH_JOKES,
  FETCH_JOKES_SUCCESS,
  FETCH_JOKES_FAILURE,
} from './actions';

const initialState = {
  jokes: [],
  isLoading: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_JOKES:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_JOKES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        jokes: action.jokes,
      };
    case FETCH_JOKES_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default reducer;

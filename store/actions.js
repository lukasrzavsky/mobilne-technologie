export const FETCH_JOKES = 'FETCK_JOKES';
export const FETCH_JOKES_SUCCESS = 'FETCH_JOKES_SUCCESS';
export const FETCH_JOKES_FAILURE = 'FETCH_JOKES_FAILURE';

export const fetchJokes = () => {
  return {
    type: FETCH_JOKES,
  };
};

export const fetchJokesSuccess = (jokes) => {
  return {
    type: FETCH_JOKES_SUCCESS,
    jokes: jokes,
  };
};

export const fetchJokesError = (error) => {
  return {
    type: FETCH_JOKES_FAILURE,
    error: error,
  };
};

export const fetchJokesHandler = (searchPhrase) => (dispatch) => {
  dispatch(fetchJokesSuccess());
  dispatch(fetchJokes());
  fetch(`https://api.chucknorris.io/jokes/search?query=${searchPhrase}`)
    .then((response) => {
      return response.json();
    })
    .then(
      ({ result }) => {
        dispatch(fetchJokesSuccess(result));
      },
      (error) => {
        dispatch(fetchJokesError(error));
      },
    );
};

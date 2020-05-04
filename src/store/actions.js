export const ACTION_TYPES = {
  SAVE_RESTOURANTS: 'SAVE_RESTOURANTS',
  SET_LOAD_RESTOURANTS_ERROR: 'SET_LOAD_RESTOURANTS_ERROR',
  START_LOADING: 'START_LOADING',
  STOP_LOADING: 'STOP_LOADING',
};

const saveRestourants = data => ({
  type: ACTION_TYPES.SAVE_RESTOURANTS,
  payload: data,
});

const setRestourants = error => ({
  type: ACTION_TYPES.SET_LOAD_RESTOURANTS_ERROR,
  payload: error,
});

const startLoading = () => ({
  type: ACTION_TYPES.START_LOADING,
});

const stopLoading = () => ({
  type: ACTION_TYPES.STOP_LOADING,
});

const BASE_URL = 'https://mate-uber-eats-api.herokuapp.com/api/v1/';

export const loadRestourants = () => (dispatch) => {
  dispatch(startLoading());

  // fetch(Math.random() < 0.5 ? 'd' : 'https://mate-uber-eats-api.herokuapp.com/api/v1/')
  fetch(`${BASE_URL}restaurants`)
    .then(resp => resp.json())
    .then(({ data }) => {
      dispatch(saveRestourants(data));
    })
    .catch(error => dispatch(setRestourants(error.message)))
    .finally(() => dispatch(stopLoading()));
};

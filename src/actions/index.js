import axios from 'axios';

const SERVER_URL = 'https://blooming-brushlands-43865.herokuapp.com/';

export const signIn = (email, password) => (dispatch) => {
  axios({
    method: 'post',
    url: `${SERVER_URL}/users/sign_in`,
    data: {
      email,
      password,
    },
    headers: {
      Accept: 'application/json',
      mode: 'cors',
    },
  })
    .then((response) => {
      if (typeof response.headers['access-token'] === 'string') {
        window.localStorage.setItem(
          'sessionID',
          response.headers['access-token'],
        );
        dispatch({
          type: 'SIGN_IN_UP',
          payload: response.headers['access-token'],
        });
      }
    })
    .catch((error) => {
      if (error.message === 'Request failed with status code 422') {
        dispatch({ type: 'SIGN_ERROR', payload: 'Account already exists..' });
      }
    });
};

export const signUp = (email, password) => (dispatch) => {
  axios({
    method: 'post',
    url: `${SERVER_URL}/users/sign_up`,
    data: {
      email,
      password,
    },
    headers: {
      Accept: 'application/json',
      mode: 'cors',
    },
  }).then((response) => {
    if (typeof response.headers['access-token'] === 'string') {
      window.localStorage.setItem(
        'sessionID',
        response.headers['access-token'],
      );
      dispatch({
        type: 'SIGN_IN_UP',
        payload: response.headers['access-token'],
      });
    }
  }).catch((error) => {
    if (error.message === 'Request failed with status code 422') {
      dispatch({ type: 'SIGN_ERROR', payload: 'Account already exists..' });
    }
  });
};

export const signOut = (authToken) => (dispatch) => {
  axios({
    method: 'delete',
    url: `${SERVER_URL}/users/sign_out`,
    headers: {
      Accept: 'application/json',
      Authorization: authToken,
    },
  }).then((response) => {
    if (response) {
      window.localStorage.clear();
      dispatch({
        type: 'SIGN_OUT',
      });
    }
  }).catch((error) => dispatch({ type: 'SIGN_ERROR', payload: error }));
};

export const resetError = () => (dispatch) => {
  dispatch({ type: 'RESET_SIGN_ERROR' });
};

export const localStorageSignIn = (token) => {
  const sessionData = [token, true];
  return {
    type: 'LOCAL_STORAGE_SIGN_IN',
    payload: sessionData,
  };
}

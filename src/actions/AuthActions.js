import firebase from "firebase";
import { Actions } from "react-native-router-flux";
import {
  EMAIL_CHANGE,
  PASSWORD_CHANGE,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILED,
  LOGIN_USER
} from "./types";

export const emailChanged = text => {
  return {
    type: EMAIL_CHANGE,
    payload: text
  };
};

export const passwordChanged = text => {
  return {
    type: PASSWORD_CHANGE,
    payload: text
  };
};

export const loginUser = ({ email, password }) => {
  return dispatch => {
    dispatch({ type: LOGIN_USER });
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => loginUserSuccess(dispatch, user))
      .catch(() => {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(user => loginUserSuccess(dispatch, user))
          .catch(error => loginUserFailed(dispatch, error));
      });
  };
};

const loginUserFailed = (dispatch, error) => {
  dispatch({
    type: LOGIN_USER_FAILED,
    payload: error
  });
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });
  Actions.main();
};

import { REGISTER_USER, LOGIN_USER, AUTH_ERROR } from "./types";
import axios from "axios";
import { ip } from "../../config";

export const registerUser = (formData) => async (dispatch) => {
  try {
    const res = await axios.post(`${ip}/user`, formData);

    dispatch({
      type: REGISTER_USER,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
      payload: err.response.data,
    });
  }
};

export const loginUser = (formData, history) => async (dispatch) => {
  try {
    const res = await axios.post(`${ip}/user/login`, formData);

    dispatch({
      type: LOGIN_USER,
      payload: res.data,
    });

    history.push("/profile");
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
      payload: err.response,
    });
  }
};

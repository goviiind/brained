import {
  GET_PROFILES,
  ADD_PROFILES,
  UPDATE_PROFILES,
  DELETE_PROFILES,
  PROFILE_ERROR,
} from "../actions/types";
import { ip } from "../../config";
import axios from "axios";

export const getProfile = (userId) => async (dispatch) => {
  try {
    const res = await axios.get(`${ip}/profile`, userId);
    dispatch({
      type: GET_PROFILES,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: err.response,
    });
  }
};

export const addProfile = (formData, userId) => async (dispatch) => {
  try {
    const { technology, experience } = formData;

    const body = {
      technology,
      experience,
      userId,
    };

    const res = await axios.post(`${ip}/profile`, body);

    dispatch({
      type: ADD_PROFILES,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: err.response,
    });
  }
};

export const updateProfile =
  (userId, skillId, formData) => async (dispatch) => {
    try {
      const { technology, experience } = formData;

      const body = {
        userId,
        skillId,
        technology,
        experience,
      };

      const res = await axios.put(`${ip}/profile`, body);
      dispatch({
        type: UPDATE_PROFILES,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: PROFILE_ERROR,
        payload: err.response,
      });
    }
  };

export const deleteProfile = (userId, skillId) => async (dispatch) => {
  try {
    const body = {
      userId,
      skillId,
    };

    const res = await axios.delete(`${ip}/profile`, body);

    dispatch({
      type: DELETE_PROFILES,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: err.response,
    });
  }
};

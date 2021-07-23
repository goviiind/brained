import {
  GET_PROFILES,
  ADD_PROFILES,
  UPDATE_PROFILES,
  DELETE_PROFILES,
  PROFILE_ERROR,
} from "../actions/types";

const initial_state = {
  profiles: null,
  loading: true,
  error: null,
};

export default (state = initial_state, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_PROFILES:
    case ADD_PROFILES:
      return {
        ...state,
        profiles: payload,
        loading: false,
      };

    case PROFILE_ERROR:
      return {
        ...state,
        profiles: null,
        loading: false,
        errror: payload,
      };
    default:
      return state;
  }
};

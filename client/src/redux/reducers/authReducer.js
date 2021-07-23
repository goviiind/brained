import { REGISTER_USER, LOGIN_USER, AUTH_ERROR } from "../actions/types";

const initial_state = {
  user: null,
  loading: true,
};

export default (state = initial_state, action) => {
  const { type, payload } = action;

  switch (type) {
    case REGISTER_USER:
      return {
        ...state,
        user: payload,
        loading: false,
      };

    case LOGIN_USER:
      return {
        ...state,
        user: payload,
        loading: false,
      };

    case AUTH_ERROR:
      return {
        ...state,
        user: null,

        loading: false,
      };

    default:
      return state;
  }
};

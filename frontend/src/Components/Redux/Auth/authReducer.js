import {
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOG_OUT,
} from "./actionTypes";

const initState = {
  loading: false,
  error: false,
  token: "",
  user: {},
  auth: false,
};

export const authReducer = (state = initState, { type, payload }) => {
  console.log(type);

  switch (type) {
    case LOGIN_LOADING:
      return {
        ...state,
        loading: true,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        token: payload.token,
        user: payload.user,
        auth: true,
      };

    case LOGIN_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };

    case LOG_OUT:
      return {
        ...state,
        loading: false,
        token: "",
        user: {},
        auth: false,
      };
    default: {
      return { ...state };
    }
  }
};

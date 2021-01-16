const initialState = {
  isAuth: false,
  username: "",
};
const isLogged = (state = initialState, { type, payload }) => {
  switch (type) {
    case "TOGGLE_AUTH":
      return {
        ...state,
        isAuth: payload.isAuth,
        username: payload.username,
      };
    default:
      return state;
  }
};
export default isLogged;

export const toggleAuth = (username) => {
  return {
    type: "TOGGLE_AUTH",
    payload: {
      isAuth: true,
      username: username,
    },
  };
};

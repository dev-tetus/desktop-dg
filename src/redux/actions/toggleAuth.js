export const toggleAuth = (id, username) => {
  return {
    type: "TOGGLE_AUTH",
    payload: {
      id: id,
      isAuth: true,
      username: username,
    },
  };
};

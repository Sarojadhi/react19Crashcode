export const isAuthenticated = () => {
  return localStorage.getItem("token") ? true : false;
};

export const getUserRole = () => {
  return localStorage.getItem("role") || "user";
};

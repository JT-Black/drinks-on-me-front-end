// handle session storage of user ID.

export const getUserId = () => {
  return sessionStorage.getItem('userId');
};

export const setUserId = (userId) => {
  sessionStorage.setItem('userId', userId);
};

export const removeUserId = () => {
  sessionStorage.removeItem('userId');
};

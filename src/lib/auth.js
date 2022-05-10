// ! Different functions for working with my token!!!

// ! Getting the logged in users ID
export function getLoggedInUserId() {
  const token = sessionStorage.getItem('token');
  if (!token) return false; //safety in case there's no token

  const userObject = JSON.parse(window.atob(token.split('.')[1]));
  return userObject.userId;
}

// ! Checking if the user is an admin
export function isAdmin() {
  const token = sessionStorage.getItem('token');
  if (!token) return false; //safety in case there's no token

  const userObject = JSON.parse(window.atob(token.split('.')[1]));
  return !!userObject.isAdmin;
}

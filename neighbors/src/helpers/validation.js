export const isPasswordValid = (password) => {
  return password.length >= 6 && /[!@#]+/.test(password) && /[0-9]+/.test(password);
};

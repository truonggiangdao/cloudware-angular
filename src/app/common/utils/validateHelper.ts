/**
 * Validate if email is valid
 * @returns Boolean
 */
export const validateEmail = (email: string) => {
  return /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(email);
};

/**
 * Validate if password is valid
 * @returns Boolean
 */
export const validatePassword = (password: string) => {
  // return /^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{6,20}$/.test(password);
  return Boolean(password && password.length > 5 && password.length < 20);
};

export default {
  validateEmail,
  validatePassword,
};

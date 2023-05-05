export const passwordCheckValidation = (password, passwordCheck, message) => {
  if (password !== passwordCheck) {
    return message;
  }
  return true;
};

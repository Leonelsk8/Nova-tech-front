export const passwordCheckValidation = (password, passwordCheck) => {
  if (password !== passwordCheck) {
    return 'Las contraseñas no coinciden.';
  }
  return true;
};

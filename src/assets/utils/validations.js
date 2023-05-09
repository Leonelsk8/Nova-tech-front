export const passwordCheckValidation = (password, passwordCheck, message) => {
  if (password !== passwordCheck) {
    return message;
  }
  return true;
};

export const adminValidate = (token)=>{
  if(token !== null){
    const decoded = JSON.parse(atob(token.split(".")[1]));
    return decoded.roleAdmin;
  }else{
    return false;
  }
}

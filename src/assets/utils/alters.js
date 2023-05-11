import Swal from 'sweetalert2';

export const customAlert = (title, text, icon, buttonText, action) => {
  Swal.fire({
    title: title,
    text: text,
    icon: icon,
    confirmButtonText: buttonText,
    confirmButtonColor: '#6D8B74',
    allowOutsideClick: false,
  }).then((result) => {
    if (result.isConfirmed) {
      action();
      return;
    }
  });
};

export const alertCancelConfirm = (
  title,
  text,
  icon,
  buttonConfirm,
  buttonCancel,
  action,
  actiontwo
) => {
  Swal.fire({
    title: title,
    text: text,
    icon: icon,
    showCancelButton: true,
    cancelButtonText: buttonCancel,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: buttonConfirm,
  }).then((result) => {
    if (result.isConfirmed) {
      action();
    } else {
      actiontwo();
    }
  });
};

export const validateUserAlert = (
  userData,
  id,
  token,
  action,
  actionTwo,
  info
) => {
  Swal.fire({
    title: info.title,
    input: info.inputType,
    inputAttributes: {
      autocapitalize: 'off',
    },
    showCancelButton: true,
    cancelButtonText: info.cancelTextButton,
    confirmButtonText: info.textButton,
    confirmButtonColor: '#6D8B74',
    showLoaderOnConfirm: true,
    preConfirm: (password) => {
      return action(id, password, token)
        .then(async (response) => {
          if (!response) {
            throw new Error(response);
          }
          return await actionTwo(id, userData, token);
        })
        .catch((error) => {
          Swal.showValidationMessage(`${error}: ${info.errorMessage}`);
        });
    },
    allowOutsideClick: () => !Swal.isLoading(),
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: info.successTitle,
        text: info.successText,
        confirmButtonText: info.successButtonText,
        confirmButtonColor: '#6D8B74',
      });
    }
  });
};

export const alertTime = (title, icon)=>{
  Swal.fire({
    icon: icon,
    title: title,
    showConfirmButton: false,
    timer: 1000
  })
}

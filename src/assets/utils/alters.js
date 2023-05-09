import Swal from 'sweetalert2';

export const customAlert = (title, text, icon, buttonText, action) => {
  Swal.fire({
    title: title,
    text: text,
    icon: icon,
    confirmButtonText: buttonText,
    confirmButtonColor: '#0d6efd',
    allowOutsideClick: false,
  }).then((result) => {
    if (result.isConfirmed) {
      action();
      return;
    }
  });
};

export const alertCancelConfirm = (title, text, icon ,buttonConfirm, buttonCancel, action, actiontwo) =>{
  Swal.fire({
    title: title,
    text: text,
    icon: icon,
    showCancelButton: true,
    cancelButtonText: buttonCancel,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: buttonConfirm
  }).then((result) => {
    if (result.isConfirmed) {
      action();
    }else{
      actiontwo();
    }
  })
}

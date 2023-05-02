import Swal from 'sweetalert2';

export const messages = {
  failureGetProductsText:
    'Ha ocurrido un error al intentar obtener los productos.',
  failureGetProductText: 'Ocurrió un error al intentar cargar el producto.',

  errorTitle: 'Ups...',
  successTitle: '¡Bien!',

  errorIcon: 'error',
  successIcon: 'success',

  registerSuccessTitle: 'Usuario registrado con éxito',
  registerSuccessText: 'Ya puedes inicirar sesión.',
  registerFailureTitle: 'Error de registro',
  registerFailureText: 'No se pudo completar el registro, intenta de nuevo.',
};

export const customAlert = (title, text, icon, action) => {
  Swal.fire({
    title: title,
    text: text,
    icon: icon,
    confirmButtonText: 'Aceptar',
    confirmButtonColor: '#0d6efd',
    allowOutsideClick: false,
  }).then((result) => {
    if (result.isConfirmed) {
      action();
      return;
    }
  });
};
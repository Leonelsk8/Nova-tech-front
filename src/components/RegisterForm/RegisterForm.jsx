import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button, Container, Row, Col, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { passwordCheckValidation } from '../../assets/utils/validations';
import { customAlert, messages } from '../../assets/utils/alters';
import { endPoints } from '../../assets/utils/configs';
import registerImg from '../../assets/nt-white.png';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from './RegisterForm.module.css';

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      lastName: '',
      email: '',
      password: '',
      passwordCheck: '',
      lang: 'es',
    },
  });

  const URL_SERVER = import.meta.env.VITE_URL_SERVER;
  const navigate = useNavigate();
  const password = watch('password');
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async (register) => {
    console.log(register);
    try {
      const response = await axios.post(
        `${URL_SERVER}${endPoints.users}create-user`,
        register
      );

      customAlert(
        response.data,
        messages.registerSuccessText,
        messages.successIcon,
        () => {
          console.log(response);
          navigate('/');
        }
      );
    } catch (error) {
      let errorsMsg = '';
      error.response.data.errors.forEach((err) => {
        errorsMsg += err.msg + '\n';
      });
      customAlert(
        messages.registerFailureTitle,
        errorsMsg,
        messages.errorIcon,
        () => {
          console.log(error);
          navigate('/error404');
        }
      );
    }
  };

  return (
    <Container fluid className={styles.regContainer}>
      <Row className='d-flex justify-content-center align-items-center'>
        <Col md={9} className='d-flex justify-content-center my-4'>
          <img
            src={registerImg}
            alt='Nova Tech Logo'
            style={{ width: '100px', height: 'auto' }}
            className={`my-2 me-3 ${styles.regImg}`}
          />
        </Col>
        <Col md={9} className={`${styles.regCol} rounded py-3 mb-4`}>
          <h2 className='mt-2 mb-4 border-bottom pb-3'>Registro</h2>
          <Form
            onSubmit={handleSubmit(onSubmit)}
            className='d-flex flex-column gap-2'
          >
            <Row>
              <Form.Group as={Col}>
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type='text'
                  {...register('name', {
                    required: {
                      value: true,
                      message: 'Complete este campo.',
                    },
                    minLength: {
                      value: 2,
                      message: 'Mínimo 2 caracteres.',
                    },
                    maxLength: {
                      value: 50,
                      message: 'Máximo 50 caracteres.',
                    },
                    pattern: {
                      value:
                        /^[a-zA-ZÁÉÍÓÚÑáéíóúñ'-]+(\s[a-zA-ZÁÉÍÓÚÑáéíóúñ'-]+)*$/,
                      message: 'Formato no válido.',
                    },
                  })}
                />
                {errors.name && (
                  <small className='text-danger'>{errors.name.message}</small>
                )}
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Apellido</Form.Label>
                <Form.Control
                  type='text'
                  {...register('lastName', {
                    required: {
                      value: true,
                      message: 'Complete este campo.',
                    },
                    minLength: {
                      value: 2,
                      message: 'Mínimo 2 caracteres.',
                    },
                    maxLength: {
                      value: 50,
                      message: 'Máximo 50 caracteres.',
                    },
                    pattern: {
                      value:
                        /^[a-zA-ZÁÉÍÓÚÑáéíóúñ'-]+(\s[a-zA-ZÁÉÍÓÚÑáéíóúñ'-]+)*$/,
                      message: 'Formato no válido.',
                    },
                  })}
                />
                {errors.lastName && (
                  <small className='text-danger'>
                    {errors.lastName.message}
                  </small>
                )}
              </Form.Group>
            </Row>

            <Row>
              <Form.Group as={Col}>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type='email'
                  {...register('email', {
                    required: {
                      value: true,
                      message: 'El email es obligatorio.',
                    },
                    minLength: {
                      value: 5,
                      message: 'Demasiado corto...',
                    },
                    maxLength: {
                      value: 100,
                      message: 'Máximo 100 caracteres.',
                    },
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message:
                        'El correo electrónico debe tener un formato válido.',
                    },
                  })}
                />
                {errors.email && (
                  <small className='text-danger'>{errors.email.message}</small>
                )}
              </Form.Group>
            </Row>

            <Row className=''>
              <Form.Group as={Col} className='col-6'>
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type={showPassword ? 'text' : 'password'}
                  {...register('password', {
                    required: {
                      value: true,
                      message: 'La contraseña es obligatoria.',
                    },
                    minLength: {
                      value: 8,
                      message: 'Mínimo 8 caracteres.',
                    },
                    maxLength: {
                      value: 50,
                      message: 'Máximo 50 caracteres.',
                    },
                    pattern: {
                      value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,50}$/,
                      message: 'La contraseña debe tener letras y números.',
                    },
                  })}
                />
                {errors.password && (
                  <small className='text-danger'>
                    {errors.password.message}
                  </small>
                )}
              </Form.Group>

              <Form.Group as={Col} className='col-6'>
                <Form.Label>Confirmar</Form.Label>
                <InputGroup>
                  <Form.Control
                    className='rounded'
                    type={showPassword ? 'text' : 'password'}
                    {...register('passwordCheck', {
                      required: {
                        value: true,
                        message: 'La contraseña es obligatoria.',
                      },
                      maxLength: {
                        value: 50,
                        message: 'Máximo 50 caracteres.',
                      },
                      validate: (value) =>
                        passwordCheckValidation(password, value),
                    })}
                  />
                  {/* MOSTRAR/OCULTAR CONTRASEÑA */}
                  <Button
                    variant='link'
                    className='px-0 ms-2'
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <i className='bi bi-eye-slash'></i>
                    ) : (
                      <i className='bi bi-eye'></i>
                    )}
                  </Button>
                </InputGroup>
                {errors.passwordCheck && (
                  <small className='text-danger'>
                    {errors.passwordCheck.message}
                  </small>
                )}
              </Form.Group>
            </Row>

            <Row>
              <Form.Group as={Col} className=''>
                <Form.Label>
                  Idioma <small className='text-secondary'>(opcional)</small>
                </Form.Label>
                <Form.Select {...register('lang')}>
                  <option value='es'>Español</option>
                  <option value='en'>English</option>
                </Form.Select>
              </Form.Group>

              <Form.Group
                as={Col}
                className='text-center d-flex flex-column justify-content-center align-items-center flex-md-row align-items-md-end gap-md-2 pb-md-2'
              >
                <small>¿Ya estás registrado?</small>
                <Link to='/login'>Iniciar sesión</Link>
              </Form.Group>
            </Row>

            <button type='submit' className={`mt-4 ${styles.regButton}`}>
              Registrarme
            </button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

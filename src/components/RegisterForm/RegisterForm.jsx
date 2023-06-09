import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button, Container, Row, Col, InputGroup } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { passwordCheckValidation } from '../../assets/utils/validations';
import registerImg from '../../assets/nt-white.png';
import styles from './RegisterForm.module.css';
import { createUser } from '../../API/Api';
import { customAlert } from '../../assets/utils/alters';

export default function RegisterForm(props) {
  const { modeDL, textDL, lang } = props;

  const {
    register,
    handleSubmit,
    watch,
    reset,
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

  const password = watch('password');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (register) => {
    const response = await createUser(register);
    if (response === register.email) {
      return customAlert(
        lang.Register.alertErrorTitle,
        `${lang.Register.alertErrorTextInit} "${register.email}" ${lang.Register.alertErrorTextEnd}`,
        'error',
        lang.Register.alertButtonText,
        () => {
          reset({ email: '', password: '', passwordCheck: '' });
        }
      );
    }
    return customAlert(
      lang.Register.alertSuccessTitle,
      lang.Register.alertSuccessText,
      'success',
      lang.Register.alertButtonText,
      () => {
        navigate('/login');
      }
    );
  };

  return (
    <Container fluid className={`bg${modeDL}`}>
      <Row className='d-flex justify-content-center align-items-center'>
        <Col xs={12} className='d-flex justify-content-center my-5'>
          <img
            src={registerImg}
            alt='Nova Tech Logo'
            style={{ width: '100px', height: 'auto' }}
            className={`my-2 me-3 ${styles.regImg}`}
          />
        </Col>
        <Col
          md={6}
          lg={4}
          className={`bgCardBan-${modeDL} text-${textDL} rounded py-3 mb-5`}
        >
          <h2 className='mt-2 mb-4 border-bottom pb-3'>
            {lang.Register.title}
          </h2>
          <Form
            onSubmit={handleSubmit(onSubmit)}
            className='d-flex flex-column gap-2'
          >
            <Row>
              <Form.Group as={Col} className='col-12 col-md-6'>
                <Form.Label>{lang.Register.name}</Form.Label>
                <Form.Control
                  type='text'
                  {...register('name', {
                    required: {
                      value: true,
                      message: lang.Register.nameRequired,
                    },
                    minLength: {
                      value: 2,
                      message: lang.Register.nameMin,
                    },
                    maxLength: {
                      value: 50,
                      message: lang.Register.nameMax,
                    },
                    pattern: {
                      value:
                        /^[a-zA-ZÁÉÍÓÚÑáéíóúñ'-]+(\s[a-zA-ZÁÉÍÓÚÑáéíóúñ'-]+)*$/,
                      message: lang.Register.namePattern,
                    },
                  })}
                />
                {errors.name && (
                  <small className='text-danger'>{errors.name.message}</small>
                )}
              </Form.Group>

              <Form.Group as={Col} className='col-12 col-md-6'>
                <Form.Label>{lang.Register.lastName}</Form.Label>
                <Form.Control
                  type='text'
                  {...register('lastName', {
                    required: {
                      value: true,
                      message: lang.Register.lastNameRequired,
                    },
                    minLength: {
                      value: 2,
                      message: lang.Register.lastNameMin,
                    },
                    maxLength: {
                      value: 50,
                      message: lang.Register.lastNameMax,
                    },
                    pattern: {
                      value:
                        /^[a-zA-ZÁÉÍÓÚÑáéíóúñ'-]+(\s[a-zA-ZÁÉÍÓÚÑáéíóúñ'-]+)*$/,
                      message: lang.Register.lastNamePattern,
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
                <Form.Label>{lang.Register.email}</Form.Label>
                <Form.Control
                  type='email'
                  {...register('email', {
                    required: {
                      value: true,
                      message: lang.Register.emailRequired,
                    },
                    minLength: {
                      value: 5,
                      message: lang.Register.emailMin,
                    },
                    maxLength: {
                      value: 100,
                      message: lang.Register.emailMax,
                    },
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: lang.Register.emailPattern,
                    },
                  })}
                />
                {errors.email && (
                  <small className='text-danger'>{errors.email.message}</small>
                )}
              </Form.Group>
            </Row>

            <Row>
              <Form.Group as={Col} className='col-12 col-md-6'>
                <Form.Label>{lang.Register.password}</Form.Label>
                <Form.Control
                  type={showPassword ? 'text' : 'password'}
                  {...register('password', {
                    required: {
                      value: true,
                      message: lang.Register.passwordRequired,
                    },
                    minLength: {
                      value: 8,
                      message: lang.Register.passwordMin,
                    },
                    maxLength: {
                      value: 50,
                      message: lang.Register.passwordMax,
                    },
                    pattern: {
                      value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,50}$/,
                      message: lang.Register.passwordPattern,
                    },
                  })}
                />
                {errors.password && (
                  <small className='text-danger'>
                    {errors.password.message}
                  </small>
                )}
              </Form.Group>

              <Form.Group as={Col} className='col-12 col-md-6'>
                <Form.Label>{lang.Register.passwordCheck}</Form.Label>
                <InputGroup>
                  <Form.Control
                    className='rounded'
                    type={showPassword ? 'text' : 'password'}
                    {...register('passwordCheck', {
                      required: {
                        value: true,
                        message: lang.Register.passwordRequired,
                      },
                      maxLength: {
                        value: 50,
                        message: lang.Register.passwordMax,
                      },
                      validate: (value) =>
                        passwordCheckValidation(
                          password,
                          value,
                          lang.Register.passwordCheckMatch
                        ),
                    })}
                  />
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
              <Form.Group as={Col} className='col-12 col-md-6'>
                <Form.Label>
                  {lang.Register.language}{' '}
                  <small className='text-secondary'>
                    {lang.Register.smallLanguage}
                  </small>
                </Form.Label>
                <Form.Select {...register('lang')}>
                  <option value='es'>Español</option>
                  <option value='en'>English</option>
                </Form.Select>
              </Form.Group>

              <Form.Group
                as={Col}
                className='col-12 col-md-6 d-flex justify-content-center align-items-center mt-4 mt-md-0 gap-2 flex-md-column'
              >
                <small>{lang.Register.alreadyRegQuest}</small>
                <Link to='/login'>{lang.Register.alreadyRegLink}</Link>
              </Form.Group>
            </Row>

            <button type='submit' className={`mt-3 ${styles.regButton}`}>
              {lang.Register.submitButton}
            </button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

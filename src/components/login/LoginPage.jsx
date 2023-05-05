import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { Link,useNavigate } from 'react-router-dom';
import registerImg from '../../assets/nt-icon.png';
import styles from './LoginPage.module.css';
import axios from 'axios';

export default function LoginPage() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
      lang: 'es',
    },
  });

  const [showPassword, setShowPassword] = useState(false);
  const URL_BASE = import.meta.env.VITE_DB_URL;
  const navigate= useNavigate();
  const onSubmit = async (register) => {
    try {
      const response = await axios.post(`${URL_BASE}/login`, register);
      console.log(response.data);
      navigate('/home');
    } catch (error) {
      console.log(error.response.data);
    }
  }

  return (
    <Container fluid className={``}>
      <Row className='d-flex justify-content-center align-items-center'>
        <Col md={9}  className='d-flex justify-content-center my-4'>
          <img
            src={registerImg}
            alt='Nova Tech Logo'
            style={{ width: '100px', height: 'auto' }}
            className={`my-2 me-3 ${styles.regImg}`}
          />
        </Col>
        <Col md={9} lg={4} className={`bgCardBan text rounded py-3 mb-4`}>
          <h2 className='mt-2 mb-4 border-bottom pb-3'>Login</h2>
          <Form
            onSubmit={handleSubmit(onSubmit)}
            className='d-flex flex-column gap-2'
          >
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
                {errors.password && (
                  <small className='text-danger'>
                    {errors.password.message}
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
                <small>¿Aun no estas registrado?</small>
                <Link to='/login'>Registrate</Link>
              </Form.Group>
            </Row>

            <Row>
              <Form.Group as={Col} className=''>
                <button type='submit' className={`mt-4 ${styles.regButton}`}>
                iniciar sesion
                </button>
              </Form.Group>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
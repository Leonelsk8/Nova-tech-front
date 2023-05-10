import { useState } from 'react';
import { loginApi } from '../../API/Api';
import { useForm } from 'react-hook-form';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import registerImg from '../../assets/nt-white.png';
import styles from './LoginPage.module.css';
import { customAlert } from '../../assets/utils/alters';

export default function LoginPage(props) {
  const { modeDL, textDL, lang, getToken } = props;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
      lang: 'es',
    },
  });

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async (register) => {
      await loginApi(register)
      .then((resp)=>{console.log(resp.data); localStorage.setItem('tokenUser-novatech', resp.data.token); localStorage.setItem('idUser-novatech', resp.data.id) ; customAlert(
        lang.Login.alertSuccessTitle,
        lang.Login.alertSuccessText,
        'success',
        lang.Login.alertButtonText,
        () => {getToken(); window.location.reload();})})
      .catch((error)=>{console.log(error); customAlert(
        lang.Login.alertErrorTitle,
        lang.Login.alertError,
        'error',
        lang.Login.alertErrorButtonText,
        () => {reset({ email: '', password: ''});}
        );
      });
  }

  return (
    <Container fluid className={`bg${modeDL}`}>
      <Row className='d-flex justify-content-center align-items-center'>
        <Col md={9}  className='d-flex justify-content-center my-4'>
          <img
            src={registerImg}
            alt='Nova Tech Logo'
            style={{ width: '100px', height: 'auto' }}
            className={`my-2 me-3 ${styles.regImg}`}
          />
        </Col>
        <Col md={6} lg={4} className={`bgCardBan text rounded py-3 mb-4 bgCardBan-${modeDL} text-${textDL}`}>
          <h2 className='mt-2 mb-4 border-bottom pb-3'>{lang.Login.title}</h2>
          <Form
            onSubmit={handleSubmit(onSubmit)}
            className='d-flex flex-column gap-2'
          >
            <Row>
              <Form.Group as={Col}>
                <Form.Label>{lang.Login.email}</Form.Label>
                <Form.Control
                  type='email'
                  {...register('email', {
                    required: {
                      value: true,
                      message: lang.Login.emailRequired,
                    },
                    minLength: {
                      value: 5,
                      message: lang.Login.emailMin,
                    },
                    maxLength: {
                      value: 100,
                      message: lang.Login.emailMax,
                    },
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message:
                      lang.Login.emailPattern,
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
                <Form.Label>{lang.Login.password}</Form.Label>
                <Form.Control
                  type={showPassword ? 'text' : 'password'}
                  {...register('password', {
                    required: {
                      value: true,
                      message:  lang.Login.passwordRequired,
                    },
                    minLength: {
                      value: 8,
                      message: lang.Login.passwordMin,
                    },
                    maxLength: {
                      value: 50,
                      message:  lang.Login.passwordMax,
                    },
                    pattern: {
                      value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,50}$/,
                      message:  lang.Login.passwordPattern,
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
                {lang.Login.language}{' '}<small className='text-secondary'> {lang.Login.smallLanguage}</small>
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
                <small>{lang.Login.alreadyRegQuest}</small>
                <Link to='/login'>{lang.Login.alreadyRegLink}</Link>
              </Form.Group>
            </Row>

            <Row>
              <Form.Group as={Col} className=''>
                <button type='submit' className={`mt-4 ${styles.regButton}`}>
                {lang.Login.submitButton}
                </button>
              </Form.Group>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
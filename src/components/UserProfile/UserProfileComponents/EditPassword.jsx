/* eslint-disable react/prop-types */
import { Form, Row, Col, Button, InputGroup, Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { checkPassword, editUserPassword } from '../../../API/Api';
import { useState } from 'react';
import { passwordCheckValidation } from '../../../assets/utils/validations';
import { validateUserAlert } from '../../../assets/utils/alters';

const EditPassword = (props) => {
  const { modeDL, textDL, lang, token, id } = props;
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({});

  const password = watch('password');

  const alertInfo = {
    title: lang.userProfile.alertInfo.title,
    inputType: 'password',
    textButton: lang.userProfile.alertInfo.textButton,
    cancelTextButton: lang.userProfile.alertInfo.cancelTextButton,
    errorMessage: lang.userProfile.alertInfo.errorMessage,
    successTitle: lang.userProfile.alertInfo.successTitle,
    successText: lang.userProfile.alertInfo.successText,
    successButtonText: lang.userProfile.alertInfo.successButtonText,
  };

  const onSubmit = async (register) => {
    validateUserAlert(
      register,
      id,
      token,
      checkPassword,
      editUserPassword,
      alertInfo
    );
    reset({ password: '', passwordCheck: '' });
  };
  return (
    <Container className={`bg${modeDL}`}>
      <Row className='d-flex justify-content-center align-items-center'>
        <Col className={`bgCardBan-${modeDL} text-${textDL} py-3`}>
          <h2 className='mb-4'>{lang.userProfile.selectEditPassword}</h2>
          <Form
            onSubmit={handleSubmit(onSubmit)}
            className='d-flex flex-column gap-2'
          >
            <Form.Group as={Col} className='col-12 col-lg-6 mb-3'>
              <Form.Label>
                {lang.userProfile.editUserDataPanel.newPassword}
              </Form.Label>
              <InputGroup>
                <Form.Control
                  className='rounded'
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
              {errors.password && (
                <small className='text-danger'>{errors.password.message}</small>
              )}
            </Form.Group>

            <Form.Group as={Col} className='col-12 col-lg-6 mb-3'>
              <Form.Label>
                {lang.userProfile.editUserDataPanel.newPasswordCheck}
              </Form.Label>

              <Form.Control
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
              {errors.passwordCheck && (
                <small className='text-danger'>
                  {errors.passwordCheck.message}
                </small>
              )}
            </Form.Group>
            <div>
              <Button type='submit' variant='success'>
                {lang.userProfile.editUserDataPanel.button}
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default EditPassword;

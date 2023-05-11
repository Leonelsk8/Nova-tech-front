/* eslint-disable react/prop-types */
import { Form, Row, Col, Button, Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { editUserEmail, checkPassword } from '../../../API/Api';
import { validateUserAlert } from '../../../assets/utils/alters';

const EditEmail = (props) => {
  const { modeDL, textDL, lang, userData, token, id } = props;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: userData.email,
    },
  });

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
      editUserEmail,
      alertInfo
    );
  };

  return (
    <Container className={`bg${modeDL}`}>
      <Row className='d-flex justify-content-center align-items-center'>
        <Col className={`bgCardBan-${modeDL} text-${textDL} py-3`}>
          <h2 className='mb-4'>{lang.userProfile.selectEditEmail}</h2>
          <Form
            onSubmit={handleSubmit(onSubmit)}
            className='d-flex flex-column gap-2'
          >
            <Form.Group as={Col} className='col-lg-6 mb-3'>
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

export default EditEmail;

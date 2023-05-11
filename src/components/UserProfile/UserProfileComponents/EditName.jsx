/* eslint-disable react/prop-types */
import { useForm } from 'react-hook-form';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { editUserName, checkPassword } from '../../../API/Api';
import { validateUserAlert } from '../../../assets/utils/alters';

const EditName = (props) => {
  const { modeDL, textDL, lang, userData, token, id } = props;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: userData.name,
      lastName: userData.lastName,
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
      editUserName,
      alertInfo
    );
  };

  return (
    <Container className={`bg${modeDL}`}>
      <Row className='d-flex  align-items-center'>
        <Col className={`bgCardBan-${modeDL} text-${textDL} py-3`}>
          <h2 className='mb-4'>{lang.userProfile.selectEditName}</h2>
          <Form
            onSubmit={handleSubmit(onSubmit)}
            className='d-flex flex-column gap-2'
          >
            <Row className='gap-lg-2'>
              <Form.Group as={Col} className='col-12 col-md-6 mb-3'>
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

              <Form.Group as={Col} className='col-12 col-md-6 mb-3'>
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

export default EditName;

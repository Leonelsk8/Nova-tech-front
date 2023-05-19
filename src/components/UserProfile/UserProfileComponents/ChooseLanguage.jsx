/* eslint-disable react/prop-types */
import { Form, Row, Col, Button, Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { checkPassword, editUserLanguage } from '../../../API/Api';
import { validateUserAlert } from '../../../assets/utils/alters';

const ChooseLanguage = (props) => {
  const { modeDL, textDL, lang, userData, token, id, langChange } = props;

  const { register, handleSubmit } = useForm({
    defaultValues: {
      lang: userData.lang,
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
      editUserLanguage,
      () => {
        langChange(register.lang);
      },
      alertInfo
    );
  };

  return (
    <Container className={`bg${modeDL}`}>
      <Row className='d-flex justify-content-center align-items-center'>
        <Col className={`bgCardBan-${modeDL} text-${textDL} py-3`}>
          <h2 className='mb-4'>{lang.userProfile.selectChooseLanguage}</h2>
          <Form
            onSubmit={handleSubmit(onSubmit)}
            className='d-flex flex-column gap-2'
          >
            <Form.Group as={Col} className='col-12 col-md-3 col-lg-2 mb-3'>
              <Form.Label>{lang.Register.language} </Form.Label>
              <Form.Select {...register('lang')}>
                <option value='es'>Español</option>
                <option value='en'>English</option>
              </Form.Select>
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

export default ChooseLanguage;

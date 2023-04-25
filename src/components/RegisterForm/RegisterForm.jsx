import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <Container className='my-5 vh-100'>
      <Row className='justify-content-center'>
        <Col sm={12} md={6} lg={3} className='shadow border rounded p-3'>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className='mb-3' controlId='firstName'>
              <Form.Label>First name</Form.Label>
              <Form.Control
                type='text'
                placeholder='Juan'
                {...register('firstName', { required: true, maxLength: 20 })}
                aria-invalid={errors.firstName ? 'true' : 'false'}
              />
              {errors.firstName?.type === 'required' && (
                <p role='alert' className='text-danger'>
                  First name is required
                </p>
              )}
            </Form.Group>

            <Form.Group className='mb-3' controlId='lastName'>
              <Form.Label>Last name</Form.Label>
              <Form.Control
                type='text'
                placeholder='Pérez'
                {...register('lastName', { required: true, maxLength: 20 })}
              />
            </Form.Group>

            <Form.Group className='mb-3' controlId='email'>
              <Form.Label>Email address</Form.Label>
              <Form.Control type='email' placeholder='juan.perez@mail.com' />
              <Form.Text className='text-muted'>
                Well never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className='mb-3' controlId='password'>
              <Form.Label>Password</Form.Label>
              <Form.Control type='password' placeholder='Password' />
            </Form.Group>

            <Form.Group className='mb-3' controlId='confirmPassword'>
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type='password' placeholder='Password' />
            </Form.Group>

            <Button variant='primary' type='submit'>
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default RegisterForm;

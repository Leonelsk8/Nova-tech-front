/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Button, Col, Form, InputGroup } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const CheckPassword = (props) => {
  
  const { modeDL, textDL, lang, token, id } = props;

  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const onSubmit = async (register) => {
    const response = await validateUser(id, register, token);
    console.log(response);
  };

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      className='d-flex flex-column gap-2'
    >
      <Form.Group as={Col} className='col-12 col-md-6 mb-3'>
        <Form.Label>{lang.Register.password}</Form.Label>
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
    </Form>
  );
};

export default CheckPassword;

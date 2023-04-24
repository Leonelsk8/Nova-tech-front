import { useForm } from 'react-hook-form';
import { Form } from 'react-bootstrap';
import { useState } from 'react';

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(true);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleClick = () => {
    if (showPassword) {
      return setShowPassword(!showPassword);
    }
    return setShowPassword(!showPassword
      )
  };
  console.log(showPassword);

  const onSubmit = (data) => console.log(data);

  console.log(watch('example')); // watch input value by passing the name of it

  return (
    <div>
      <Form className='container' onSubmit={handleSubmit(onSubmit)}>
        <input {...register('email')} />

        <input type='password' {...register('password', { required: true })} />
        <button onClick={handleClick}>
          <span>👁</span>
        </button>
        {errors.exampleRequired && <span>This field is required</span>}

        <input type='submit' />
      </Form>
    </div>
  );
};

export default RegisterForm;

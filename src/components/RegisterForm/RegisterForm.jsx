import { useForm } from 'react-hook-form';
import Form from 'react-bootstrap';

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(watch('example')); // watch input value by passing the name of it

  return (
    <div>
      {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
      <Form className='container' onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <input defaultValue='test' {...register('example')} />

        {/* include validation with required or other standard HTML validation rules */}
        <input {...register('exampleRequired', { required: true })} />
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}

        <input type='submit' />
      </Form>
    </div>
  );
}

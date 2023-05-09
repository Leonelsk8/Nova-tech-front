import RegisterForm from '../components/RegisterForm/RegisterForm';

const Register = (props) => {
  const { modeDL, textDL, lang } = props;
  return <RegisterForm modeDL={modeDL} textDL={textDL} lang={lang} />;
};

export default Register;

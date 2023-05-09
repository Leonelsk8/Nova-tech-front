 import LoginPage from '../components/login/LoginPage';

const Login = (props) => {
  const { modeDL, textDL, lang } = props;
  return <LoginPage modeDL={modeDL} textDL={textDL} lang={lang} />;
};

export default Login;
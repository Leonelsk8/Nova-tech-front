 import LoginPage from '../components/login/LoginPage';

const Login = (props) => {
  const { modeDL, textDL, lang, getToken } = props;
  return <LoginPage modeDL={modeDL} textDL={textDL} lang={lang} getToken={getToken} />;
};

export default Login;
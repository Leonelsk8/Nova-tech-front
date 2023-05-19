 import LoginPage from '../components/login/LoginPage';

const Login = (props) => {
  const { modeDL, textDL, lang, getToken, langChange } = props;
  return <LoginPage modeDL={modeDL} textDL={textDL} lang={lang} getToken={getToken} langChange={langChange} />;
};

export default Login;
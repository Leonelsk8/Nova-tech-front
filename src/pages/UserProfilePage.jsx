
import UserProfile from '../components/UserProfile/UserProfile';

const UserProfilePage = (props) => {
  const { modeDL, textDL, lang, token, langChange } = props;
  return <UserProfile modeDL={modeDL} textDL={textDL} lang={lang} token={token} langChange={langChange} />;
};

export default UserProfilePage;

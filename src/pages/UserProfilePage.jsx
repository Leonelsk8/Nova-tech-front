/* eslint-disable react/prop-types */
import UserProfile from '../components/UserProfile/UserProfile';

const UserProfilePage = (props) => {
  const { modeDL, textDL, lang } = props;
  return <UserProfile modeDL={modeDL} textDL={textDL} lang={lang} />;
};

export default UserProfilePage;

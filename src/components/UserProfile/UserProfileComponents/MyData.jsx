import { ListGroup } from 'react-bootstrap';

const MyData = (props) => {
  const { modeDL, textDL, lang, userData, formattedDate } = props;

  return (
    <>
      <h2 className='mb-4'>{lang.userProfile.sectionMyDataTitle}</h2>
      <ListGroup variant='flush'>
        <ListGroup.Item className={`bg-${modeDL} text-${textDL}`}>
          {lang.userProfile.userDataPanel.name}:{' '}
          <span className={`text-${textDL} ms-1`}>{userData.name}</span>
        </ListGroup.Item>
        <ListGroup.Item className={`bg-${modeDL} text-${textDL}`}>
          {lang.userProfile.userDataPanel.lastName}:{' '}
          <span className={`text-${textDL} ms-1`}>{userData.lastName}</span>
        </ListGroup.Item>
        <ListGroup.Item className={`bg-${modeDL} text-${textDL}`}>
          {lang.userProfile.userDataPanel.email}:{' '}
          <span className={`text-${textDL} ms-1`}>{userData.email}</span>
        </ListGroup.Item>
        <ListGroup.Item className={`bg-${modeDL} text-${textDL}`}>
          {lang.userProfile.userDataPanel.language}:{' '}
          <span className={`text-${textDL} ms-1`}>{`"${userData.lang}"`}</span>
        </ListGroup.Item>
        <ListGroup.Item className={`bg-${modeDL} text-${textDL}`}>
          {lang.userProfile.userDataPanel.createdAt}:{' '}
          <span className={`text-${textDL} ms-1`}>{formattedDate}</span>
        </ListGroup.Item>
      </ListGroup>
    </>
  );
};

export default MyData;

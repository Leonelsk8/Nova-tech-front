/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import style from './UserProfile.module.css';
import MyData from './UserProfileComponents/MyData';
import MyCart from './UserProfileComponents/MyCart';
import EditName from './UserProfileComponents/EditName';
import EditEmail from './UserProfileComponents/EditEmail';
import EditPassword from './UserProfileComponents/EditPassword';
import ChooseLanguage from './UserProfileComponents/ChooseLanguage';
import Loader from '../loader/Loader';
import { getUserById } from '../../API/Api';
import { useParams } from 'react-router-dom';

const UserProfile = (props) => {
  const { modeDL, textDL, lang, token } = props;
  const [panel, setPanel] = useState(1);
  const [userData, setUserData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getUserById(id, token)
      .then((response) => {
        setUserData(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, [id, token, panel]);
  const formattedDate = new Date(userData.createdAt).toLocaleString();

  return (
    <>
      <Container fluid className={`bg${modeDL} py-5 sectOrigin vh-100`}>
        <Row className='px-2 px-md-4 mb-3'>
          <Col
            xs={12}
            md={12}
            lg={12}
            className={`text-center rounded text-white p-3 bgFootButt-${modeDL}`}
          >
            <h2>{lang.userProfile.header}</h2>
          </Col>
        </Row>
        <Row>
          <Col
            xs={12}
            md={12}
            lg={3}
            className={`bgFootButt-${modeDL} d-md-flex justify-content-md-around d-lg-block px-0 text-white py-5`}
          >
            <div className='d-flex flex-column'>
              <h3 className='ps-3'>{lang.userProfile.sectionMyDataTitle}</h3>
              <button
                className={
                  panel === 1
                    ? `mt-3 ps-3 py-2 ${style.buttPanelActive}`
                    : `mt-3 ps-3 py-2 ${style.buttPanel}`
                }
                onClick={() => setPanel(1)}
              >
                <i className='bi bi-person'></i> {lang.userProfile.selectMyData}
              </button>
              <button
                className={
                  panel === 2
                    ? `mt-3 ps-3 py-2 ${style.buttPanelActive}`
                    : `mt-3 ps-3 py-2 ${style.buttPanel}`
                }
                onClick={() => setPanel(2)}
              >
                <i className='bi bi-cart'></i> {lang.userProfile.selectCart}
              </button>
            </div>
            <div className='d-flex flex-column'>
              <h3 className='ps-3 mt-5 mt-md-0 mt-lg-5'>
                {lang.userProfile.sectionEditDataTitle}
              </h3>
              <button
                className={
                  panel === 3
                    ? `mt-3 ps-3 py-2 ${style.buttPanelActive}`
                    : `mt-3 ps-3 py-2 ${style.buttPanel}`
                }
                onClick={() => setPanel(3)}
              >
                <i className='bi bi-pencil-square'></i>{' '}
                {lang.userProfile.selectEditName}
              </button>
              <button
                className={
                  panel === 4
                    ? `mt-3 ps-3 py-2 ${style.buttPanelActive}`
                    : `mt-3 ps-3 py-2 ${style.buttPanel}`
                }
                onClick={() => setPanel(4)}
              >
                <i className='bi bi-pencil-square'></i>{' '}
                {lang.userProfile.selectEditEmail}
              </button>
              <button
                className={
                  panel === 5
                    ? `mt-3 ps-3 py-2 ${style.buttPanelActive}`
                    : `mt-3 ps-3 py-2 ${style.buttPanel}`
                }
                onClick={() => setPanel(5)}
              >
                <i className='bi bi-pencil-square'></i>{' '}
                {lang.userProfile.selectEditPassword}
              </button>
              <button
                className={
                  panel === 6
                    ? `mt-3 ps-3 py-2 ${style.buttPanelActive}`
                    : `mt-3 ps-3 py-2 ${style.buttPanel}`
                }
                onClick={() => setPanel(6)}
              >
                <i className='bi bi-pencil-square'></i>{' '}
                {lang.userProfile.selectChooseLanguage}
              </button>
            </div>
          </Col>
          <Col
            xs={12}
            md={12}
            lg={9}
            className={`bgCardBan-${modeDL} px-3 py-5 px-md-5 text-${textDL}`}
          >
            {panel === 1 ? (
              isLoading ? (
                <Loader />
              ) : (
                <MyData
                  modeDL={modeDL}
                  textDL={textDL}
                  lang={lang}
                  userData={userData}
                  token={token}
                  id={id}
                  formattedDate={formattedDate}
                />
              )
            ) : panel === 2 ? (
              <MyCart />
            ) : panel === 3 ? (
              <EditName
                modeDL={modeDL}
                textDL={textDL}
                lang={lang}
                userData={userData}
                token={token}
                id={id}
              />
            ) : panel === 4 ? (
              <EditEmail
                modeDL={modeDL}
                textDL={textDL}
                lang={lang}
                userData={userData}
                token={token}
                id={id}
              />
            ) : panel === 5 ? (
              <EditPassword
                modeDL={modeDL}
                textDL={textDL}
                lang={lang}
                userData={userData}
                token={token}
                id={id}
              />
            ) : (
              <ChooseLanguage
                modeDL={modeDL}
                textDL={textDL}
                lang={lang}
                userData={userData}
                token={token}
                id={id}
              />
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default UserProfile;

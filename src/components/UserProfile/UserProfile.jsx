/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import style from './UserProfile.module.css';
import MyData from './UserProfileComponents/MyData';
import MyCart from './UserProfileComponents/MyCart';
import FormEditName from './UserProfileComponents/FormEditName';
import FormEditAccessData from './UserProfileComponents/FormEditAccessData';
import ChooseLanguage from './UserProfileComponents/ChooseLanguage';

const UserProfile = (props) => {
  // const userLog = {
  //   name: 'Iván',
  //   lastName: 'Ecónomo',
  //   email: 'ivan.economo39@gmail.com',
  //   password: 'Test1234',
  //   lang: 'es',
  //   cart: 'vacío',
  // };

  const { modeDL, textDL } = props;
  const [panel, setPanel] = useState(1);

  return (
    <>
      <Container fluid className={`bg${modeDL} py-5 sectOrigin`}>
        <Row className='px-2 px-md-4 mb-3'>
          <Col
            xs={12}
            md={12}
            lg={12}
            className={`text-center rounded text-white p-3 bgFootButt-${modeDL}`}
          >
            <h2>Hola Usuario</h2>
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
              <h3 className='ps-3'>Mis datos</h3>
              <button
                className={
                  panel === 1
                    ? `mt-3 ps-3 py-2 ${style.buttPanelActive}`
                    : `mt-3 ps-3 py-2 ${style.buttPanel}`
                }
                onClick={() => setPanel(1)}
              >
                <i className="bi bi-person"></i> Ver datos
              </button>
              <button
                className={
                  panel === 2
                    ? `mt-3 ps-3 py-2 ${style.buttPanelActive}`
                    : `mt-3 ps-3 py-2 ${style.buttPanel}`
                }
                onClick={() => setPanel(2)}
              >
                <i className="bi bi-cart"></i> Carrito
              </button>
            </div>
            <div className='d-flex flex-column'>
              <h3 className='ps-3 mt-5 mt-md-0 mt-lg-5'>Editar datos</h3>
              <button
                className={
                  panel === 3
                    ? `mt-3 ps-3 py-2 ${style.buttPanelActive}`
                    : `mt-3 ps-3 py-2 ${style.buttPanel}`
                }
                onClick={() => setPanel(3)}
              >
                <i className="bi bi-pencil-square"></i> Nombre y Apellido
              </button>
              <button
                className={
                  panel === 4
                    ? `mt-3 ps-3 py-2 ${style.buttPanelActive}`
                    : `mt-3 ps-3 py-2 ${style.buttPanel}`
                }
                onClick={() => setPanel(4)}
              >
                <i className="bi bi-pencil-square"></i> Datos de Acceso
              </button>
              <button
                className={
                  panel === 5
                    ? `mt-3 ps-3 py-2 ${style.buttPanelActive}`
                    : `mt-3 ps-3 py-2 ${style.buttPanel}`
                }
                onClick={() => setPanel(5)}
              >
                <i className="bi bi-pencil-square"></i> Idioma preferido
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
              <MyData />
            ) : panel === 2 ? (
              <MyCart />
            ) : panel === 3 ? (
              <FormEditName />
            ) : panel === 4 ? (
              <FormEditAccessData />
            ) : panel === 5 ? (
              <ChooseLanguage />
            ) : (
              <hr />
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default UserProfile;

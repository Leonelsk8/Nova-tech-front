import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import style from './admin.module.css';
import CreateProduct from './products/CreateProduct';

const Panel = (props) => {
  const {modeDL, textDL, lang} = props

  return (
    <>
      <Container fluid className={`bg${modeDL} py-5 sectOrigin`}>
        <Row className='px-2 px-md-4 mb-3'>
          <Col xs={12} md={12} lg={12} className={`text-center rounded text-white p-3 bgFootButt-${modeDL}`}>
            <h2>Bienvenido admin</h2>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12} lg={3} className={`bgFootButt-${modeDL} d-md-flex justify-content-md-around d-lg-block px-0 text-white py-5`}>
            <div className='d-flex flex-column'>
              <h3 className='ps-3'>Productos</h3>
              <button className={`mt-3 ps-3 py-2 ${style.buttPanel}`}><i className="bi bi-bag-plus"></i> Crear producto</button>
              <button className={`mt-3 ps-3 py-2 ${style.buttPanel}`}><i className="bi bi-bag-check"></i> Editar producto</button>
              <button className={`mt-3 ps-3 py-2 ${style.buttPanel}`}><i className="bi bi-bag-dash"></i> Eliminar producto</button>
              <button className={`mt-3 ps-3 py-2 ${style.buttPanel}`}><i className="bi bi-bag-heart"></i> Modificar ofertas</button>
            </div>
            <div className='d-flex flex-column'>
              <h3 className='ps-3 mt-5 mt-md-0 mt-lg-5'>Usuarios</h3>
              <button className={`mt-3 ps-3 py-2 ${style.buttPanel}`}><i className="bi bi-people"></i> Listar usuarios</button>
              <button className={`mt-3 ps-3 py-2 ${style.buttPanel}`}><i className="bi bi-person-dash"></i> Suspender usuario</button>
              <button className={`mt-3 ps-3 py-2 ${style.buttPanel}`}><i className="bi bi-chat-left-dots"></i> Mensajes</button>
            </div>

          </Col>
          <Col xs={12} md={12} lg={9} className={`bgCardBan-${modeDL} px-3 py-5 px-md-5 text-${textDL}`}>
            <CreateProduct modeDL={modeDL} textDL={textDL} lang={lang} style={style}/>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Panel
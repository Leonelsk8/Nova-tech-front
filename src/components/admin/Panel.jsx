import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import style from './admin.module.css';
import CreateProduct from './products/CreateProduct';

const Panel = (props) => {
  const {modeDL, textDL, lang} = props

  return (
    <>
      <Container fluid className={`bg${modeDL} py-5`}>
        <Row className='px-4 mb-3'>
          <Col lg={12} className={`text-center rounded text-white p-3 bgFootButt-${modeDL}`}>
            <h2>Bienvenido admin</h2>
          </Col>
        </Row>
        <Row>
          <Col lg={3} className={`bgFootButt-${modeDL} px-0 text-white py-5 rounded-end`}>
            <h3 className='ps-3'>Productos</h3>
            <div className='d-flex flex-column'>
              <button className={`mt-3 ps-3 py-2 ${style.buttPanel}`}><i className="bi bi-bag-plus"></i> Crear producto</button>
              <button className={`mt-3 ps-3 py-2 ${style.buttPanel}`}><i className="bi bi-bag-check"></i> Editar producto</button>
              <button className={`mt-3 ps-3 py-2 ${style.buttPanel}`}><i className="bi bi-bag-dash"></i> Eliminar producto</button>
              <button className={`mt-3 ps-3 py-2 ${style.buttPanel}`}><i className="bi bi-bag-heart"></i> Modificar ofertas</button>
            </div>
            <h3 className='ps-3 mt-5'>Usuarios</h3>
            <div className='d-flex flex-column'>
              <button className={`mt-3 ps-3 py-2 ${style.buttPanel}`}><i className="bi bi-people"></i> Listar usuarios</button>
              <button className={`mt-3 ps-3 py-2 ${style.buttPanel}`}><i className="bi bi-person-dash"></i> Suspender usuario</button>
              <button className={`mt-3 ps-3 py-2 ${style.buttPanel}`}><i className="bi bi-chat-left-dots"></i> Mensajes</button>
            </div>

          </Col>
          <Col lg={9} className={`bgCardBan-${modeDL} py-5 px-5 text-${textDL}`}>
            <CreateProduct modeDL={modeDL} textDL={textDL} lang={lang} style={style}/>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Panel
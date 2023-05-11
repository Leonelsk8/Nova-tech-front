import{ Container, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import style from './NotFound.module.css';

const NotFound = (props) => {
  const { modeDL, textDL, lang } = props;
  return (
    <div className={`${style.body} d-flex justify-content-center align-items-center`}>
      <Container className='md-12 '>
        <Row>
          <Col md={{ span: 6, offset: 3 }} className='text-center'>
            <img className={`${style.img404}`} src='/img/error.png' alt='error 404' />
            <h2 className={`${style.error}`} > Estas en el camino Incorrecto</h2>
            <p className={`${style.error}`}>
              Regresa al <Link to='Routes.Home' className={`${style.inicio}`}>Inicio</Link>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  ); 
};

export default NotFound;

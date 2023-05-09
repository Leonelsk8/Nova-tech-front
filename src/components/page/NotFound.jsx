import { Container, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NotFount.css';

const NotFound = () => {
  return (
    <div className='container md-12 ms-6'>
        <Row className='mt-5'>
          <Col md={{ span: 6, offset: 3 }} className='text-center'>
            <img className='img' src='/img/error.png' alt='error 404' />
            <h2> Estas en el camino Incorrecto</h2>
            <p>
              Regresa al <Link to='Routes.Home' className='inicio'>Inicio</Link>
            </p>
          </Col>
        </Row>
    </div>
  ); 
};

export default NotFound;

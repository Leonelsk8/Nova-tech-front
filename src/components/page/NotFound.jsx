import { Container, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NotFount.css';

const NotFound = () => {
  return (
    <div className>
      <Container className>
        <Row className='mt-5'>
          <Col md={{ span: 6, offset: 3 }} className='text-center'>
            <img className='img' src='/img/error.png' alt='error 404' />
            <h2> estas en el camino Incorrecto</h2>
            <p>
              Regresa al <Link to='Routes.Home'>Inicio</Link>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NotFound;

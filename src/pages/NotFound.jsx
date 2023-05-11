import{ Container, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import style from './NotFound.module.css';
import imgNotFound from '../assets/404.png'

const NotFound = (props) => {
  const { modeDL, textDL, lang } = props;
  return (
    <div className={`bgFootButt-${modeDL} d-flex justify-content-center align-items-center`}>
      <Container className='mt-5 mb-5'>
        <Row>
          <Col md={{ span: 6, offset: 3 }} className='text-center text-white'>
            <img className={`${style.img404}`} src={imgNotFound} alt='error 404' />
            <h2 className={`${style.error} mt-2`} >{lang.notFound.title}</h2>
            <p className={`${style.error} mt-2 mb-5`}>
              {lang.notFound.reg} <Link to='/home' className={`butt butt-${modeDL} bgFootButt-${modeDL} text-white text-decoration-none p-2`}>{lang.notFound.butt}</Link>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  ); 
};

export default NotFound;

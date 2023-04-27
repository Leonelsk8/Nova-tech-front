import React from 'react';
import {Container ,Col,Row, Dropdown , Image} from 'react-bootstrap';
import Card from './Cards';
import style from './store.module.css';
import img1 from '../../assets/img1Bann.jpg';
import img2 from '../../assets/img2Bann.jpg';
import img3 from '../../assets/img3Bann.jpg';

const Store = (props) => {
  const lang = props.lang;
  return (
    <>
      <Container fluid className='pt-5'>
        <Row>
          <Col className='bgCardBan-Light py-5' lg={12}>
            <h2 className='text-center mb-3'>Todo lo que necesitas para vivir a gusto</h2>
            <Row className='justify-content-center'>
              <Col lg={3}>
                <div>
                  <Image src={img2} width={'100%'}></Image>
                  <p className='text-center mt-2'>Ofrecemos electrodomésticos con diseños elegantes y modernos que aportan una apariencia sofisticada a tu casa o negocio.</p>
                </div>
              </Col>
              <Col lg={3}>
                <div>
                  <Image src={img1} width={'100%'}></Image>
                  <p className='text-center mt-2'>Ofrecemos las mejores marcas que garantizan la calidad y la confiabilidad necesaria.</p>
                </div>
              </Col>
              <Col lg={3}>
                <div>
                  <Image src={img3} width={'100%'}></Image>
                  <p className='text-center mt-2'>Tenemos una amplia selección de electrodomésticos de última generación para satisfacer todas tus necesidades.</p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>

      <Container fluid className="py-5">
        <Row>
          <Col className={`bgFootButt-Light text-white py-4`} lg={3}>
            <div>
              <h3>{lang.Store.search}</h3>
              <div className="mb-3 d-flex">
                <input type="text" className="form-control" placeholder="Search"/>
                <button className='bgNav-Light butt text-white'>Buscar</button>
              </div>
            </div>
            <div>
              <h3 className="mt-4">{lang.Store.category}</h3>
              <div>
                <Dropdown>
                  <Dropdown.Toggle className={style.dropp} variant="secondary" id="dropdown-basic">
                    Computadoras
                  </Dropdown.Toggle>

                  <Dropdown.Menu className={`${style.droppmenu}`}>
                    <Dropdown.Item className={`text-white ${style.dropitem}`} href="#/catt">Completas</Dropdown.Item>
                    <Dropdown.Item className={`text-white ${style.dropitem}`} href="#/catt">Hardware</Dropdown.Item>
                    <Dropdown.Item className={`text-white ${style.dropitem}`} href="#/catt">Perifericos</Dropdown.Item>
                    <Dropdown.Item className={`text-white ${style.dropitem}`} href="#/catt">Notebooks</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown>
                  <Dropdown.Toggle className={style.dropp} variant="secondary" id="dropdown-basic">
                    TV
                  </Dropdown.Toggle>

                  <Dropdown.Menu className={`${style.droppmenu}`}>
                    <Dropdown.Item className={`text-white ${style.dropitem}`} href="#/action-1">Samsung</Dropdown.Item>
                    <Dropdown.Item className={`text-white ${style.dropitem}`} href="#/action-2">BGH</Dropdown.Item>
                    <Dropdown.Item className={`text-white ${style.dropitem}`} href="#/action-3">LG</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown>
                  <Dropdown.Toggle className={style.dropp} variant="secondary" id="dropdown-basic">
                    Celulares
                  </Dropdown.Toggle>

                  <Dropdown.Menu className={`${style.droppmenu}`}>
                    <Dropdown.Item className={`text-white ${style.dropitem}`} href="#/action-1">Samsung</Dropdown.Item>
                    <Dropdown.Item className={`text-white ${style.dropitem}`} href="#/action-2">Motorola</Dropdown.Item>
                    <Dropdown.Item className={`text-white ${style.dropitem}`} href="#/action-3">Alcatel</Dropdown.Item>
                    <Dropdown.Item className={`text-white ${style.dropitem}`} href="#/action-3">Iphone</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown>
                  <Dropdown.Toggle className={style.dropp} variant="secondary" id="dropdown-basic">
                    Audio
                  </Dropdown.Toggle>

                  <Dropdown.Menu className={`${style.droppmenu}`}>
                    <Dropdown.Item className={`text-white ${style.dropitem}`} href="#/action-1">Parlantes</Dropdown.Item>
                    <Dropdown.Item className={`text-white ${style.dropitem}`} href="#/action-2">Auriculares</Dropdown.Item>
                    <Dropdown.Item className={`text-white ${style.dropitem}`} href="#/action-3">Microfonos</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown>
                  <Dropdown.Toggle className={style.dropp} variant="secondary" id="dropdown-basic">
                    Heladeras
                  </Dropdown.Toggle>

                  <Dropdown.Menu className={`${style.droppmenu}`}>
                    <Dropdown.Item className={`text-white ${style.dropitem}`} href="#/action-1">Freezer</Dropdown.Item>
                    <Dropdown.Item className={`text-white ${style.dropitem}`} href="#/action-2">Heladeras</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown>
                  <Dropdown.Toggle className={style.dropp} variant="secondary" id="dropdown-basic">
                    Climatización
                  </Dropdown.Toggle>

                  <Dropdown.Menu className={`${style.droppmenu}`}>
                    <Dropdown.Item className={`text-white ${style.dropitem}`} href="#/action-1">Aire acondicionados</Dropdown.Item>
                    <Dropdown.Item className={`text-white ${style.dropitem}`} href="#/action-2">Estufas</Dropdown.Item>
                    <Dropdown.Item className={`text-white ${style.dropitem}`} href="#/action-2">Ventiladores</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown>
                  <Dropdown.Toggle className={style.dropp} variant="secondary" id="dropdown-basic">
                    Tablets
                  </Dropdown.Toggle>

                  <Dropdown.Menu className={`${style.droppmenu}`}>
                    <Dropdown.Item className={`text-white ${style.dropitem}`} href="#/action-1">LG</Dropdown.Item>
                    <Dropdown.Item className={`text-white ${style.dropitem}`} href="#/action-2">Noga</Dropdown.Item>
                    <Dropdown.Item className={`text-white ${style.dropitem}`} href="#/action-2">BGH</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
          </Col>
          <Col lg={9}>
            <Row>
              <Col lg={3}><Card styles={style}/></Col>
              <Col lg={3}><Card styles={style}/></Col>
              <Col lg={3}><Card styles={style}/></Col>
              <Col lg={3}><Card styles={style}/></Col>
              
            </Row>
          </Col>
        </Row>
      </Container>
    
    </>
  )
}

export default Store
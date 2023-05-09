import React from 'react';
import { Navbar, Container, Nav, NavDropdown, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../../assets/novatechLogo.png';
import engImg from '../../assets/en.webp';
import espImg from '../../assets/es.webp';

const Header = (props) => {
  const {modeDLchange, modeDL, lang, langChange} = props;

  const handleChangeLang = (event)=> {
    const value = event.target.value;
    langChange(value);
  }

  return (
    <>
      <Navbar className={`bgNav-${modeDL} py-3 border-bottom border-1 border-white`} expand="lg" variant='dark'>
        <Container fluid>
          <Link className='text-decoration-none text-white' to='/home'>
            <img src={Logo} width={'200px'}></img>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className='me-auto mt-md-2 mt-lg-0 fw-bold align-items-lg-center'>
              <Link className='text-decoration-none linkNav-light ms-lg-3 me-lg-3' to='/home'>{lang.Navbar.home}</Link>
              <Link className='text-decoration-none linkNav-light ms-lg-1 me-lg-3' to='/aboutus'>{lang.Navbar.about}</Link>
              <Link className='text-decoration-none linkNav-light mt-md-2 mt-lg-0 me-lg-3' to='/contact'>{lang.Navbar.contact}</Link>
              <Link className='text-decoration-none linkNav-light mt-md-2 mt-lg-0' to='/panel-admin'>{lang.Navbar.panelAdmin}</Link>
            </Nav>
            <Nav className='ms-auto fw-bold align-items-md-start align-items-lg-center'>
              <Link className='text-decoration-none linkNav-light mt-md-2 mt-lg-0 me-lg-3' to='/login'>{lang.Navbar.login}</Link>
              <Link className='text-decoration-none linkNav-light mt-md-2 mt-lg-0' to='/register'>{lang.Navbar.register}</Link>
              <Link className='text-decoration-none linkNav-light d-none' to='/profile'>{lang.Navbar.profile}</Link>
              <div className='ms-lg-3 mt-md-2 mt-lg-0'>
                <label className="interruptor">
                  <input type="checkbox" onClick={()=>{modeDLchange()}} id="modeDarkLight"/>
                  <span><ion-icon name="moon-outline" class="moon"></ion-icon></span>
                </label>
              </div>
              <div className='lang-div mt-md-2 mt-lg-0 d-flex align-items-center ms-lg-2'>
                <label htmlFor="Select-Lang" className='pe-1'><img src={lang.Languaje.lang ==='es' ? espImg : engImg} width='25px' alt="langimg"/></label>
                <select onChange={handleChangeLang} className='lang-select' id='Select-Lang'>
                  <option value="es">es</option>
                  <option value="en">en</option>
                </select>
              </div>
            </Nav>
          </Navbar.Collapse>

        </Container>
      </Navbar>
    </>
  );
};

export default Header;
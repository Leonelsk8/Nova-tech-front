import React from 'react';
import { Navbar, Container, Nav, NavDropdown, } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../../assets/novatechLogo.png';
import engImg from '../../assets/en.webp';
import espImg from '../../assets/es.webp';
import {adminValidate} from '../../assets/utils/validations';

const Header = (props) => {
  const {modeDLchange, modeDL, lang, langChange, token, closeSesion} = props;
  const location = useLocation();
  const handleChangeLang = (event)=> {
    const value = event.target.value;
    langChange(value);
  }
  const userId = localStorage.getItem('id');
  

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
              <Link className={`text-decoration-none ${location.pathname === '/home' ? 'linkActive' : 'linkNav-light'} ms-lg-3 me-lg-3`} to='/home'>{lang.Navbar.home}</Link>
              <Link className={`text-decoration-none ${location.pathname === '/aboutus' ? 'linkActive' : 'linkNav-light'} ms-lg-1 me-lg-3`} to='/aboutus'>{lang.Navbar.about}</Link>
              <Link className={`text-decoration-none ${location.pathname === '/contact' ? 'linkActive' : 'linkNav-light'} mt-md-2 mt-lg-0 me-lg-3`} to='/contact'>{lang.Navbar.contact}</Link>
              {
                adminValidate(token) ? <Link className={`text-decoration-none ${location.pathname === '/panel-admin' ? 'linkActive' : 'linkNav-light'} mt-md-2 mt-lg-0`} to='/panel-admin'>{lang.Navbar.panelAdmin}</Link> : <div className='d-none'></div>
              }
              
            </Nav>
            <Nav className='ms-auto fw-bold align-items-md-start align-items-lg-center'>
              {
                token === null ? 
                <><Link className={`text-decoration-none ${location.pathname === '/login' ? 'linkActive' : 'linkNav-light'} mt-md-2 mt-lg-0 me-lg-3`} to='/login'>{lang.Navbar.login}</Link>
                <Link className={`text-decoration-none ${location.pathname === '/register' ? 'linkActive' : 'linkNav-light'} mt-md-2 mt-lg-0`} to='/register'>{lang.Navbar.register}</Link></> 
                :
                <><Link className={`text-decoration-none ${location.pathname === `/profile/${userId}` ? 'linkActive' : 'linkNav-light'} mt-md-2 mt-lg-0 me-lg-3`} to={`/profile/${userId}`}>{lang.Navbar.profile}</Link>
                <Link className='text-decoration-none linkNav-light mt-md-2 mt-lg-0' onClick={() => closeSesion()} to='/home'>{lang.Navbar.closeSes}</Link></>
                
              }
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
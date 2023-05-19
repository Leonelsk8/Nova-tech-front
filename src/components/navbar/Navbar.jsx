
import {useState} from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../../assets/novatechLogo.png';
import engImg from '../../assets/en.webp';
import espImg from '../../assets/es.webp';
import {adminValidate} from '../../assets/utils/validations';
import style from './navbar.module.css';
import Shopcart from '../shopcart/Shopcart'

const Header = (props) => {
  const {modeDLchange, modeDL, textDL, lang, langChange, token, closeSesion} = props;
  const [cartOn, setCartOn] = useState(0);
  const location = useLocation();
  const handleChangeLang = (event)=> {
    const value = event.target.value;
    langChange(value);
  }
  const userId = localStorage.getItem('idUser-novatech');
  
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
            <Nav className='ms-auto fw-bold align-items-start align-items-lg-center'>
              {
                token === null ? 
                <><Link className={`text-decoration-none ${location.pathname === '/login' ? 'linkActive' : 'linkNav-light'} mt-md-2 mt-lg-0 me-lg-3`} to='/login'>{lang.Navbar.login}</Link>
                <Link className={`text-decoration-none ${location.pathname === '/register' ? 'linkActive' : 'linkNav-light'} mt-md-2 mt-lg-0`} to='/register'>{lang.Navbar.register}</Link></> 
                :
                <><button className={`${style.cartShop} text-start mt-md-2 mt-lg-0 me-lg-3`} onClick={()=>setCartOn(1)}><i className="bi bi-cart2"></i></button>
                <Link className={`text-decoration-none ${location.pathname === `/profile/${userId}` ? 'linkActive' : 'linkNav-light'} mt-md-2 mt-lg-0 me-lg-3`} to={`/profile/${userId}`}>{lang.Navbar.profile}</Link>
                <Link className='text-decoration-none linkNav-light mt-md-2 mt-lg-0' onClick={() => closeSesion()} to='/login'>{lang.Navbar.closeSes}</Link></>
              }
              <div className='ms-lg-3 mt-md-2 mt-lg-0'>
                <label className="interruptor">
                  <input type="checkbox" onChange={()=>{modeDLchange()}} id="modeDarkLight" checked={modeDL === 'dark' ? true : false}/>
                  <span><ion-icon name="moon-outline" class="moon"></ion-icon></span>
                </label>
              </div>
              <div className='lang-div mt-md-2 mt-lg-0 d-flex align-items-center ms-lg-2'>
                <label htmlFor="Select-Lang" className='pe-1'><img src={lang.Languaje.lang ==='es' ? espImg : engImg} width='25px' alt="langimg"/></label>
                <select onChange={handleChangeLang} className='lang-select' id='Select-Lang' value={lang.Languaje.lang}>
                  <option value="es">es</option>
                  <option value="en">en</option>
                </select>
              </div>
            </Nav>
          </Navbar.Collapse>

        </Container>

        {
          cartOn === 1 ? 
            <div className={`d-flex justify-content-end ${style.cartRow} p-0`} style={{ zIndex: 2}}>
              <div className={`col-12 col-lg-7 ${style.cartCol} py-5 px-3 animate__animated animate__fadeInRight`}>
                <Shopcart textDL={textDL} lang={lang} modeDL={modeDL} token={token} setCartOn={setCartOn} style={style}/>
                
              </div>
            </div> :
          <div className='d-none'></div>
        }
      </Navbar>
    </>
  );
};

export default Header;
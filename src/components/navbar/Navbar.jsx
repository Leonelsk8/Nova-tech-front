import { Navbar, Container, Nav, NavDropdown, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../../assets/novatechLogo.png';

const Header = (props) => {
  const {modeDLchange, modeDL} = props;

  return (
    <>
      <Navbar className={`bgNav-${modeDL} px-5 py-3 border-bottom border-1 border-white`} expand="lg" variant='dark'>
        <Container fluid>
          <Link className='text-decoration-none text-white' to='/home'>
            <img src={Logo} width={'200px'}></img>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className='me-auto fw-bold align-items-center'>
              <Link className='text-decoration-none linkNav-light ms-3 me-2' to='/home'>Inicio</Link>
              <NavDropdown className="linkNav-light" title='servicios' id='my-nav'>
                <NavDropdown.Header>Publicaciones</NavDropdown.Header>
                <NavDropdown.Item href='#'>Crear publicacion</NavDropdown.Item>
                <NavDropdown.Item href='#'>Editar publicacion</NavDropdown.Item>
                <NavDropdown.Item href='#'>Eliminar publicacion</NavDropdown.Item>
                <NavDropdown.Item href='#'>Modificar ofertas</NavDropdown.Item>
                <NavDropdown.Divider/>
                <NavDropdown.Header>Usuarios</NavDropdown.Header>
                <NavDropdown.Item href='#'>Suspender usuario</NavDropdown.Item>
                <NavDropdown.Item href='#'>Ver mensajes</NavDropdown.Item>
              </NavDropdown>
              <Link className='text-decoration-none linkNav-light ms-1 me-2' to='/aboutus'>Sobre nosotros</Link>
              <Link className='text-decoration-none linkNav-light' to='/contact'>Contacto</Link>
            </Nav>
            <Nav className='ms-auto fw-bold align-items-center'>
              <Link className='text-decoration-none linkNav-light me-2' to='/login'>Iniciar sesion</Link>
              <Link className='text-decoration-none linkNav-light' to='/register'>Registrarse</Link>
              <div className='ms-3'>
                <label className="interruptor">
                  <input type="checkbox" onClick={()=>{modeDLchange()}} id="modeDarkLight"/>
                  <span><ion-icon name="moon-outline" class="moon"></ion-icon></span>
                </label>
              </div>
            </Nav>
          </Navbar.Collapse>

        </Container>
      </Navbar>
    </>
  );
};

export default Header;
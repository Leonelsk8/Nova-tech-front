import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import styles from './AppNavbar.module.css';
import { NavLink } from 'react-bootstrap';
import logo from '../../assets/novatechLogo.png'

const AppNavbar = () => {
  return (
    <Navbar className={`${styles.bgNavbar} sticky-top`} variant='dark' expand='md'>
      <Container>
        <Navbar.Brand className='d-flex' href='/#'>
          <img style={{with: "3rem", height: "3rem"}} src={logo} alt="Nova Tech Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='my-nav' />
        <Navbar.Collapse id='my-nav'>
          <Nav className='me-auto fw-bold'>
            <NavLink>Home</NavLink>
            <NavDropdown title='services' id='my-nav'>
              <NavDropdown.Header>Heading 1</NavDropdown.Header>
              <NavDropdown.Item href='#'>Shopping Card</NavDropdown.Item>
              <NavDropdown.Item href='#'>My Account</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Header>Heading 2</NavDropdown.Header>
              <NavDropdown.Item href='#'>Create My Account</NavDropdown.Item>
            </NavDropdown>
            <NavLink>About</NavLink>
            <NavLink>Contact</NavLink>
          </Nav>
          <Navbar.Text>
            sign in here <a href='#'>Login</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;

import './header.css';
import { Container, Navbar, NavLink, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <Navbar className='menu' variant='dark' expand='md'>
        <Container>
          <Navbar.Brand href='#'>
            <h1>Nova Tech</h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='my-nav' />
          <Navbar.Collapse id='my-nav'>
            <Nav className='me-auto fw-bold'>
              <NavLink><Link to='/'>Home</Link></NavLink>
              <NavDropdown title='services' id='my-nav'>
                <NavDropdown.Header><Link to='serrvice1'>Service1</Link></NavDropdown.Header>
                <NavDropdown.Item href='#'>Products</NavDropdown.Item>
                <NavDropdown.Item href='#'>My Account</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Header>Heading 2</NavDropdown.Header>
                <NavDropdown.Item href='#'>Create My Account</NavDropdown.Item>
              </NavDropdown>
              <NavLink><Link to='AboutUs'>Aboutus</Link></NavLink>
              <NavLink><Link to='contact'>Contact</Link></NavLink>
            </Nav>
            <Navbar.Text>
              sign in here <Link to='login'>Login</Link>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;

import './header.css';
import { Container, Navbar, NavLink, Nav, NavDropdown } from 'react-bootstrap';

const Header = () => {
  return (
    <>
      <Navbar className='menu sticky-top' variant='dark' expand='md'>
        <Container>
          <Navbar.Brand href='#'>
            <h1>Nova Tech</h1>
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
    </>
  );
};

export default Header;

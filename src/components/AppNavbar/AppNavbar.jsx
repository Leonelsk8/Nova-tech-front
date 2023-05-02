import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import styles from './AppNavbar.module.css'

const AppNavbar = () => {
  return (
    <Navbar className={`${styles.appNav}`} variant='dark' sticky='top' expand='lg'>
      <Container>
        <Navbar.Brand href='/'>Nova Tech</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <NavLink to={'/'} className='nav-link'>
              Home
            </NavLink>
            <NavLink to={'/register'} className='nav-link'>
              Registrarme
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;

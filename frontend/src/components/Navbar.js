import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'
import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar-test.css'
import Image from 'react-bootstrap/Image';

const NavScroll = () => {
  const { logout } = useLogout()
  const { user } = useAuthContext()
  const handleClick = () => {
    logout()
  }


  return (
    <Navbar bg="danger" expand="lg">
      <Container fluid >
        <a href="/item" id='logo'>GGCL</a>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Form className='d-flex'>
            {user && (
              <div className='user-profile'>
                <a href="/profile" >{user.username} </a>
                <button type="button" className="btn-danger" onClick={handleClick}>Log out</button>
              </div>
              )}
              {!user && (
              <Nav.Link href="signup" id='signup'>SIGNUP</Nav.Link>
              )}
              {!user && (
              <Nav.Link href="login" id='signin'>SIGNIN</Nav.Link>
              )}
            </Form>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavScroll

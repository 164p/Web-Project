import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'
import Button from 'react-bootstrap/Button';
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
      <Container fluid>
        <a href="/" id='logo'>GGCL</a>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
          </Form>
              {user && (
              <div>
                <a href="profile">{user.username} </a>
                {user.photo && <Image src={user.photo} alt="Profile" roundedCircle />}
                <button type="button" className="btn-danger" onClick={handleClick}>Log out</button>
              </div>
              )}
              {!user && (
              <Nav.Link href="signup" id='signup'>SIGNUP</Nav.Link>
              )}
              {!user && (
              <Nav.Link href="login" id='signin'>SIGNIN</Nav.Link>
              )}

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavScroll

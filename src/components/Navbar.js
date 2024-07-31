import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useAuth } from '../contexts/AuthContext';

const Navigation = () => {
  const { auth, setAuth } = useAuth();

  const handleLogout = () => {
    setAuth(null);
    localStorage.removeItem('token');
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            {auth && (
              <>
                <LinkContainer to="/operations">
                  <Nav.Link>New Operation</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/records">
                  <Nav.Link>User Records</Nav.Link>
                </LinkContainer>
              </>
            )}
          </Nav>
          {auth ? (
            <Nav>
              <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
            </Nav>
          ) : (
            <Nav>
              <LinkContainer to="/login">
                <Nav.Link>Login</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/register">
                <Nav.Link>Register</Nav.Link>
              </LinkContainer>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;

import React from 'react';
import './NavBar.css';
import Navbar from 'react-bootstrap/Navbar';
import { Nav, NavDropdown } from 'react-bootstrap';

function NavBar(props) {
  const { currentUser, signOut } = props;
  return (
    <Navbar className="Navbar-main">
      <Navbar.Brand href="/">The Dog Spot</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/dogs">Dogs</Nav.Link>
        <Nav.Link href="/dogs/new">New Dog</Nav.Link>
      </Nav>
      <Nav>
        {!currentUser && <Nav.Link href="/sign-in">Sign In</Nav.Link>}
        {!currentUser && <Nav.Link href="/user">New User</Nav.Link>}
        {currentUser && (
          <Nav>
            <Nav.Link href="/user"></Nav.Link>
            <NavDropdown title={currentUser.first_name} id="basic-nav-dropdown">
              <NavDropdown.Item href={`/users/${currentUser.id}`}>
                Profile
              </NavDropdown.Item>
              <NavDropdown.Item href={`/users/${currentUser.id}/edit`}>
                Edit Profile
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        )}
        {currentUser && (
          <Nav.Link href="/" onClick={signOut}>
            Sign Out
          </Nav.Link>
        )}
      </Nav>
    </Navbar>
  );
}

export default NavBar;

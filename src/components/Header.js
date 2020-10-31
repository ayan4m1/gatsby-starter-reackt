import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'gatsby';

export default function Header() {
  return (
    <Navbar bg="light" expand="lg" className="mb-4">
      <Navbar.Brand>Starter</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav>
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

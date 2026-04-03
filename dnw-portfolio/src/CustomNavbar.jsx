import { Navbar, Nav } from 'react-bootstrap';

function CustomNavbar() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#">Darius Naugler-Williams</Navbar.Brand>

      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav className="ms-auto">
          <Nav.Link href="#about">About Me</Nav.Link>
          <Nav.Link href="#resume">My Resume</Nav.Link>
          <Nav.Link href="#projects">My Projects</Nav.Link>
           <Nav.Link href="#contact">Contact Me</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default CustomNavbar;
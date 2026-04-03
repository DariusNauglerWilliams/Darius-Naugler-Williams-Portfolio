import { Navbar, Nav } from 'react-bootstrap';

function CustomNavbar() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Darius Portfolio</Navbar.Brand>
        <Nav className="-auto">
          <Nav.Link href="#about">About</Nav.Link>
             <Nav.Link href="#resume">Resume</Nav.Link>
          <Nav.Link href="#projects">Projects</Nav.Link>
        </Nav>
    </Navbar>
  );
}

export default CustomNavbar;
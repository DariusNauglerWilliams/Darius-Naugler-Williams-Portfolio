import { Navbar, Nav } from 'react-bootstrap';

function CustomNavbar() {
  return (
    <Navbar bg="black" expand="lg" fixed="top">
   <Navbar.Brand href="#">
      <img
        src="/dnwlogo.png"
        alt="logo"
        style={{ height: "50px", width: "auto", transform: "scale(3.4)", transformOrigin: "left center" }}
      />
    </Navbar.Brand>

      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav className="ms-auto">
          <Nav.Link href="#about" style={{ color: "white" }}>About Me</Nav.Link>
          <Nav.Link href="#resume"style={{ color: "white" }}>Resume</Nav.Link>
          <Nav.Link href="#projects"style={{ color: "white" }}>Projects</Nav.Link>
           <Nav.Link href="#contact"style={{ color: "white" }}>Contact </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default CustomNavbar;
import { Navbar, Nav } from 'react-bootstrap';

function CustomNavbar() {
  return (
    <Navbar bg="black" expand="lg" fixed="top">
   <Navbar.Brand href="#">
      <img
        src="/dnwlogo.png"
        alt="logo"
        style={{ height: "53px", width: "auto", transform: "scale(3.5)", transformOrigin: "left center" }}
      />
    </Navbar.Brand>

      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav className="mx-auto">
          <Nav.Link href="#about" style={{ color: "white", fontSize: "18px", marginLeft: "30px" }}>About Me</Nav.Link>
          <Nav.Link href="#resume"style={{ color: "white", fontSize: "18px", marginLeft: "30px" }}>Resume</Nav.Link>
          <Nav.Link href="#projects"style={{ color: "white", fontSize: "18px", marginLeft: "30px" }}>Projects</Nav.Link>
           <Nav.Link href="#contact"style={{ color: "white", fontSize: "18px", marginLeft: "30px" }}>Contact Me</Nav.Link>
        </Nav>
      </Navbar.Collapse>


      <Navbar.Collapse>
 

  <Nav className="ms-auto d-flex align-items-center">
  <Nav.Link style={{ color: "white" }}>
    <img src="/email.png" alt="email" style={{ height: "46px" }} />
    djnaugler@gmail.com
  </Nav.Link>

  <Nav.Link style={{ color: "white" , marginRight: "20px"}}>
    <img src="/phone.png" alt="phone" style={{ height: "46px"}} />
    782-234-8930
  </Nav.Link>
</Nav>
</Navbar.Collapse>
    </Navbar>
  );
}

export default CustomNavbar;
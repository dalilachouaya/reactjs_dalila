import React from "react";
import "../index.css";
import {
  Nav,
  NavDropdown,
  Navbar,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Navbars() {
    const mystyle = {
    backgroundColor: "white",

      };

  return (
    <div className="main-navbar" style={mystyle}>
      <Navbar expand="lg">
        <Navbar.Brand href="#">
          <img src="/images/logo.png" alt="logos" className="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link to="/">HOME</Nav.Link>
            <Nav.Link to="/SERIES">SERIES</Nav.Link>
            <NavDropdown title="MORE" id="basic-nav-dropdown" style={mystyle}>
              <NavDropdown.Item to="/MORE">NEWS</NavDropdown.Item>
              <NavDropdown.Item to="/CONTACT US" >ABOUT US</NavDropdown.Item>
              <NavDropdown.Item to="/MORE">TEAM & CONTACTS</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">PROMO</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-primary">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Navbars;

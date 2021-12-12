import { NavLink } from "react-router-dom";

// Bootstrap components
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

//Styles
import "./NavbarMain.css";

export default function NavbarMain() {
  return (
    <div>
      <Navbar bg="primary" expand="lg" className="py-4">
        <Container>
          <NavLink exact to="/" className="navbar-brand display">
            Personal Diary
          </NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end gap-5"
          >
            <Nav className="gap-2">
              <NavLink to="/login" className="nav-link">
                Login
              </NavLink>
              <NavLink to="/signup" className="nav-link">
                Signup
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

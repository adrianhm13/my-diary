import { NavLink } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
// Bootstrap components
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button"
//Styles
import "./NavbarMain.css";

export default function NavbarMain() {
  const {logout} = useLogout();

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
              <Button variant="outline-danger mx-4" onClick={logout}>Logout</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

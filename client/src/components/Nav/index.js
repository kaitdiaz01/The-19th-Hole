import React from "react";
import './nav.css'
import Auth from "../../utils/auth";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import logo from "../../assets/golflogo.png";

function NavBar() {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <div>
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand>
              <Link to="/"><img src={logo} className="App-logo" alt="logo" /></Link>
              </Navbar.Brand>
              <Nav className="me-auto">
                <Link to="/Favorites">Favorites </Link>
                <Link to="/" onClick={() => Auth.logout()}>
                  {" "}
                  Logout{" "}
                </Link>
              </Nav>
            </Container>
          </Navbar>
        </div>
      );
    } else {
      return (
        <div>
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand>
                <Link to="/"></Link>
              </Navbar.Brand>
              <Nav className="me-auto">
                <Link to="/signup"> Signup </Link>
              <div>
                 
              </div>
                <Link to="/login"> Login</Link>
              </Nav>
            </Container>
          </Navbar>
        </div>
      );
    }
  }

  return (
    <div>
      <nav>{showNavigation()}</nav>
    </div>
  );
}

export default NavBar;

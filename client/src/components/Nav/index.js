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
              <Link to="/"><img src={logo} className="app-logo img-thumbnail" alt="logo" /></Link>
              </Navbar.Brand>
              <Nav className="me-auto">
                <Link to="/Favorites" style={{padding:'10px'}}> Favorites </Link>
                <Link to="/FindPlayers" style={{padding:'10px'}}> Find Players </Link>
                <Link to="/" style={{padding:'10px'}} onClick={() => Auth.logout()}>
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
          <Navbar className="log-nav" bg="dark" variant="dark">
            <Container>
              <Navbar.Brand>
                <Link to="/"></Link>
              </Navbar.Brand>
              <Nav className="me-auto">
                <Link to="/signup" style={{padding:'10px'}}> Signup </Link>
              <div>
                 
              </div>
                <Link to="/login" style={{padding:'10px'}}> Login </Link>
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
import React from "react";
import Auth from "../../utils/auth";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import logo from '../../assets/golflogo.png'


function NavBar() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (

        <div>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand> 
              <img src={logo} className="App-logo" alt="logo"/> 
              </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link><Link to="/Favorites">
                Favorites </Link></Nav.Link>
              <Nav.Link>
              <a href="/" onClick={() => Auth.logout()}> Logout </a>
              </Nav.Link>
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
            <Navbar.Brand><Link to="/"></Link></Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link><Link to="/signup"> Signup </Link></Nav.Link>
              <Nav.Link>
              <Link to="/login"> Login</Link>
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
      );
    }
  }

  return (
    <div>
      <nav>
        {showNavigation()}
      </nav>
    </div>
  );
}

export default NavBar;

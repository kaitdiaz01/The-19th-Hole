import React from "react";
import Auth from "../../utils/auth";
// import { Navbar, NavbarBrand, Nav, NavLink, Container } from "reactstrap";
import Navbar from "react-bootstrap/Navbar";

import { Link } from "react-router-dom";

function NavBar() {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/favorites">Favorites</Link>
          </li>
          <li className="mx-1">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">
                <Link to="/signup">Signup</Link>
              </Nav.Link>
              <Nav.Link href="#features">
                <Link to="/login">Login</Link>
              </Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        // <ul className="flex-row">
        //   <li className="mx-1">
        //     <Link to="/signup">Signup</Link>
        //   </li>
        //   <li className="mx-1">
        //     <Link to="/login">Login</Link>
        //   </li>
        // </ul>
      );
    }
  }

  return (
    // <header className="flex-row px-1">
    //   <h1>
    //     <Link to="/">
    //       <span role="img" aria-label="19th-hole">
    //         ⛳️
    //       </span>
    //       19th Hole
    //     </Link>
    //   </h1>

    //   <nav>{showNavigation()}</nav>
    // </header>
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#pricing">
            P
            <Link to="/">
              //{" "}
              <span role="img" aria-label="19th-hole">
                // ⛳️ //{" "}
              </span>
              // 19th Hole //{" "}
            </Link>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;

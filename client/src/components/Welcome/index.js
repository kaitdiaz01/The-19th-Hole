import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./welcome.css";
import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div className="card-holder">
      <Card className="rounded shadow find-card">
        <Card.Body>
          <Card.Title className="find-title">Ready to meet some people?</Card.Title>
          <Card.Text>Make sure you login first!</Card.Text>

          <Link to="/findplayers">
            <Button className="shadow find-btn" style={{ backgroundColor: "#9db175" }}>Find a golf buddy to play with!</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Welcome;
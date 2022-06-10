import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./welcome.css";
import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div className="card-holder">
      <Card>
        <Card.Body>
          <Card.Title>Ready to meet some people!</Card.Title>
          <Card.Text>Make sure you log input!</Card.Text>

          <Link to="/findplayers">
            <Button variant="primary">Find some people to play with</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Welcome;
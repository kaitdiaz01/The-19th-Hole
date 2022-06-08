import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import './welcome.css';

function Welcome() {
  return (
    <div class='card-holder' >
      <Card>
        <Card.Body>
          <Card.Title>Ready to meet some people!</Card.Title>
          <Card.Text>
            Make sure you sign up!
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Welcome;
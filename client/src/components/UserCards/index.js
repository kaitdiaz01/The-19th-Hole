import React, {useState} from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
const UserCards = (props) => {
  const [isOpen, setIsOpen] = useState(false);

const toggle = () => setIsOpen(!isOpen);
  return (
<Card style={{ width: '18rem' }}>
  <Card.Body style={{ backgroundColor: '#f3ece4' }}>
    <Card.Title style={{ color: '#515b5f' }}>Card Title</Card.Title>
    <Card.Text style={{ color: '#1C3D12' }}>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>  );
};

export default UserCards;
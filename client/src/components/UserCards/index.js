import React, {useState} from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
const UserCards = ({firstName, lastName, city, level, drink, smoke}) => {
  const [isOpen, setIsOpen] = useState(false);

const toggle = () => setIsOpen(!isOpen);
  return (
<Card style={{ width: '18rem' }}>
  <Card.Body style={{ backgroundColor: '#f3ece4' }}>
    <Card.Title style={{ color: '#515b5f' }}>{firstName}{lastName}</Card.Title>

    <Card.Text style={{ color: '#1C3D12' }}>
      <div>{city}</div>
      <div>{level}</div>
      <div>{drink}</div>
      <div>{smoke}</div>
      <div>{gamble}</div>
    </Card.Text>

    <Button style={{backgroundColor: '#515b5f'}}>Button to favorite this player</Button>
  </Card.Body>
</Card>  );
};

export default UserCards;
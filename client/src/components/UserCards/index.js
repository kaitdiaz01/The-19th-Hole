import React, {useState} from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
const UserCards = (props) => {
  const [isOpen, setIsOpen] = useState(false);

const toggle = () => setIsOpen(!isOpen);
  return (
<Card style={{ width: '18rem' }}>
  <Card.Body style={{ backgroundColor: '#f3ece4' }}>
    <Card.Title style={{ color: '#515b5f' }}>User's Name</Card.Title>
    <Card.Text style={{ color: '#1C3D12' }}>
      Here will be the information about the player that you choose
    </Card.Text>
    <Button style={{backgroundColor: '#515b5f'}}>Button to favorite this player</Button>
  </Card.Body>
</Card>  );
};

export default UserCards;
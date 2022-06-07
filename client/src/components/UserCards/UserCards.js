import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

const Example = (props) => {
  return (
    <div>
      <Card>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
        <CardBody style = {{backgroundcolor: '#f3ece4'}}>
          <CardTitle style = {{color: '#1C3D12'}}>Test Card</CardTitle>
          <CardSubtitle style = {{color: '#1C3D12'}}>Here is some example text for the subtitle</CardSubtitle>
          <CardText style = {{color: '#1C3D12'}}>We will have the user information here, including city and our other questions when a user </CardText>
          <Button style = {{backgroundcolor: '515b5f', color: '#ffcf4'}}>Favorite</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default Example;
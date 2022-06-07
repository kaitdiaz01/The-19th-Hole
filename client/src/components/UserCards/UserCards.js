import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

const Example = (props) => {
  return (
    <div>
      <Card>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
        <CardBody>
          <CardTitle>Test Card</CardTitle>
          <CardSubtitle>Here is some example text for the subtitle</CardSubtitle>
          <CardText>We will have the user information here, including city and our other questions when a user </CardText>
          <Button>Like Button</Button>
          <Button>Dislike Button</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default Example;
import React from "react";
import {Card, CardBody, CardTitle, CardSubtitle, CardText} from "reactstrap";
// import CardTitle from './../CardComponents/CardTitle';
// import CardSubtitle from './../CardComponents/CardSubtitle';
// import CardTxt from './../CardComponents/CardTxt';

const Character = ({data}) => {
  return (
    <Card>
      <CardBody>
        <CardTitle>{data.name}</CardTitle>
        <CardSubtitle>{`Height: ${data.height}`}</CardSubtitle>
        <CardText>{`Mass: ${data.mass}`}</CardText>
        <CardText>{`Hair color: ${data.hair_color}`}</CardText>
        <CardText>{`Eye color: ${data.eye_color}`}</CardText>
        <CardText>{`Birth year: ${data.birth_year}`}</CardText>
        <CardText>{`Gender: ${data.gender}`}</CardText>
      </CardBody>
    </Card>
  );
};

export default Character;
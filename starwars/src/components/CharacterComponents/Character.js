import React from "react";
import {Card, CardBody, CardImg} from "reactstrap";
import CardTitle from './../CardComponents/CardTitle';
import CardSubtitle from './../CardComponents/CardSubtitle';
import CardTxt from './../CardComponents/CardTxt';

const Character = ({data}) => {
  return (
    <Card>
      <CardBody>
        <CardTitle>{data.name}</CardTitle>
        <CardSubtitle>{`Height: ${data.height}`}</CardSubtitle>
        <CardTxt>{`Mass: ${data.mass}`}</CardTxt>
        <CardTxt>{`Hair color: ${data.hair_color}`}</CardTxt>
        <CardTxt>{`Eye color: ${data.eye_color}`}</CardTxt>
        <CardTxt>{`Birth year: ${data.birth_year}`}</CardTxt>
        <CardTxt>{`Gender: ${data.gender}`}</CardTxt>
      </CardBody>
    </Card>
  );
};

export default Character;
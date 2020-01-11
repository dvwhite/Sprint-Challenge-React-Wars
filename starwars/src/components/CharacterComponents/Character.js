import React from "react";
// import {Card, CardBody, CardTitle, CardSubtitle, CardText, Col} from "reactstrap";
import {Card, CardBody, Col} from "reactstrap";
import CardTitle from './../CardComponents/CardTitle';
import CardSubtitle from './../CardComponents/CardSubtitle';
import CardTxt from './../CardComponents/CardTxt';

const Character = ({data}) => {
  return (
    <Col>
      <Card body inverse style={{ backgroundColor: '#333', 
                                  borderColor: '#333', 
                                  width: '15em', 
                                  height: '30em',
                                  margin: '1em 0' }}>
        <CardBody>
          <CardTitle><h4>{data.name}</h4></CardTitle>
          <hr></hr>
          <CardTxt>{`Birth year: ${data.birth_year}`}</CardTxt>
          <CardTxt>{`Height: ${data.height}`}</CardTxt>
          <CardTxt>{`Mass: ${data.mass}`}</CardTxt>
          <CardTxt>{`Hair color: ${data.hair_color}`}</CardTxt>
          <CardTxt>{`Eye color: ${data.eye_color}`}</CardTxt>
          <CardTxt>{`Gender: ${data.gender}`}</CardTxt>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Character;
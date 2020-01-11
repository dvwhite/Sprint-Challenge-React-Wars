import React, {useEffect, useState} from "react";
import axios from "axios";
import {CardDeck, Row, CardGroup, CardColumns} from "reactstrap";
import Character from './Character';

const Characters = (props) => {
  const [charState, setCharState] = useState([]);

  useEffect(() => {
    // api information
    const apiURL = 'https://swapi.co/api/people/';  
    axios
      .get(apiURL)
      .then(res => {
        setCharState(res.data.results);
      })
      .catch(err => console.log(err));
  }, []);
  console.log(charState);

  if (!charState) return <h3>Loading...</h3>;

  return (
    <Row className="h-100 justify-content-center full-height align-items-center">
      <CardDeck>
        {charState.map((char, index) => <Character key={index} data={char} />)}
      </CardDeck>
    </Row>
  );
};

export default Characters;
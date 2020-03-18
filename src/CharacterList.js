import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './App.css';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function CharacterList() {
  useEffect(() =>{
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch('https://rickandmortyapi.com/api/character/');
    const items = await data.json();

    setItems(items.results);
  }
  return (
    <div>
      <Container>
        <Row xs={2} md={4} lg={6}>
        {items.map(item => (
          <Col key={item.id}>
            <Card>
            <Link to={`/${item.id}`}>
            <Card.Img variant ="top" src={item.image} />
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
            </Card.Body>
            </Link>
          </Card>
          </Col>
        ))}
        </Row>
      </Container>
      {/* <CardDeck lg={6}>
        {items.map(item => (
          <Card key={item.id}>
            <Link to={`/shop/${item.id}`}>
            <Card.Img variant ="top" src={item.image} />
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
            </Card.Body>
            </Link>
          </Card>
        ))}
      </CardDeck> */}
{/*       
      {items.map(item=> (
        <h1 key={item.id}>
          <Link to={`/shop/${item.id}`}>
            <h4>{item.name}</h4>
            <img src={item.image}></img>
            </Link>
         
          </h1>
      ))} */}
    </div>
  );
}

export default CharacterList;

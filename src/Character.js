import React, {useState, useEffect} from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';
import './App.css';

function Character({match}) {
  useEffect(() => {
    fetchItem();
  
  },[]);

  const [item, setItem]= useState({
    image: {}
  });

  const fetchItem = async () => {
    const fetchItem = await fetch(`https://rickandmortyapi.com/api/character/${match.params.id}`);
    const item = await fetchItem.json();
    setItem(item);
    //console.log(item);
  }

 
  return (

     <Card style={{ width: '18rem'}} className="mx-auto">
  <Card.Img variant="center" src={item.image} />
  <Card.Body>
    <Card.Title>{item.name}</Card.Title>
    <Card.Text>
    <p><b>Gender:</b> {item.gender}</p>
      <p><b>Species:</b> {item.species}</p>
      <p><b>Status: </b>{item.status}</p>
    </Card.Text>
    <Link to="/"><Button variant="primary">Go back</Button></Link>
  </Card.Body>
</Card>

  
  );
}

export default Character;

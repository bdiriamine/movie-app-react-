import React from 'react'
import Card from 'react-bootstrap/Card';
import { Rating } from 'react-simple-star-rating';
export default function MovieCard({ el}) {
    return (
        <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={el.posterUrl}  className='img' />
    <Card.Body>
      <Card.Title>{el.title}</Card.Title>
      <Card.Text>
      {el.description}
      </Card.Text>
      <Rating   iconsCount={5}   initialValue={el.rating}  readonly={true}  fillColor='red' />
    </Card.Body>
  </Card>
  )
    };
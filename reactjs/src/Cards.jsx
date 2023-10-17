import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function Cards() {
  return (
    <div className='mycards'>
      <CardGroup>
      <Card>
        <Card.Img variant="top" src="las vegas.jpg" />
        <Card.Body>
          <Card.Title>Las Vegas</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Card One</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="newyork.jpg" />
        <Card.Body>
          <Card.Title>NewYork</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Card Two</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="singapore.jpg" />
        <Card.Body>
          <Card.Title>Singapore</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Card Three</small>
        </Card.Footer>
      </Card>
    </CardGroup>
    </div>
  )
}

export default Cards

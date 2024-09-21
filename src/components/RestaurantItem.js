import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

function RestaurantItem({ restaurant }) {
  return (
    <Card style={{ margin: '10px' }}>
      <Card.Body>
        <Card.Title>{restaurant.name}</Card.Title>
        <Card.Text>
          Available Tables: {restaurant.availableTables}
        </Card.Text>
        <Link to={`/reserve/${restaurant.id}`}>
          <button className="btn btn-primary">Book Now</button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default RestaurantItem;

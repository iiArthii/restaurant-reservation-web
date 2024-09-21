import React, { useState, useEffect } from 'react';
import RestaurantItem from './RestaurantItem';

function RestaurantList() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    // Sample data; replace with API call in the future
    const sampleData = [
      { id: 1, name: 'The Gourmet Kitchen', availableTables: 5 },
      { id: 2, name: 'Seafood Paradise', availableTables: 2 },
      { id: 3, name: 'Pasta Fiesta', availableTables: 4 }
    ];
    setRestaurants(sampleData);
  }, []);

  return (
    <div className="row">
      {restaurants.map((restaurant) => (
        <div className="col-md-4" key={restaurant.id}>
          <RestaurantItem restaurant={restaurant} />
        </div>
      ))}
    </div>
  );
}

export default RestaurantList;

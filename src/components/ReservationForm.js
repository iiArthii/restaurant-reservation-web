import React from 'react';
import { useParams } from 'react-router-dom';

function ReservationForm() {
  let { id } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Reservation made for restaurant ID: ${id}`);
  };

  return (
    <div>
      <h2>Make a Reservation</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name:</label>
          <input type="text" className="form-control" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Number of Guests:</label>
          <input type="number" className="form-control" required />
        </div>
        <button type="submit" className="btn btn-success">Reserve</button>
      </form>
    </div>
  );
}

export default ReservationForm;

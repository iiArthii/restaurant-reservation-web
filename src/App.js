import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import RestaurantList from './components/RestaurantList';
import ReservationForm from './components/ReservationForm';
import ReservationList from './components/ReservationList';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<RestaurantList />} />
          <Route path="/reserve/:id" element={<ReservationForm />} />
          <Route path="/reservations" element={<ReservationList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

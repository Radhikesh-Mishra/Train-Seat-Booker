import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Seats from './components/Seats';
import BookingSeats from './components/BookSeats';
import BookedSeats from './components/BookedSeats';
import Footer from './components/Footer';

const App = () => {
  const [seats, setSeats] = useState(Array(80).fill(0)); // 80 seats initialized as available (0)
  const [bookedSeats, setBookedSeats] = useState([]); // Track booked seats

  const resetSeats = () => {
    setSeats(Array(80).fill(0)); // Reset all seats to available
    setBookedSeats([]); // Clear booked seats
  };

  const bookSeats = (count) => {
    if (count > 7) {
      alert("You can book a maximum of 7 seats.");
      return;
    }

    let found = false;
    let newSeats = [...seats];
    let userBookedSeats = [];

    // Find seats in the same row
    for (let i = 0; i < 80; i += 7) {
      const row = newSeats.slice(i, i + 7);
      const availableSeats = row.reduce(
        (acc, seat, idx) => (seat === 0 ? [...acc, idx + i] : acc),
        []
      );

      if (availableSeats.length >= count) {
        userBookedSeats = availableSeats.slice(0, count);
        userBookedSeats.forEach((seat) => (newSeats[seat] = 1)); // Mark as booked
        found = true;
        break;
      }
    }

    // If not found in the same row, book nearby seats
    if (!found) {
      const availableSeats = newSeats.reduce(
        (acc, seat, idx) => (seat === 0 ? [...acc, idx] : acc),
        []
      );

      if (availableSeats.length >= count) {
        userBookedSeats = availableSeats.slice(0, count);
        userBookedSeats.forEach((seat) => (newSeats[seat] = 1));
        found = true;
      }
    }

    if (found) {
      setSeats(newSeats);
      setBookedSeats(userBookedSeats);
      alert("Seats booked successfully!");
    } else {
      alert("Not enough seats available.");
    }
  };

  return (
    <>
      <Navbar />
      {/* Render BookedSeats component only if there are booked seats */}
      {bookedSeats.length > 0 && <BookedSeats bookedSeats={bookedSeats} />}
      <BookingSeats bookSeats={bookSeats} />
      <Seats seats={seats} resetSeats={resetSeats} />
      <Footer />
    </>
  );
};

export default App;

import React from "react";

const BookedSeats = (props) => {
    return (
        <div className="container mt-4">
          <h4>Your Booked Seats</h4>
          <p>{props.bookedSeats.map((seat) => seat + 1).join(", ")}</p>
        </div>
      );
}

export default BookedSeats;
import React, {useState} from "react";

const BookingSeats =( props ) => {
    const [seatCount, setSeatCount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.bookSeats(Number(seatCount));
  };
    return (
        <div className="container mt-4">
          <h4>Book Your Seats</h4>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="seatCount" className="form-label">
              Number of Seats (Max 7):</label>
              <input
                type="number"
                className="form-control"
                id="seatCount"
                value={seatCount}
                onChange={(e) => setSeatCount(e.target.value)}
                max="7"
                min="1"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Book Seats
            </button>
          </form>
        </div>
      );
}

export default BookingSeats;
import React from "react";

const Seats = (props) => {
    return (
        <div className="container mt-4">
          <h4 className="text-center">Available Seats</h4><br />
          <div className="seats-container">
            {props.seats.map((seat, index) => (
              <div
                key={index}
                className={`seat-box ${seat === 0 ? "available" : "booked"}`}
              >
                {index + 1}
              </div>
            ))}
          </div>
          <div className="text-center mt-3">
            <button className="btn btn-danger" onClick={props.resetSeats}>
              Reset Seats
            </button>
          </div>
        </div>
      );
    }

    export default Seats;
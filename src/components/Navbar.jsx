import React from "react";

const Navigationbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Train Seat Booker</a>
        <div className="d-flex">
          <a
            href="#"
            className="text-light me-5"
            style={{ textDecoration: "none" }}
            title="Train"
          >
            <i className="fas fa-train fa-lg hover-icon"></i>
          </a>
          <a
            href="#"
            className="text-light me-5"
            style={{ textDecoration: "none" }}
            title="Globe"
          >
            <i className="fas fa-globe fa-lg hover-icon"></i>
          </a>
          <a
            href="#"
            className="text-light"
            style={{ textDecoration: "none" }}
            title="User"
          >
            <i className="fas fa-user fa-lg hover-icon"></i>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navigationbar;
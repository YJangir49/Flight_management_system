import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle
} from "reactstrap";
import Navbar from "./Navbar";

function Home(props) {
  return (
    <div className="cover-bg-img">
      <Navbar />
      <div className="container">
        <div className="form-box">
          <h1 className="primary-heading">Book Your Flight</h1>
          <div className="search-form">
            <input className="check" placeholder="From" type="text"></input>
            <input
              className="check"
              placeholder="Destination"
              type="text"
            ></input>
            <input
              className="check"
              placeholder="Departure"
              type="text"
            ></input>
            <input className="check" placeholder="Return" type="text"></input>
            <input
              className="check"
              placeholder="Number of Travellers"
              type="text"
            ></input>
          </div>
          <button className="btn-search" type="submit">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;

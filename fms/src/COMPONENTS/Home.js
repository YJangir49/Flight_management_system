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
          <form className="search-form">
            <span className="label form">From</span>
            <input className="check" placeholder="From" type="text"></input>

            <span className="label destination">Destination</span>
            <input
              className="check"
              placeholder="Destination"
              type="text"
            ></input>

            <span className="label departure">Departure</span>
            <input
              className="check"
              placeholder="Departure"
              type="text"
            ></input>

            <span className="label return">Return</span>
            <input className="check" placeholder="Return" type="text"></input>

            <span className="label travellers">No of Travellers</span>
            <input
              className="check"
              placeholder="Number of Travellers"
              type="text"
            ></input>

            <button className="btn-search" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Home;

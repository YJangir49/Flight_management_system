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
import "../Styles/home.css";

function Home(props) {
  return (
    <div className="cover-bg-img">
      <div className="form-box">
        <h1 className="primary-heading">Book Your Flight</h1>
        <form className="search-form">
          <div id="from-input" className="group">
            <label for="from" className="label-form">
              From
            </label>
            <input className="input" id="from" type="text"></input>
          </div>
          <div className="group">
            <label for="des" className="label-form">
              Destination
            </label>
            <input id="des" className="input" type="text"></input>
          </div>
          <div className="group">
            <label for="dep" className="label-form">
              Departure
            </label>
            <input id="dep" className="input" type="text"></input>
          </div>
          <div id="return-input" className="group">
            <label for="return" className="label-form">
              Return
            </label>
            <input id="return" className="input" type="text"></input>
          </div>
          <div id="not-input" className="group">
            <label for="not" className="label-form">
              No of Travellers
            </label>
            <input id="not" className="input" type="text"></input>
          </div>

          <button className="btn-search" type="submit">
            Search
          </button>
        </form>
      </div>
    </div>
  );
}

export default Home;

import React from "react";
import Home from "./COMPONENTS/Home";
import Navbar from "./COMPONENTS/Navbar";
import Login from "./COMPONENTS/SignIn";

import {
  Switch,
  Route,
  BrowserRouter,
  Redirect,
  withRouter
} from "react-router-dom";
//import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/home" component={Home} />
        <Route exact path="/login" component={Login} />
        <Redirect to="/home" />
      </Switch>
    </div>
  );
}

export default App;

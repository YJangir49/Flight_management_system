import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  NavItem,
  Jumbotron,
  Collapse,
  NavbarToggler,
  Nav,
  Modal,
  ModalBody,
  ModalHeader,
  Button,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import { NavLink, Link } from "react-router-dom";
import logo from "../logo.svg";

export class Header extends Component {
  render() {
    return (
      <Navbar expand="md" dark>
        <div className="container">
          <NavbarToggler />
          <NavbarBrand className="mr-auto" href="/">
            <img src={logo} width="35" height="38" alt="PSY Airlines" /> PSY
            Airlines
          </NavbarBrand>
          <Collapse navbar>
            <Nav className="ml-5" navbar>
              <NavItem>
                <NavLink className="nav-link" to="/home">
                  <span className="fa fa-home "> Home </span>{" "}
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/aboutus">
                  <span className="fa fa-info "> About Us</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/contactus">
                  <span className="fa fa-address-card"> Contact Us</span>
                </NavLink>
              </NavItem>
            </Nav>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link to="/login">
                  <Button outline>
                    <span className="fa fa-sign-in"></span> Login
                  </Button>
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    );
  }
}

export default Header;

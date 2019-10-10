import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle
} from "reactstrap";
import "../Styles/login.css";

function SignIn(props) {
  return (
    <div className="login-wrap">
      <div className="login-html">
        <input id="tab-1" type="radio" name="tab" className="sign-in" checked />
        <label for="tab-1" className="tab">
          Sign In
        </label>
        <input id="tab-2" type="radio" name="tab" className="sign-up" />
        <label for="tab-2" className="tab">
          Sign Up
        </label>
        <div className="login-form">
          <div className="sign-in-htm">
            <div className="group-login">
              <label for="user" className="label-form-signin">
                Username
              </label>
              <input id="user" type="text" className="input" />
            </div>
            <div className="group-login">
              <label for="pass" className="label-form-signin">
                Password
              </label>
              <input
                id="pass"
                type="password"
                className="input"
                data-type="password"
              />
            </div>
            <div className="group-login">
              <input
                id="check"
                type="checkbox"
                className="check"
                data-type="checkbox"
              />
              <label for="check" className="label-form-signin">
                <span className="icon"></span> Keep me Signed in
              </label>
            </div>
            <div className="group-login">
              <input type="submit" className="button" value="Sign In" />
            </div>
            <div className="hr"></div>
            <div className="foot-lnk">
              <a href="#forgot">Forgot Password?</a>
            </div>
          </div>
          <div className="sign-up-htm">
            <div className="group-login">
              <label for="user" className="label-form-signin">
                Username
              </label>
              <input id="user" type="text" className="input" />
            </div>
            <div className="group-login">
              <label for="pass" className="label-form-signin">
                Password
              </label>
              <input
                id="pass"
                type="password"
                className="input"
                data-type="password"
              />
            </div>
            <div className="group-login">
              <label for="pass" className="label-form-signin">
                Repeat Password
              </label>
              <input
                id="pass"
                type="password"
                className="input"
                data-type="password"
              />
            </div>
            <div className="group-login">
              <label for="pass" className="label-form-signin">
                Email Address
              </label>
              <input id="pass" type="text" className="input" />
            </div>
            <div className="group-login">
              <input type="submit" className="button" value="Sign Up" />
            </div>
            <div className="hr"></div>
            <div className="foot-lnk">
              <label for="tab-1">Already Member?</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;

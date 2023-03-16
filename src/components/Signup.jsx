import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Signup() {
  return (
    <>
      <Navbar />
      <div className="signup-wrapper" id="signup-wrapper" >
        <div className="signup-div">
          <div className="signup-image">
            <div className="signup-header">
              <h1>
                <u>Sign Up!</u>
              </h1>

              <h4>Start your journey with Bhaso today</h4>

              <p>
                Our simple, free medication management app helps individuals
                stay on track with their meds.
              </p>
            </div>
          </div>

          <div className="signup-form">
            <form className="form">
              <p className="form-group form-floating">
                <input
                  type={"text"}
                  name="surname"
                  placeholder="enter your surname "
                  required
                  className="form-control"
                />

                <label className="form-label">Surname :</label>
              </p>

              <p className="form-group form-floating">
                <input
                  type={"text"}
                  name="other names"
                  placeholder="other names "
                  required
                  className="form-control"
                />
                <label>Other Names :</label>
              </p>

              <p className="form-group ">
                <label className="form-label">Gender :</label>
                <br></br>
                <input
                  type={"radio"}
                  id="male"
                  name="gender"
                  value={"male"}
                  className="form-check-input"
                />
                <label for="male" className="form-check-label">
                  Male
                </label>
                <br></br>

                <input
                  type={"radio"}
                  id="female"
                  name="gender"
                  value={"female"}
                  className="form-check-input"
                />
                <label for="female" className="form-check-label">
                  Female
                </label>
              </p>

              <p className="form-group form-floating">
                <input
                  type={"email"}
                  name="email"
                  placeholder="enter a valid email "
                  required
                  className="form-control"
                />

                <label className="form-label">Email :</label>
              </p>

              <p className="form-group password form-floating">
                <i class="fa-solid fa-eye password-eye "></i>

                <input
                  type={"password"}
                  name="password"
                  placeholder="password "
                  required
                  className="form-control"
                />
                <label className="form-label">Password :</label>
              </p>

              <p>
                <input
                  type={"button"}
                  value={"Create Account"}
                  className="form-control submit-btn"
                  name="submit"
                />
              </p>

              <p>
                Already have an account?
                <Link className="signup-link" to="/login">
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Signup;

import React from "react";
import { Outlet, Link } from "react-router-dom";
import "../mediaq.css";

function Navbar() {
  return (
    <>
      <div>
        <div className="heroSection">
          <div className="logo">
            <img
              src={
                "https://res.cloudinary.com/blackgirlmagic/image/upload/v1677068012/Bhaso-Capstone-Project/BHASO-logo-236_1_bldiq8.png"
              }
              alt="logo"
            />
          </div>

          <div className="capsNav">
            <div>
              <Link className="link" id="homeLink" to="/settings">
                Home
              </Link>
            </div>

            <div>
              <Link className="link" to="/settings">
                About Us
              </Link>
            </div>

            <div>
              <Link className="link" to="/settings">
                Our Services
              </Link>
            </div>

            <div>
              <Link className="link" to="/settings">
                Our Projects
              </Link>
            </div>

            <div>
              <Link className="link" to="/settings">
                Contact Us
              </Link>
            </div>
          </div>

          <div className="logsign">
            <div className="login">
              <Link className="link" id="login-link" to="/settings">
                Login
              </Link>
            </div>

            <div>
              <Link className="link" id="signup" to="/settings">
                Signup
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Navbar;

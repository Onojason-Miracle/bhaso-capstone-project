import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";


function Navbar() {
  // const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <>
      <div>
        <div className="heroSection" id="heroSection">
          <div className="logo">
            <img
              src={
                "https://res.cloudinary.com/blackgirlmagic/image/upload/v1677068012/Bhaso-Capstone-Project/BHASO-logo-236_1_bldiq8.png"
              }
              alt="logo"
            />
          </div>

          <button
            class="hamburger"
            id="hamburger"
            onClick={() => {
              let x = document.getElementById("responsive-nav");

              let signupdiv = document.getElementById("signup-wrapper");
              let topnav = document.getElementById("heroSection");

              if (x.style.display === "block") {
                x.style.display = "none";
                signupdiv.style.marginTop = 0;
              } else {
                x.style.display = "block";

                x.style.width = "80%";
                x.style.margin = "auto";
                topnav.style.display = "flex";
                signupdiv.style.marginTop = "20px";
              }
            }}
          >
            <svg
              class=""
              width="24"
              height="18"
              viewBox="0 0 24 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 0H24V3H0V0ZM0 7.5H24V10.5H0V7.5ZM0 15H24V18H0V15Z"
                fill="#037b31"
              />
            </svg>
          </button>

          <div id="responsive-nav">
            <div className="capsNav">
              <div>
                <Link className="link" id="homeLink" to="/homepage">
                  Home
                </Link>
              </div>

              <div>
                <Link className="link" to="/homepage">
                  About Us
                </Link>
              </div>

              <div>
                <Link className="link" to="/homepage">
                  Our Services
                </Link>
              </div>

              <div>
                <Link className="link" to="/homepage">
                  Our Projects
                </Link>
              </div>

              <div>
                <Link className="link" to="/homepage">
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="logsign">
              <div className="login">
                <Link className="link" id="login-link" to="/login">
                  Login
                </Link>
              </div>

              <div>
                <Link className="link" id="signup" to="/signup">
                  Signup
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Navbar;

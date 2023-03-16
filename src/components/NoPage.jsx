import React from "react";
import { Link } from "react-router-dom";

function NoPage() {
  return (
    <>
      <div className="noPage-wrapper">
        <div className="noPage-div">
          <div className="mb-md-4">
            <img
              src={
                "https://res.cloudinary.com/blackgirlmagic/image/upload/v1677068012/Bhaso-Capstone-Project/BHASO-logo-236_1_bldiq8.png"
              }
              alt="logo"
            />
          </div>
          <i class="fa-regular fa-face-frown fa-5x mb-md-2"></i>

          <h1>404</h1>

          <h4>Page Not Found</h4>
          <p>
            The page you are looking for does not exist or another error occured
          </p>
          <p>
            {" "}
            Head over to the
            <Link className="noPage-link" to="/homepage">
              Homepage
            </Link>
            to choose a new direction
          </p>
        </div>
      </div>
    </>
  );
}

export default NoPage;

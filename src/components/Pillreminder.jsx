import React from "react";
import "../mediaq.css";
import "../responsive.css";

function Pillreminder() {
  return (
    <>
      <div className="pillreminder">
        <div className="PRdiv">
          <div className="PRappDiv">
            <img
              src={
                "https://res.cloudinary.com/blackgirlmagic/image/upload/v1677595291/Bhaso-Capstone-Project/Design4_pfzxsm.png"
              }
              alt="phone app design"
              className="PRapp"
            />
          </div>
          <div className="PRwriteup">
            <div>
              <h1 className="PRwriteupH1">PILL REMINDER</h1>
            </div>

            <div className="pdivsWrapper">
              <div className="pdivs">
                <i class="fa-regular fa-circle-check pdivsicon"></i>
                <p className="pdivsptag">
                  The app helps you schedule your medication time
                </p>
              </div>
              <div className="pdivs">
                <i class="fa-regular fa-circle-check pdivsicon"></i>
                <p className="pdivsptag">
                  Provides customizable reminder feature{" "}
                </p>
              </div>
              <div className="pdivs">
                <i class="fa-regular fa-circle-check pdivsicon"></i>
                <p className="pdivsptag">
                  Reminds you to refill your medication
                </p>
              </div>
            </div>
            <div className="PrHref">
              <a href="https://reactjs.org/" className="PRbtn">
                Download App
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pillreminder;

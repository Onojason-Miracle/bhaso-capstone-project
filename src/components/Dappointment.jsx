import React from "react";

function Dappointment() {
  return (
    <>
      <div className="DaWrapper">
        <div className="DaDiv">
          <div className="DaDiv2">
            <div>
              <h1 className="DAwriteupH1">DOCTORS APPOINTMENT</h1>
            </div>

            <div className="pdivsWrapper">
              <div className="pdivs">
                <i class="fa-regular fa-circle-check pdivsIcon"></i>
                <p className="pdivsPtag">
                  The app helps you schedule your appointment with your doctor
                </p>
              </div>

              <div className="pdivs">
                <i class="fa-regular fa-circle-check pdivsIcon"></i>
                <p className="pdivsPtag">And save your previous appointments</p>
              </div>
            </div>

            <div className="PrHref">
              <a href="https://reactjs.org/" className="DAbtn">
                Download App
              </a>
            </div>
          </div>

          <div>
            <div className="DAappDiv">
              <img
                src={
                  "https://res.cloudinary.com/blackgirlmagic/image/upload/v1677600540/Bhaso-Capstone-Project/Design5_dtyamg.png"
                }
                alt="phone app design"
                className="DAapp"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dappointment;

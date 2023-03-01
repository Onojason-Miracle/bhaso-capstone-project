import React from "react";
import "../mediaq.css";

function Reviews() {
  return (
    <>
      <div className="reviewWrapper">
        <div className="reviewHeading">
          <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h1>
        </div>

        <div className="reviewDiv">
          <div className="reviewDivs">
            <h1 className="reviewsH1">25%</h1>
            <p className="reviewsptag">Lorem ipsum dolor sit amet, consect</p>
          </div>
          <div className="reviewDivs">
            <h1 className="reviewsH1">8*</h1>
            <p className="reviewsptag">Lorem ipsum dolor sit amet, consect</p>
          </div>
          <div className="reviewDivs">
            <h1 className="reviewsH1">60+</h1>
            <p className="reviewsptag">Lorem ipsum dolor sit amet, consect</p>
          </div>
          <div className="reviewDivs">
            <h1 className="reviewsH1">500</h1>
            <p className="reviewsptag">Lorem ipsum dolor sit amet, consect</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Reviews;

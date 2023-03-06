import React from "react";
import { Outlet, Link } from "react-router-dom";
import "../mediaq.css";

function Footer() {
  return (
    <>
      <div className="footerWrapper">
        <div className="footerWriteup">
          <div>
            <h4 className="footerH4">INFORMATION</h4>
            <p className="footerinfo">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>

            <div className="icons">
              <a href="https://reactjs.org/">
                <i class="fa-brands fa-square-facebook footerFB"></i>
              </a>

              <a href="https://reactjs.org/">
                <i class="fa-brands fa-square-twitter footerIcon"></i>
              </a>

              <a href="https://reactjs.org/">
                <i class="fa-brands fa-square-instagram footerIcon"></i>
              </a>

              <a href="https://reactjs.org/">
                <i class="fa-brands fa-linkedin footerIcon"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="footernavigation">NAVIGATION</h4>

            <div className="footerLinkDiv">
              <div>
                <i class="fa-solid fa-chevron-right footerLinkIcon"></i>
                <Link className="footerlink" to="/homepage">
                  Homepage
                </Link>
              </div>

              <div>
                <i class="fa-solid fa-chevron-right footerLinkIcon"></i>
                <Link className="footerlink" to="/homepage">
                  About Us
                </Link>
              </div>

              <div>
                <i class="fa-solid fa-chevron-right footerLinkIcon"></i>
                <Link className="footerlink" to="/homepage">
                  Our Services
                </Link>
              </div>

              <div>
                <i class="fa-solid fa-chevron-right footerLinkIcon"></i>
                <Link className="footerlink" to="/homepage">
                  Our Projects
                </Link>
              </div>
            </div>
          </div>

          <div className="footerContactDiv">
            <h4 className="footerContact">CONTACT US</h4>

            <div>
              <div className="location">
                <i class="fa-sharp fa-solid fa-location-dot locationicon"></i>
                <p className="locationPtag">An address</p>
              </div>

              <div className="location">
                <i class="fa-solid fa-envelope locationicon"></i>
                <p className="locatonPtag">
                  <a href="mailto:hello@bhaso.com">Send Email</a>
                </p>
              </div>
            </div>

            <div>
              <div className="subscribe">
                <h5>Subscribe to our news letter</h5>
              </div>

              <div>
                <input
                  type={"email"}
                  placeholder="enter your email address"
                  className="subscribeInput"
                />

                <p className="subscribeBTNp">
                  <button className="subscribeBTN">Subscribe</button>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="underline"></div>

        <div className="afterUnderline">
          <p className="rightsReserved">All rights Reserved - bhaso Org</p>

          <p className="disclaimer fonts">DIsclaimer</p>

          <p className="privacyP fonts">Privacy Policy</p>
          <p className="TermsOfUse fonts">Term Of Use</p>
        </div>
      </div>
    </>
  );
}

export default Footer;

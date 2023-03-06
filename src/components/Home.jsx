import React from "react";
import Navbar from "./Navbar";
import Pillreminder from "./Pillreminder";
import Dappointment from "./Dappointment";
import Chatdoc from "./Chatdoc";
import Reviews from "./Reviews";
import Footer from "./Footer";
import "../mediaq.css";

function Home() {
  return (
    <>
      <Navbar />

      <div className="wrapper">
        <div className="bhasoWriteupDiv">
          <div className="bhasopill">
            <p>WELCOME TO BHASO PILL REMINDER</p>
          </div>

          <div className="bhasoHeader">
            <h1>NEVER FORGET ANOTHER PILL AGAIN</h1>
          </div>

          <div className="bhasoHeroPtag">
            <p>
              Our simple, free medication management app helps individuals stay
              on track with their meds.
            </p>
          </div>

          <div className="playappstore">
            <div>
              <a
                href="https://bhaso-capstone-project-up4j-oang219p4-onojason-miracle.vercel.app/"
                target={"_blank"}
                rel="noreferrer"
              >
                <img
                  src={
                    "https://res.cloudinary.com/blackgirlmagic/image/upload/v1677590619/Bhaso-Capstone-Project/get-it-on-google-play-badge_rx9eg4.png"
                  }
                  alt="playstore logo"
                  className="playstore"
                />
              </a>
            </div>

            <div>
              <a
                href="https://bhaso-capstone-project-up4j-oang219p4-onojason-miracle.vercel.app/"
                target={"_blank"}
                rel="noreferrer"
              >
                <img
                  src={
                    "https://res.cloudinary.com/blackgirlmagic/image/upload/v1677590660/Bhaso-Capstone-Project/2560px-Download_on_the_App_Store_Badge.svg_xwunms.png"
                  }
                  alt="appstore logo"
                  className="appstore"
                />
              </a>
            </div>
          </div>
        </div>

        <div>
          <svg
            width="753"
            height="735"
            className="heroSvg"
            viewBox="0 0 953 835"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M574.792 719.046C513.383 669.319 605.368 642.223 528.157 604.304C462.658 563.522 261.566 560.087 163.04 516.83C75.2614 478.292 -18.0913 396.042 4.17921 338.152C30.0006 271.032 176.73 276.65 266.685 247.415C316.917 231.09 389.391 234.429 419.313 203.236C469.771 150.635 415.057 52.5952 489.276 15.3689C552.48 -16.3326 665.415 8.8249 751.665 36.5375C836.536 63.8072 906.751 114.969 963.144 167.626C1013.98 215.092 1052.6 270.007 1058.09 322.658C1063.13 371.085 971.012 398.567 992.31 447.472C1023.44 518.944 1176.84 564.937 1194.75 636.474C1210.27 698.472 1139.02 745.468 1075.46 779.618C1010.47 814.536 925.627 842.961 831.605 831.586C737.122 820.155 641.622 773.162 574.792 719.046Z"
              fill="#037B31"
            />
          </svg>

          <div className="appdesign">
            <div className="appdesignsDiv1">
              <img
                src={
                  "https://res.cloudinary.com/blackgirlmagic/image/upload/v1677592160/Bhaso-Capstone-Project/Design_jfidta.png"
                }
                alt="appdesign1"
                className="appdesign1"
              />
            </div>

            <div className="appdesignsDiv2">
              <img
                src={
                  "https://res.cloudinary.com/blackgirlmagic/image/upload/v1677592160/Bhaso-Capstone-Project/Design2_uvxqio.png"
                }
                alt="appdesign2"
                className="appdesign3"
              />
            </div>

            <div className="appdesignsDiv3">
              <img
                src={
                  "https://res.cloudinary.com/blackgirlmagic/image/upload/v1677592160/Bhaso-Capstone-Project/Design3_bq4edl.png"
                }
                alt="appdesign3"
                className="appdesign3"
              />
            </div>
          </div>
        </div>
      </div>
      <Pillreminder />
      <Dappointment />
      <Chatdoc />
      <Reviews />
      <Footer />
    </>
  );
}

export default Home;

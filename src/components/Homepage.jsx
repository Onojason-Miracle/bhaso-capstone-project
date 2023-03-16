import React from "react";
import { Outlet, Link } from "react-router-dom";


function Homepage() {
  return (
    <>
      <div className="hero-section">
        <nav className="header">
          <div>
            <img
              src={
                "https://res.cloudinary.com/blackgirlmagic/image/upload/v1677068012/Bhaso-Capstone-Project/BHASO-logo-236_1_bldiq8.png"
              }
              className="logo"
              alt="logo"
            />
          </div>

          <div>
            <div className="home">
             
                <i class="fa-solid fa-house home-icon"></i>
                <Link  className="home-text1" to="/settings">Home</Link>
            
            </div>

            <div className="  home2 home-anchor2">
             
               <div className="home2">
               <i class="fa-solid fa-notes-medical home-icon"></i>
                <Link  className="home-text" to="/settings">Health Tips</Link>
               </div>
              
            </div>

            <div className="  home2 home-anchor2">
             
                <div className="home2">
                <i class="fa-solid fa-bell home-icon"></i>
                <Link  className="home-text" to="/layout">Notifications</Link>
                </div>
              
            </div>

            <div className="  home2 home-anchor2">
             
               <div className="home2">
               <i class="fa-solid fa-calendar-check home-icon"></i>
                <Link  className="home-text" to="/settings">Appointments</Link>
               </div>
              
            </div>

            <div className="  home2 home-anchor2">
            
               <div className="home2">
               <i class="fa-solid fa-book home-icon"></i>
                <Link  className="home-text" to="/settings">Reports</Link>
               </div>
            
            </div>

            <div className=" home2 home-anchor2">
              
               <div className="home2">
               <i class="fa-solid fa-user home-icon"></i>
                <Link  className="home-text" to="/settings">Profile</Link>
               </div>
            
            </div>
          </div>

          <div className="underline"></div>
          
          <div>
            <div className="  home2 home-anchor2">
              <div className="home2">
              <i class="fa-solid fa-gear home-icon"></i>
              <Link  className="home-text" to="/settings">Settings</Link>
              </div>
            </div>

            <div className="  home2 home-anchor2">
             <div className="home2">
             <i class="fa-solid fa-right-from-bracket home-icon"></i>
              <Link className="home-text" to="/logout">
                Logout
              </Link>
             </div>
            </div>
          </div>
        </nav>
      </div>
      <Outlet />
    </>
  );
}

export default Homepage;

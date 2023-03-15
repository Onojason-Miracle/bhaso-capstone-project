import React from "react";
import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import "../mediaq.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Login() {
    const [password, setPassword] = useState("password");
    const [passwordInput, setPasswordInput] = useState("");
    const handlePasswordChange =(evnt)=>{
        setPasswordInput(evnt.target.value);
    }
    const togglePassword =()=>{
      if(password==="password")
      {
       setPassword("text")
       return;
      }
      setPassword("password")
    }


  return (
    <>
      <Navbar />

      <div className="signup-wrapper">
        <div className="signup-div">
          <div className="login-form">
            <form action="/action_page.jsx" method="post" className="form">
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
                <button onClick={togglePassword}>
                { password==="password"?  <i class="fa-solid fa-eye password-eye " ></i> :<i class="fa-solid fa-eye-slash password-eye"></i> }

                </button>
               

                <input
                  type={"password"}
                  name="password"
                  placeholder="password "
                  required
                  className="form-control"
                  value={passwordInput}
                  onChange={handlePasswordChange}
                />
                <label className="form-label">Password :</label>
              </p>

              <p className="text-center">
                <Link className="signup-link" to="/signup">
                  forgot password?
                </Link>
              </p>

              <p>
                <input
                  type={"submit"}
                  value={"Login"}
                  className="form-control submit-btn"
                  name="submit"
                />
              </p>

              <p>
                Are you new to Bhaso?
                <Link className="signup-link" to="/signup">
                  create an account
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

export default Login;

import React from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const handleCheckboxChange = (event) => {
    setAgreeToTerms(event.target.checked);
  };
  return (
    <>
      <div>
        <nav class="navbar navbar-expand-lg">
          <div class="container-fluid" id="container-fluid">
            <a class="navbar-brand" href="#" id="logo">
              ARCHFORD
            </a>

            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
              <span class="navbar-toggler-icon"></span>
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul></ul>
              <ul class="navbar-nav me-auto" id="contentBox">
                <li class="nav-item" id="navItem">
                  <Link className="nav-link" to="/" as={Link} id="navTxt">
                    Home
                  </Link>
                </li>
                <li class="nav-item" id="navItem">
                  <Link className="nav-link" to="/about" as={Link} id="navTxt">
                    About
                  </Link>
                </li>
                <li class="nav-item" id="navItem">
                  <Link
                    className="nav-link"
                    to="/projects"
                    as={Link}
                    id="navTxt"
                  >
                    Projects
                  </Link>
                </li>
                <li class="nav-item" id="navItem">
                  <Link className="nav-link" to="/blogs" as={Link} id="navTxt">
                    Blog
                  </Link>
                </li>
             
              </ul>
              <div class="d-flex" id="navBtn">
                <div id="socialMediaLinks">
                  <i class="bx bxs-phone"></i>
                  <i class="bx bxl-linkedin-square"></i>
                  <i class="bx bxl-github"></i>
                  <i class="bx bxs-envelope"></i>
                </div>
                <button
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                >
                  LET'S TALK
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog ">
          <div className="modal-content">
            <div className="modal-header" id="chatBoxHead">
              <span></span>
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Live chat <i className="bx bxl-whatsapp"></i>
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body" id="chatModalBody">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={agreeToTerms}
                  onChange={handleCheckboxChange}
                  id="termsCheckbox"
                />
                <label className="form-check-label" htmlFor="termsCheckbox">
                  <h6>Agree to Terms and Conditions:</h6>
                </label>
                <div>
                  <small>
                    By clicking "Continue," you agree to the terms and
                    conditions. You will be directed to a private chat on
                    WhatsApp. Messages sent via WhatsApp are private.
                  </small>
                </div>
                <div id="checkTandCbtn">
                  {agreeToTerms && (
                    <a href="http://wa.me/27817338886">
                      <button>Continue</button>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;

import React from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
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
                <li class="nav-item" id="navItem">
                  <Link className="nav-link" to="/admni" as={Link} id="navTxt">
                    Admin
                  </Link>
                </li>
              </ul>
              <div class="d-flex" id="navBtn">
                <div id="socialMediaLinks">
                <i class='bx bxs-phone'></i>
                <i class='bx bxl-linkedin-square'></i>
                <i class='bx bxl-github'></i>
                <i class='bx bxs-envelope'></i>
                </div>
                <button
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                >
                  LET'S TALK
                  {/* <i class="bx bxl-whatsapp"></i> */}
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <div
        class="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header" id="chatBoxHead">
              
              <span></span>
              <h1 class="modal-title fs-5" id="staticBackdropLabel">
                Live chat  <i class="bx bxl-whatsapp"></i>
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body" id="chatModalBody">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckIndeterminate"
                />
                <label class="form-check-label" for="flexCheckIndeterminate">
                  <h6>Agree to Terms and Conditions:</h6>
                </label>
                <div>
                  <small>
                    By clicking "Continue",you agree to terms and conditions.
                    you will be directed to a private chat on WhatsApp. Messages
                    sent via WhatsApp are private.
                  </small>
                </div>
                <div id="checkTandCbtn">
                  <a href="http://wa.me/27817338886">
                    <button>Continue</button>
                  </a>
                </div>
              </div>
            </div>

            {/* <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;

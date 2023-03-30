import React from "react";
import "./Navbar.css";

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg" id="navBarBox">
        <div className="container">
          <a className="navbar-brand" href="#" id="logo">
            archford
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-between"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0 position-sticky">
              <li className="nav-item">
                <Link className="nav-link" to={"/home"} id="navTxt">
                  home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/about"} id="navTxt">
                  about
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/project"} id="navTxt">
                  project
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
              <button
                className="btn"
                type="submit"
                id="textBtn"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                	
                  <i class="far fa-comments"></i>
                let's chat
              </button>
            </ul>
          </div>
        </div>
      </nav>

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered modal-lg" >
          <div class="modal-content" id="modalContent">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Send me a message
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Enter email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Enter your phone
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="exampleFormControlInput1"
                  
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                  Type your message
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" id="modalSendBtn">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Navbar;

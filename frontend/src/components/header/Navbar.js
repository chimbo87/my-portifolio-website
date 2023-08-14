import React from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import io from "socket.io-client";

const socket = io.connect("http://localhost:3001");

function Navbar() {
  return (
    <>
      <div>
        <nav class="navbar navbar-expand-lg">
          <div class="container-fluid">
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
             
                <button
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                >
                  LET'S TALK
                  <i class='bx bxl-whatsapp'><a href="http://wa.me/27817338886"></a></i>
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
              <h1 class="modal-title fs-5" id="staticBackdropLabel">
                Live chat
              </h1>
              <span></span>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body" id="chatModalBody">
              <small>
                Please provide your email address and phone number to continue
              </small>
              <form id="chatUserDetailsBox">
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleFormControlInput1"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    Phone number
                  </label>
                  <input
                    type="number"
                    class="form-control"
                    id="exampleFormControlInput1"
                  />
                </div>
                <div id="chatModalBtn">
                  <button>Submit</button>
                </div>
              </form>
            </div>
            <div class="modal-body">
              <p>
                ontrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur,
              </p>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;

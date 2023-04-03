import React from "react";
import "./Project.css";
import reviewImg from "../../assets/review.jpg";
import project1 from "../../assets/project1.jpeg";
import project2 from "../../assets/project2.jpeg";

function Project() {
  return (
    <>
      <div className="container-fluid" id="projectSearchBox">
        <div class="input-group mb-3" id="projectSearch">
          <input
            type="text"
            class="form-control"
            aria-label="Text input with dropdown button"
          />
          <button
            class="btn btn-outline-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Search
          </button>
          <ul class="dropdown-menu dropdown-menu-end">
            <li>
              <a class="dropdown-item" href="#">
                Html,Css & JavaScript
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                React.JS
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Angular.JS
              </a>
            </li>
            <li>
              <hr class="dropdown-divider" />
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Node.js
              </a>
            </li>
          </ul>
        </div>
        <div id="projectSect">
          <select class="form-select" aria-label="Default select example">
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
      </div>
      <div className="container">
        <div class="row">
          <div class="col-12 col-lg-6 ">
            <div id="projectCard">
              <img src={project1} />
              <div id="projectTxt">
                <h6>Html, Css & JavaScript</h6>
                <h5>Construction Website</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  pellentesque a velit in tempor. In tempus nunc in mauris
                  mollis ullamcorper.
                </p>
                <div id="projectLinks">
                  {" "}
                  <a href="#">link hre</a>
                  <a href="#">link hre</a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-6 ">
            <div id="projectCard">
              <img src={project2} />
              <div id="projectTxt">
                <h6>Mern stack-app</h6>
                <h5>Construction Website</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  pellentesque a velit in tempor. In tempus nunc in mauris
                  mollis ullamcorper.
                </p>
                <div id="projectLinks">
                  <a href="#">Git hub</a>
                  <a href="#">Visit Web</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-lg-6 ">
            <div id="projectCard">
              <img src={reviewImg} />
              <div id="projectTxt">
                <h6>Html, Css & JavaScript</h6>
                <h5>Construction Website</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  pellentesque a velit in tempor. In tempus nunc in mauris
                  mollis ullamcorper.
                </p>
                <div id="projectLinks">
                  {" "}
                  <a href="#">link hre</a>
                  <a href="#">link hre</a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-6 ">
            <div id="projectCard">
              <img src={reviewImg} />
              <div id="projectTxt">
                <h6>Mern stack-app</h6>
                <h5>Construction Website</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  pellentesque a velit in tempor. In tempus nunc in mauris
                  mollis ullamcorper.
                </p>
                <div id="projectLinks">
                  {" "}
                  <a href="#">link hre</a>
                  <a href="#">link hre</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-lg-6 ">
            <div id="projectCard">
              <img src={reviewImg} />
              <div id="projectTxt">
                <h6>Html, Css & JavaScript</h6>
                <h5>Construction Website</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  pellentesque a velit in tempor. In tempus nunc in mauris
                  mollis ullamcorper.
                </p>
                <div id="projectLinks">
                  {" "}
                  <a href="#">link hre</a>
                  <a href="#">link hre</a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-6 ">
            <div id="projectCard">
              <img src={reviewImg} />
              <div id="projectTxt">
                <h6>Mern stack-app</h6>
                <h5>Construction Website</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  pellentesque a velit in tempor. In tempus nunc in mauris
                  mollis ullamcorper.
                </p>
                <div id="projectLinks">
                  {" "}
                  <a href="#">link hre</a>
                  <a href="#">link hre</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-lg-6 ">
            <div id="projectCard">
              <img src={reviewImg} />
              <div id="projectTxt">
                <h6>Html, Css & JavaScript</h6>
                <h5>Construction Website</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  pellentesque a velit in tempor. In tempus nunc in mauris
                  mollis ullamcorper.
                </p>
                <div id="projectLinks">
                  {" "}
                  <a href="#">link hre</a>
                  <a href="#">link hre</a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-6 ">
            <div id="projectCard">
              <img src={reviewImg} />
              <div id="projectTxt">
                <h6>Mern stack-app</h6>
                <h5>Construction Website</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  pellentesque a velit in tempor. In tempus nunc in mauris
                  mollis ullamcorper.
                </p>
                <div id="projectLinks">
                  {" "}
                  <a href="#">link hre</a>
                  <a href="#">link hre</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-lg-6 ">
            <div id="projectCard">
              <img src={reviewImg} />
              <div id="projectTxt">
                <h6>Html, Css & JavaScript</h6>
                <h5>Construction Website</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  pellentesque a velit in tempor. In tempus nunc in mauris
                  mollis ullamcorper.
                </p>
                <div id="projectLinks">
                  {" "}
                  <a href="#">link hre</a>
                  <a href="#">link hre</a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-6 ">
            <div id="projectCard">
              <img src={reviewImg} />
              <div id="projectTxt">
                <h6>Mern stack-app</h6>
                <h5>Construction Website</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  pellentesque a velit in tempor. In tempus nunc in mauris
                  mollis ullamcorper.
                </p>
                <div id="projectLinks">
                  {" "}
                  <a href="#">link hre</a>
                  <a href="#">link hre</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;

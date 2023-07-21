import React from "react";
import "./Projects.css";
import projectImg from "../assets/project01.jpeg";
import project01 from "../assets/project01.jpeg";
import project02 from "../assets/project02.jpeg";
import project03 from "../assets/project03.jpeg";
function Projects() {
  return (
    <div className="container">
      <div id="projectsNav">
        <div id="projectNavSelect">
          <select class="form-select" aria-label="Default select example">
            <option selected>All</option>
            <option value="1">Mern Stack</option>
            <option value="2">Html, Css & JavaScript</option>
            <option value="3">Angular</option>
          </select>
        </div>

        <div class="mb-3" id="projectSearchInput">
          <input
            type="search"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Search ..."
          />
          <i class="bx bx-search"></i>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-6 md-4">
          <div id="projectBoxCard">
            <div id="projectImg">
              <img src={project03} />
            </div>
            <div id="projectCardText">
              <div id="projectsHead">
                <div>
                  <h5>Mern Stack</h5>
                </div>
                <div>
                  <small>
                    <i>(Rastaurant Web-App)</i>
                  </small>
                </div>
              </div>

              <p>
                The is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution
              </p>
              <div id="projectIcons">
                <div id="projectsLinks">
                  <div id="projectIconsContent">
                    <a href="">
                      <small>Git Hub</small>
                    </a>
                  </div>
                  <div id="projectIconsContent">
                    <a href="">
                      <small>Visit Site</small>
                    </a>
                  </div>
                </div>
                <div id="projectsIconWrap">
                  <div id="projectIconsBox">
                    <i class="bx bx-heart"></i>
                    <small>21</small>
                  </div>

                  <div id="projectIconsBox">
                    <i class="bx bx-share-alt"></i>
                    <small>8</small>
                  </div>
                </div>
                <div>
                  <small>05 Jan 2023</small>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-6 md-4">
          <div id="projectBoxCard">
            <div id="projectImg">
              <img src={project02} />
            </div>
            <div id="projectCardText">
              <div id="projectsHead">
                <div>
                  <h5>Html, Css & JavaScript</h5>
                </div>
                <div>
                  <small>
                    <i>(Construction website)</i>
                  </small>
                </div>
              </div>

              <p>
                The is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution
              </p>
              <div id="projectIcons">
                <div id="projectsLinks">
                  <div id="projectIconsContent">
                    <a href="">
                      <small>Git Hub</small>
                    </a>
                  </div>
                  <div id="projectIconsContent">
                    <a href="">
                      <small>Visit Site</small>
                    </a>
                  </div>
                </div>
                <div id="projectsIconWrap">
                  <div id="projectIconsBox">
                    <i class="bx bx-heart"></i>
                    <small>21</small>
                  </div>

                  <div id="projectIconsBox">
                    <i class="bx bx-share-alt"></i>
                    <small>8</small>
                  </div>
                </div>
                <div>
                  <small>05 Jan 2023</small>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-6 md-4">
          <div id="projectBoxCard">
            <div id="projectImg">
              <img src={project01} />
            </div>
            <div id="projectCardText">
              <div id="projectsHead">
                <div>
                  <h5>Angular.Js</h5>
                </div>
                <div>
                  <small>
                    <i>(E-Commerce website)</i>
                  </small>
                </div>
              </div>

              <p>
                The is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution
              </p>
              <div id="projectIcons">
                <div id="projectsLinks">
                  <div id="projectIconsContent">
                    <a href="">
                      <small>Git Hub</small>
                    </a>
                  </div>
                  <div id="projectIconsContent">
                    <a href="">
                      <small>Visit Site</small>
                    </a>
                  </div>
                </div>
                <div id="projectsIconWrap">
                  <div id="projectIconsBox">
                    <i class="bx bx-heart"></i>
                    <small>21</small>
                  </div>

                  <div id="projectIconsBox">
                    <i class="bx bx-share-alt"></i>
                    <small>8</small>
                  </div>
                </div>
                <div>
                  <small>05 Jan 2023</small>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-6 md-4">
          <div id="projectBoxCard">
            <div id="projectImg">
              <img src={project03} />
            </div>
            <div id="projectCardText">
              <div id="projectsHead">
                <div>
                  <h5>React.Js & Firebase Database</h5>
                </div>
                <div>
                  <small>
                    <i>(Payment Management System)</i>
                  </small>
                </div>
              </div>

              <p>
                The is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution
              </p>
              <div id="projectIcons">
                <div id="projectsLinks">
                  <div id="projectIconsContent">
                    <a href="">
                      <small>Git Hub</small>
                    </a>
                  </div>
                  <div id="projectIconsContent">
                    <a href="">
                      <small>Visit Site</small>
                    </a>
                  </div>
                </div>
                <div id="projectsIconWrap">
                  <div id="projectIconsBox">
                    <i class="bx bx-heart"></i>
                    <small>21</small>
                  </div>

                  <div id="projectIconsBox">
                    <i class="bx bx-share-alt"></i>
                    <small>8</small>
                  </div>
                </div>
                <div>
                  <small>05 Jan 2023</small>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-6 md-4">
          <div id="projectBoxCard">
            <div id="projectImg">
              <img src={project03} />
            </div>
            <div id="projectCardText">
              <div id="projectsHead">
                <div>
                  <h5>Mern Stack</h5>
                </div>
                <div>
                  <small>
                    <i>(Rastaurant Web-App)</i>
                  </small>
                </div>
              </div>

              <p>
                The is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution
              </p>
              <div id="projectIcons">
                <div id="projectsLinks">
                  <div id="projectIconsContent">
                    <a href="">
                      <small>Git Hub</small>
                    </a>
                  </div>
                  <div id="projectIconsContent">
                    <a href="">
                      <small>Visit Site</small>
                    </a>
                  </div>
                </div>
                <div id="projectsIconWrap">
                  <div id="projectIconsBox">
                    <i class="bx bx-heart"></i>
                    <small>21</small>
                  </div>

                  <div id="projectIconsBox">
                    <i class="bx bx-share-alt"></i>
                    <small>8</small>
                  </div>
                </div>
                <div>
                  <small>05 Jan 2023</small>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* hre */}

     
      </div>
    </div>
  );
}

export default Projects;

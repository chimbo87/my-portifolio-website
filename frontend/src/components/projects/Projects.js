import React from "react";
import "./Projects.css";
import projectImg from "../assets/project01.jpeg";
import project01 from "../assets/project01.jpeg";
import project02 from "../assets/project02.jpeg";
import project03 from "../assets/project03.jpeg";
import Footer from "../footer/Footer";
function Projects() {
  return (
    <>
      <div className="container-fluid" id="projectSectionBox">
        <h4>Projects</h4>
      </div>
      <div className="container" id="projectWrapBox">
        <div id="projectsNav">
          <div id="projectNavSelect">
            <select class="form-select" aria-label="Default select example">
              <option selected>All</option>
              <option value="1">Mern Stack</option>
              <option value="2">Html, Css & JavaScript</option>
              <option value="3">Angular</option>
            </select>
          </div>

          <div id="projectSearchInput">
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
          <div class="col-lg-4 md-4">
            <div id="projectBoxCard">
              <div
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                id="projectImg"
              >
                <img src={project03} />
                <div id="overlay">
                  <p>
                    View More <i class="bx bx-arrow-back bx-rotate-180"></i>
                  </p>
                </div>
              </div>
              <div id="projectCardText">
                <div id="projectsHead">
                  <div>
                    <small>Rastaurant Web-App</small>
                  </div>
                  <div>
                    <h5>Mern Stack</h5>
                  </div>
                </div>

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

                  <div>
                    <i>
                      <small>05 Jan 2023</small>
                    </i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 md-4">
            <div id="projectBoxCard">
              <div
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                id="projectImg"
              >
                <img src={project03} />
                <div id="overlay">
                  <p>
                    View More <i class="bx bx-arrow-back bx-rotate-180"></i>
                  </p>
                </div>
              </div>
              <div id="projectCardText">
                <div id="projectsHead">
                  <div>
                    <small>Social media app</small>
                  </div>
                  <div>
                    <h5>Angular and Firebase</h5>
                  </div>
                </div>

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

                  <div>
                    <i>
                      <small>05 Jan 2023</small>
                    </i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 md-4">
            <div id="projectBoxCard">
              <div
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                id="projectImg"
              >
                <img src={project03} />
                <div id="overlay">
                  <p>
                    View More <i class="bx bx-arrow-back bx-rotate-180"></i>
                  </p>
                </div>
              </div>
              <div id="projectCardText">
                <div id="projectsHead">
                  <div>
                    <small>Portifolio</small>
                  </div>
                  <div>
                    <h5>Mern stack</h5>
                  </div>
                </div>

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

                  <div>
                    <i>
                      <small>05 Jan 2023</small>
                    </i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 md-4">
            <div id="projectBoxCard">
              <div
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                id="projectImg"
              >
                <img src={project03} />
                <div id="overlay">
                  <p>
                    View More <i class="bx bx-arrow-back bx-rotate-180"></i>
                  </p>
                </div>
              </div>
              <div id="projectCardText">
                <div id="projectsHead">
                  <div>
                    <small>Rastaurant Web-App</small>
                  </div>
                  <div>
                    <h5>Mern Stack</h5>
                  </div>
                </div>

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

                  <div>
                    <i>
                      <small>05 Jan 2023</small>
                    </i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 md-4">
            <div id="projectBoxCard">
              <div
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                id="projectImg"
              >
                <img src={project03} />
                <div id="overlay">
                  <p>
                    View More <i class="bx bx-arrow-back bx-rotate-180"></i>
                  </p>
                </div>
              </div>
              <div id="projectCardText">
                <div id="projectsHead">
                  <div>
                    <small>Rastaurant Web-App</small>
                  </div>
                  <div>
                    <h5>Mern Stack</h5>
                  </div>
                </div>

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

                  <div>
                    <i>
                      <small>05 Jan 2023</small>
                    </i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 md-4">
            <div id="projectBoxCard">
              <div
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                id="projectImg"
              >
                <img src={project01} />
                <div id="overlay">
                  <p>
                    View More <i class="bx bx-arrow-back bx-rotate-180"></i>
                  </p>
                </div>
              </div>
              <div id="projectCardText">
                <div id="projectsHead">
                  <div>
                    <small>Rastaurant Web-App</small>
                  </div>
                  <div>
                    <h5>Mern Stack</h5>
                  </div>
                </div>

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

                  <div>
                    <i>
                      <small>05 Jan 2023</small>
                    </i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div id="projectPagination">
        <nav aria-label="...">
          <ul class="pagination">
            <li class="page-item disabled">
              <a class="page-link">Previous</a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                1
              </a>
            </li>
            <li class="page-item active" aria-current="page">
              <a class="page-link" href="#">
                2
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                3
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                Next
              </a>
            </li>
          </ul>
        </nav>
        </div>
        
      </div>

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered modal-xl">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Project Description
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div class="row">
                <div class="col-lg-6 md-4" id="projectModalImgBox">
                  <img src={project03} />
                </div>
                <div class="col-lg-6 md-4" id="projectModalTextsBox">
                  <h4>Mern Stack Project</h4>
                  <h5>Rastaurant Menu Web-app</h5>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it look like
                    readable English. Many desktop publishing packages and web
                    page editors now use Lorem Ipsum as their default model
                    text,{" "}
                  </p>
                  <div id="projectCardIcon">
                    <div id="projectLinks">
                      <a href="#">Git hub </a>
                      <a href="#">Visit Site</a>
                    </div>
                    <div id="modalProjectIcons">
                      <i class="bx bx-like">
                        <small>31</small>
                      </i>
                      <i class="bx bx-share-alt">
                        <small>7</small>
                      </i>
                      {/* <small>06 June 2023</small> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              {/* <button type="button" class="btn btn-primary">
                Save changes
              </button> */}
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default Projects;

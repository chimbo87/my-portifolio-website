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
        <div class="col-lg-4 md-4">
          <div id="projectBoxCard">
            <div id="projectImg">
              <img src={project03} />
            </div>
            <div id="projectCardText">
              <div id="projectsHead">
                <div>
                  <small>(Rastaurant Web-App)</small>
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
                 <i><small>05 Jan 2023</small></i> 
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-4 md-4">
          <div id="projectBoxCard">
            <div id="projectImg">
              <img src={project01} />
            </div>
            <div id="projectCardText">
              <div id="projectsHead">
                <div>
                  <small>(Rastaurant Web-App)</small>
                </div>
                <div>
                  <h5>Html, Css & JavaScript</h5>
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
                 <i><small>05 Jan 2023</small></i> 
                </div>
              </div>
            </div>
          </div>
        </div>


        <div class="col-lg-4 md-4">
          <div id="projectBoxCard">
            <div id="projectImg">
              <img src={project01} />
            </div>
            <div id="projectCardText">
              <div id="projectsHead">
                <div>
                  <small>(Rastaurant Web-App)</small>
                </div>
                <div>
                  <h5>Angular & Firebase</h5>
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
                 <i><small>05 Jan 2023</small></i> 
                </div>
              </div>
            </div>
          </div>
        </div>


        <div class="col-lg-4 md-4">
          <div id="projectBoxCard">
            <div id="projectImg">
              <img src={project03} />
            </div>
            <div id="projectCardText">
              <div id="projectsHead">
                <div>
                  <small>(Rastaurant Web-App)</small>
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
                 <i><small>05 Jan 2023</small></i> 
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-4 md-4">
          <div id="projectBoxCard">
            <div id="projectImg">
              <img src={project03} />
            </div>
            <div id="projectCardText">
              <div id="projectsHead">
                <div>
                  <small>(Rastaurant Web-App)</small>
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
                 <i><small>05 Jan 2023</small></i> 
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-4 md-4">
          <div id="projectBoxCard">
            <div id="projectImg">
              <img src={project03} />
            </div>
            <div id="projectCardText">
              <div id="projectsHead">
                <div>
                  <small>(Rastaurant Web-App)</small>
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
                 <i><small>05 Jan 2023</small></i> 
                </div>
              </div>
            </div>
          </div>
        </div>
    
      </div>
    </div>
  );
}

export default Projects;

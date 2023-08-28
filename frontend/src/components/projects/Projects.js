import React from "react";
import "./Projects.css";
import Footer from "../footer/Footer";
import { useState, useEffect } from "react";
import LoadingSpinner from "../loader/LoadingSpinner";
import { useNavigate } from "react-router-dom";

function Projects() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [projects, setProjects] = useState([]);
  const [filterRecords, setFilterRecords] = useState([]);


  const getProjects = async () => {
    setLoading(true);
    const response = await fetch("http://localhost:8000/projects").then(
      (response) => response.json()
    );
    {
      setProjects(response);
      setFilterRecords(response);
      setLoading(false);
    }

    console.log("our products list:", response);
  };
  useEffect(() => {
    getProjects();
  }, []);

  const handleFilter = (event) => {
    const newData = filterRecords.filter((row) =>
      row.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setProjects(newData);
  };

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
              onChange={handleFilter}
            />
            <i class="bx bx-search"></i>
          </div>
        </div>
        {!loading && (
          <div class="row ">
            {projects.map((project) => {
              return (
                <div class="col-lg-4 md-4">
                  <div id="projectBoxCard">
                    <div
                      // data-bs-toggle="modal"
                      // data-bs-target="#exampleModal"
                      id="projectImg"
                      onClick={() => {
                        navigate(`/projectdescription/${project._id }`);
                      }}
                      
                    >
                      <img src={project.image} />
                      <div id="overlay">
                        <p>
                          View More{" "}
                          <i class="bx bx-arrow-back bx-rotate-180"></i>
                        </p>
                      </div>
                    </div>
                    <div id="projectCardText">
                      <div id="projectsHead">
                        <div>
                          <small>{project.name}</small>
                        </div>
                        <div>
                          <h5>{project.title}</h5>
                        </div>
                      </div>

                      <div id="projectIcons">
                        <div id="projectsLinks">
                          <div id="projectIconsContent">
                            <a href={project.githubLink}>
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
              );
            })}
          </div>
        )}

        {loading && <LoadingSpinner />}

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
              <h4>hello wolrd</h4>
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

import React from "react";
import "./Projects.css";
import Footer from "../footer/Footer";
import { useState, useEffect } from "react";
import LoadingSpinner from "../loader/LoadingSpinner";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";

function Projects() {
  const navigate = useNavigate();
  const [filterName, setFilterName] = useState(""); // State for selected name filter
  const [searchText, setSearchText] = useState(""); // State for search input
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // 2 rows x 3 columns = 6 items per page

  const getProjects = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:8000/projects");
      const data = await response.json();
      setProjects(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    getProjects();
  }, []);

  const handleFilterByName = (event) => {
    setFilterName(event.target.value);
  };

  const handleSearch = (event) => {
    setSearchText(event.target.value);
  };

  const filteredDataByName = filterName
    ? projects.filter(
        (project) => project.title.toLowerCase() === filterName.toLowerCase()
      )
    : projects;

  const filteredDataBySearch = searchText
    ? projects.filter((project) =>
        project.title.toLowerCase().includes(searchText.toLowerCase())
      )
    : projects;

  const filteredData = filteredDataByName.filter((project) =>
    filteredDataBySearch.includes(project)
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  return (
    <>
      <div className="container-fluid" id="projectSectionBox">
        <h4>Projects</h4>
      </div>
      <div className="container" id="projectWrapBox">
        <div id="projectsNav">
          <div id="projectNavSelect">
            <select
              class="form-select"
              aria-label="Default select example"
              value={filterName}
              onChange={handleFilterByName}
            >
              <option value="">Filter all</option>
              <option value="Mern Stack App">Mern Stack</option>
              <option value="Html, Css and JavaScript">
                {" "}
                Html Css and JavaScript{" "}
              </option>
              <option value="Firebase and Angular"> Angular</option>
              <option value="Firebase and Angular"> React.js</option>
            </select>
          </div>

          <div id="projectSearchInput">
            <input
              type="search"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Search ..."
              value={searchText}
              onChange={handleSearch}
            />
            <i class="bx bx-search"></i>
          </div>
        </div>
        {!loading && (
          <div class="row ">
            {currentItems.map((project) => {
              return (
                <div class="col-lg-4 md-4">
                  <div id="projectBoxCard">
                    <div
                      id="projectImg"
                      onClick={() => {
                        navigate(`/projectdescription/${project._id}`);
                      }}
                    >
                      <img
                        src={`http://localhost:8000/uploads/${project.image}`}
                      />
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
                            <small>
                              {format(
                                new Date(project.createdAt),
                                "yyyy-MM-dd "
                              )}
                            </small>
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

        <div className="pagination" id="projectPagination">
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <i class="bx bx-arrow-back"></i>
            Prev
          </button>
          <span>
            Page {currentPage} of{" "}
            {Math.ceil(filteredData.length / itemsPerPage)}
          </span>
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={indexOfLastItem >= filteredData.length}
          >
            Next
            <i class="bx bx-arrow-back bx-flip-horizontal"></i>
          </button>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
}

export default Projects;

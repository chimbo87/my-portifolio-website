import "./ViewProjects.css";
import React from "react";
import { useState, useEffect } from "react";
import LoadingSpinner from "../loader/LoadingSpinner";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ViewProjects() {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const [filterRecords, setFilterRecords] = useState([]);
  const [loading, setLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const getProjects = async () => {
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

  const deleteProject = async (_id) => {
    try {
      await axios.delete(`http://localhost:8000/projects${_id}`);
      getProjects();
    } catch (error) {
      console.error("Error deleting email:", error);
    }
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProjects = projects.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <>
      <div id="feedbackSection">
        <div id="menuListInput">
          <input
            type="text"
            placeholder="Search..."
            onChange={handleFilter}
            style={{
              padding: "6px 15px",
              border: "1px solid gray",
              margin: "4px 4px",
            }}
          />
        </div>
        <div class="table-responsive">
          <table class="table table-striped table-bordered  align-middle">
            <thead>
              <tr class="table table-dark">
                <th scope="col">ID</th>
                <th scope="col">TITLE</th>
                <th scope="col">MESSAGE</th>
                <th scope="col">DATE</th>
                <th scope="col">UPDATE</th>
                <th scope="col">REMOVE</th>
              </tr>
            </thead>

            <tbody>
              {currentProjects.map((project) => (
                <tr key={project._id}>
                  <td>
                    <small>{project._id}</small>
                  </td>
                  <td>
                    <small>{project.title}</small>
                  </td>
                  <td>
                    <small>{project.description}</small>
                  </td>
                  <td>
                    <small>{project.createdAt}</small>
                  </td>
                  <td>
                    <button
                      id="feedbackUpdateBtn"
                      onClick={() => {
                        navigate(`/admni/viewupdateproject/${project._id}`);
                      }}
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      id="feedbackUpdateBtn"
                      onClick={() => deleteProject(project._id)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {loading && <LoadingSpinner />}
        </div>

        <div id="projectPagination">
          <nav aria-label="...">
            <ul className="pagination">
              <li
                className={`page-item ${currentPage === 1 ? "disabled" : ""}`}
              >
                <button
                  className="page-link"
                  onClick={() => setCurrentPage(currentPage - 1)}
                >
                  Prev
                </button>
              </li>
              {Array.from(
                { length: Math.ceil(projects.length / itemsPerPage) },
                (_, index) => (
                  <li
                    key={index}
                    className={`page-item ${
                      currentPage === index + 1 ? "active" : ""
                    }`}
                  >
                    <button
                      className="page-link"
                      onClick={() => setCurrentPage(index + 1)}
                    >
                      {index + 1}
                    </button>
                  </li>
                )
              )}
              <li
                className={`page-item ${
                  currentPage === Math.ceil(projects.length / itemsPerPage)
                    ? "disabled"
                    : ""
                }`}
              >
                <button
                  className="page-link"
                  onClick={() => setCurrentPage(currentPage + 1)}
                >
                  Next
                </button>
              </li>
            </ul>
          </nav>
        </div>

        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content">
              <div class="modal-header" id="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">
                  Updateoject
                </h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewProjects;

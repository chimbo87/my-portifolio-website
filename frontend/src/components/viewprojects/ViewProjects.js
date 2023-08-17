import "./ViewProjects.css";
import React from "react";
import { useState, useEffect } from "react";

const Spinner = () => {
  return (
    <div class="text-center" id="loader">
      <div class="spinner-grow text-center" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

// const BlogUpdate = () => {
//   return (
//     <div>
//       <h3>hello world</h3>
//     </div>
//   );
// };

function ViewProjects() {
  const [projects, setProjects] = useState([]);
  const [filterRecords, setFilterRecords] = useState([]);
  const [loading, setLoading] = useState(true);

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

          {projects.map((project) => {
            return (
              <>
                {loading ? (
                  <Spinner />
                ) : (
                  <tbody>
                    <tr>
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
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                          id="feedbackUpdateBtn"
                        >
                          Edit
                        </button>
                      </td>
                      <td>
                        <button
                          // data-bs-toggle="modal"
                          // data-bs-target="#exampleModal"
                          id="feedbackUpdateBtn"
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  </tbody>
                )}
              </>
            );
          })}
        </table>
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
                  Update Project
                </h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <div class="mb-3" id="modalInputBox">
                  <label for="exampleFormControlInput1" class="form-label">
                   
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Project Name"
                  />
                </div>
                <div class="mb-3" id="modalInputBox">
                  <label for="exampleFormControlInput1" class="form-label">
                   
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Project Title"
                  />
                </div>
                <div class="row">
              
              <div class="col-lg-6 md-4">
                {" "}
                <div class="mb-3"  id="ProjectInput">
                  <label for="exampleFormControlInput1" class="form-label">
                    {/* Email address */}
                  </label>
                  <input
                    type="link"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Github link"
                  />
                </div>
              </div>
              <div class="col-lg-6 md-4">
                {" "}
                <div class="mb-3"  id="ProjectInput">
                  <label for="exampleFormControlInput1" class="form-label">
                    {/* Email address */}
                  </label>
                  <input
                    type="link"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Web link"
                  />
                </div>
              </div>
            </div>

                <div class="mb-3" id="modalInputBox">
                  <label for="exampleFormControlInput1" class="form-label">
                    
                  </label>
                  <input
                    type="file"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                  />
                </div>
                <div class="mb-3"id="modalInputBox">
                  <label for="exampleFormControlTextarea1" class="form-label">
                    
                  </label>
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder="Message"
                  ></textarea>
                </div>
                <div id="modalButton"><button>Update</button></div>
              </div>
              {/* <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" class="btn btn-primary">
                  Update Menu
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewProjects;

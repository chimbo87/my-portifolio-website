import "./Feedbacks.css";
import React from "react";
import { useState, useEffect } from "react";
import LoadingSpinner from "../loader/LoadingSpinner";
import axios from 'axios';

function Feedbacks() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [filterRecords, setFilterRecords] = useState([]);
  const [loading, setLoading] = useState(true);

  const getFeedbacks = async () => {
    const response = await fetch("http://localhost:8000/feedback").then(
      (response) => response.json()
    );

    {
      setFeedbacks(response);
      setFilterRecords(response);
      setLoading(false);
    }

    console.log("our products list:", response);
  };
  useEffect(() => {
    getFeedbacks();
  }, []);

  const handleFilter = (event) => {
    const newData = filterRecords.filter((row) =>
      row.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setFeedbacks(newData);
  };

  const deleteEmail = async (_id) => {
    try {
      await axios.delete(`http://localhost:8000/feedback${_id}`); // Adjust the API endpoint
      getFeedbacks(); // Refresh the list after deleting
    } catch (error) {
      console.error('Error deleting email:', error);
    }
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

              margin: "4px 4px",
            }}
          />
        </div>
        <div class="table-responsive">
          <table class="table table-striped table-bordered  align-middle">
            <thead>
              <tr class="table table-dark">
                <th scope="col">ID</th>
                <th scope="col">NAME</th>
                <th scope="col">PHONE</th>
                <th scope="col">EMAIL</th>
                <th scope="col">MESSAGE</th>
                <th scope="col">DATE</th>
                <th scope="col">ACTION</th>
              </tr>
            </thead>

            {feedbacks.map((feedback) => {
              return (
                <>
                  {!loading && (
                    <tbody>
                      <tr>
                        <td>
                          <small>{feedback._id}</small>
                        </td>
                        <td>
                          <small>{feedback.name}</small>
                        </td>
                        <td>
                          <small>{feedback.number}</small>
                        </td>
                        <td>
                          <small>{feedback.email}</small>
                        </td>
                        <td>
                          <small>{feedback.message}</small>
                        </td>
                        <td>
                          <small>{feedback.createdAt}</small>
                        </td>
                        <td>
                          <button
                            // data-bs-toggle="modal"
                            // data-bs-target="#exampleModal"
                            id="feedbackUpdateBtn"
                            onClick={() => deleteEmail(feedback._id)}
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
          {loading && <LoadingSpinner />}
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
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">
                  Are you sure you want to remove ?
                </h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">...</div>
              <div class="modal-footer">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Feedbacks;

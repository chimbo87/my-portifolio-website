import "./Feedbacks.css";
import React from "react";
import { useState, useEffect } from "react";
import LoadingSpinner from "../loader/LoadingSpinner";
import axios from "axios";

function Feedbacks() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [filterRecords, setFilterRecords] = useState([]);
  const [loading, setLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const getFeedbacks = async () => {
    const response = await fetch("http://localhost:8000/feedback").then(
      (response) => response.json()
    );

    {
      setFeedbacks(response);
      setFilterRecords(response);
      setLoading(false);
    }
  };
  useEffect(() => {
    getFeedbacks();
  });

  const handleFilter = (event) => {
    const newData = filterRecords.filter((row) =>
      row.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setFeedbacks(newData);
  };

  const deleteEmail = async (_id) => {
    try {
      await axios.delete(`http://localhost:8000/feedback${_id}`);
      getFeedbacks();
    } catch (error) {
      console.error("Error deleting email:", error);
    }
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentFeedbacks = feedbacks.slice(indexOfFirstItem, indexOfLastItem);
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
                <th scope="col">NAME</th>
                <th scope="col">PHONE</th>
                <th scope="col">EMAIL</th>
                <th scope="col">MESSAGE</th>
                <th scope="col">DATE</th>
                <th scope="col">ACTION</th>
              </tr>
            </thead>

            <tbody>
              {currentFeedbacks.map((feedback) => (
                <tr key={feedback._id}>
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
                      id="feedbackUpdateBtn"
                      onClick={() => deleteEmail(feedback._id)}
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
                { length: Math.ceil(feedbacks.length / itemsPerPage) },
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
                  currentPage === Math.ceil(feedbacks.length / itemsPerPage)
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
      </div>
    </>
  );
}

export default Feedbacks;

import "./ViewBlogs.css";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import LoadingSpinner from "../loader/LoadingSpinner";
import { useNavigate } from "react-router-dom";

function ViewBlogs() {
  const [blogs, setBlogs] = useState([]);

  const [filterRecords, setFilterRecords] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const Spinner = () => {
    return (
      <div class="text-center" id="loader">
        <div class="spinner-grow text-center" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  };

  const getBlogs = async () => {
    const response = await fetch("http://localhost:8000/blogs").then(
      (response) => response.json()
    );

    {
      setBlogs(response);
      setFilterRecords(response);
      setLoading(false);
    }
  };

  useEffect(() => {
    getBlogs();
  }, []);

  const handleFilter = (event) => {
    const newData = filterRecords.filter((row) =>
      row.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setBlogs(newData);
  };

  const deleteBlogs = async (_id) => {
    try {
      await axios.delete(`http://localhost:8000/blogs${_id}`); // Adjust the API endpoint
      getBlogs(); // Refresh the list after deleting
    } catch (error) {
      console.error("Error deleting email:", error);
    }
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstItem, indexOfLastItem);

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
                <th scope="col">DESCRIPTION</th>
                <th scope="col">DATE</th>
                <th scope="col">UPDATE</th>
                <th scope="col">REMOVE</th>
              </tr>
            </thead>
            
            <tbody>
              {currentBlogs.map((blog) => (
                <tr key={blog._id}>
                  <td>
                    <small>{blog._id}</small>
                  </td>
                  <td>
                    <small>{blog.title}</small>
                  </td>
                  <td>
                    <small>{blog.description}</small>
                  </td>
                  <td>
                    <small>{blog.createdAt}</small>
                  </td>
                  <td>
                    <button
                      id="feedbackUpdateBtn"
                      onClick={() => {
                        navigate(`/admni/updateblogs/${blog._id}`);
                      }}
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      id="feedbackUpdateBtn"
                      onClick={() => deleteBlogs(blog._id)}
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
                { length: Math.ceil(blogs.length / itemsPerPage) },
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
                  currentPage === Math.ceil(blogs.length / itemsPerPage)
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

export default ViewBlogs;

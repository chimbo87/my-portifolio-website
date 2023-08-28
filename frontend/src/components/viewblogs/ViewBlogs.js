import "./ViewBlogs.css";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import LoadingSpinner from "../loader/LoadingSpinner";
import { useNavigate } from "react-router-dom";

const Spinner = () => {
  return (
    <div class="text-center" id="loader">
      <div class="spinner-grow text-center" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

function ViewBlogs() {
  const [blogs, setBlogs] = useState([]);

  const [filterRecords, setFilterRecords] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

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

            {blogs.map((blog) => {
              return (
                <>
                  {!loading && (
                    <tbody>
                      <tr>
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
      </div>
    </>
  );
}

export default ViewBlogs;

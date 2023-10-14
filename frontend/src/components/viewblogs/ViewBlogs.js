import "./ViewBlogs.css";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import LoadingSpinner from "../loader/LoadingSpinner";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ViewBlogs() {
  const [blogs, setBlogs] = useState([]);
  const [deleteItemId, setDeleteItemId] = useState(null);
  const [filterRecords, setFilterRecords] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const handleSendClick = () => {
    toast.success("blog removed successfully!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
    });
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


  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstItem, indexOfLastItem);

  const showDeleteModal = (id) => {
    setDeleteItemId(id);
  };

  const closeDeleteModal = () => {
    setDeleteItemId(null);
  };
 
  const deleteBlogs = async () => {
    if (deleteItemId) {
      try {
        await axios.delete(`http://localhost:8000/blogs${deleteItemId}`);
        getBlogs(); 
        closeDeleteModal();
        handleSendClick();
      } catch (error) {
        console.error("Error deleting email:", error);
      }
    
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
                <th scope="col">HEADING</th>
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
                    <small>{blog.heading}</small>
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
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      onClick={() => showDeleteModal(blog._id)}
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
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        show={!!deleteItemId}
        onHide={closeDeleteModal}
      >
        <div class="modal-dialog  modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-body" id="theDeleteConfirmBtnbody">
              <div id="theDeleteConfirmBtnBox">
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <p>
                Are you sure you want to delete this blog post ?, the blog will
                be removed permanently
              </p>
              <div id="theDeleteConfirmBtn">
                <button
                  variant="secondary"
                  onClick={closeDeleteModal}
                  id="theDeleteConfirmBtnA"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  Cancel
                </button>
              
                <button
                  id="theDeleteConfirmBtnB"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={() => {
                    deleteBlogs();
                    
                    closeDeleteModal();
                  }}
                >
                  
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewBlogs;

import "./Blog.css";
import Footer from "../footer/Footer";
import { useState, useEffect } from "react";
import { format } from "date-fns";
import LoadingSpinner from "../loader/LoadingSpinner";
import { useNavigate } from "react-router-dom";

const Blog = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3; // Display 3 rows of single columns per page

  const getBlogs = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:8000/blogs");
      const data = await response.json();
      setBlogs(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getBlogs();
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = blogs.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <>
      <div className="container-fluid" id="blogSectionBox">
        <h4>Blogs</h4>
      </div>
      {!loading && (
        <div className="container" id="blogContainer">
          {currentItems.map((blog) => (
            <div className="row" id="blogWrap" key={blog._id}>
              <div className="col-lg-6" id="blogImg">
                <img src={`http://localhost:8000/uploads/${blog.image}`}  />
              </div>
              <div className="col-lg-6" id="blogsText">
                <h5>{blog.title}</h5>
                <div id="blogger">
                  <small>Archford N</small>
                  <small>
                    {format(new Date(blog.createdAt), "yyyy-MM-dd ")}
                  </small>
                </div>
                <p>{blog.heading}</p>
                <small>
                  ...
                  <a
                    href="#"
                    onClick={() => {
                      navigate(`/blogdescription/${blog._id}`);
                    }}
                  >
                    read more
                  </a>
                </small>
                <div id="blogViews">
                  <div id="blogLinks"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {loading && <LoadingSpinner />}

      <div className="pagination" id="blogPagination">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <i className="bx bx-arrow-back"></i>
          Prev
        </button>
        <span>
          Page {currentPage} of {Math.ceil(blogs.length / itemsPerPage)}
        </span>
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={indexOfLastItem >= blogs.length}
        >
          Next
          <i className="bx bx-arrow-back bx-flip-horizontal"></i>
        </button>
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
};

export default Blog;

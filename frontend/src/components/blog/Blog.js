import "./Blog.css";
import Footer from "../footer/Footer";
import { useState, useEffect } from "react";
import { format } from "date-fns";
import LoadingSpinner from "../loader/LoadingSpinner";
import axios from "axios";
const Blog = () => {
  const [loading, setLoading] = useState(false);
  const originalInputStyle = {
    width: "150px",
    height: "30px",
  };
  const [inputStyle, setInputStyle] = useState(originalInputStyle);
  const handleInputClick = () => {
    setInputStyle({
      width: "200px",
      height: "35px",
    });
  };
  const handleInputBlur = () => {
    setInputStyle(originalInputStyle); // Reset to original size
  };

  const [blogs, setBlogs] = useState([]);
  const [filterRecords, setFilterRecords] = useState([]);

  const getBlogs = async () => {
    setLoading(true);
    const response = await fetch("http://localhost:8000/blogs").then(
      (response) => response.json()
    );
    {
      setBlogs(response);
      setFilterRecords(response);
      setLoading(false);
    }

    console.log("our blogs list:", response);
  };

  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <>
      <div className="container-fluid" id="blogSectionBox">
        <h4>Blogs</h4>
      </div>
      {!loading && (
        <div className="container" id="blogContainer">
          {blogs.map((blog) => {
            return (
              <>
                <div class="row" id="blogWrap">
                  <div class="col-lg-6 md-4" id="blogImg">
                    <img src={blog.image} />
                  </div>

                  <div class="col-lg-6 md-4" id="blogsText">
                    <h5>{blog.title}</h5>
                    <p>{blog.description}</p>
                    <div id="blogViews">
                      <div id="blogLinks">
                        <div id="blogIcons">
                          <i class="bx bx-heart"></i>
                          <small>{blog.likes}</small>
                        </div>

                        {/* <div id="blogIcons">
                         <i class="bx bx-comment"></i>
                         <small>25</small>
                       </div> */}
                        <div id="blogIcons">
                          {/* <small>share</small> */}
                          <i class="bx bx-share bx-flip-horizontal"></i>
                        </div>
                        <div id="blogIconsinput">
                          <input
                            type="text"
                            placeholder="Add a comment"
                            style={inputStyle}
                            onClick={handleInputClick}
                            onBlur={handleInputBlur}
                          />
                        </div>
                      </div>

                      <div>
                        <small>
                          <i>
                            {format(new Date(blog.createdAt), "yyyy-MM-dd ")}
                          </i>
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
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
      )}
      {loading && <LoadingSpinner />}

      <div>
        <Footer />
      </div>
    </>
  );
};
export default Blog;
